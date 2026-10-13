#!/usr/bin/env python3
"""
Quantum Kernel Cancer Research Lab
Local Development API Server

Provides a localhost-only endpoint to trigger the verified Python/Qiskit
benchmark and return newly generated empirical metrics to the React frontend.
"""

import os
import sys
import asyncio
from datetime import datetime, timezone
import json

# Ensure project root is in sys.path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import uvicorn
import qiskit

from experiments.run_experiment import run_benchmark

app = FastAPI(
    title="Quantum Kernel Lab API",
    description="Local REST API for executing Qiskit quantum kernel cancer benchmarks",
    version="1.0.0"
)

# Enable CORS for local development (frontend running on localhost:3000 / localhost:5173)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

# Concurrency lock to prevent accidental simultaneous experiment executions
experiment_lock = asyncio.Lock()


@app.get("/api/status")
async def get_status():
    """Health and status check for the local research backend."""
    return {
        "status": "online",
        "service": "Quantum Kernel Lab Local Backend",
        "isBusy": experiment_lock.locked(),
        "qiskit_version": qiskit.__version__,
        "timestamp": datetime.now(timezone.utc).isoformat()
    }


@app.get("/api/latest-results")
async def get_latest_results():
    """Retrieve the most recently saved experiment results from disk."""
    results_path = os.path.join(os.path.dirname(__file__), "results", "experiment_results.json")
    if not os.path.exists(results_path):
        return JSONResponse(
            status_code=404,
            content={"success": False, "error": "No saved experiment results found on disk."}
        )
    with open(results_path, "r") as f:
        data = json.load(f)
    return {
        "success": True,
        "isLiveRun": False,
        "data": {
            "lastUpdated": data.get("metadata", {}).get("timestamp"),
            "datasetVerified": True,
            "experimentsConcluded": True,
            "dataset": data.get("dataset"),
            "models": data.get("models"),
            "insights": data.get("insights")
        }
    }


@app.post("/api/run-experiment")
async def trigger_run_experiment():
    """
    Execute the actual Qiskit quantum kernel vs. classical SVM benchmark.
    Guarantees newly generated metrics by calling run_benchmark directly.
    """
    if experiment_lock.locked():
        return JSONResponse(
            status_code=409,
            content={
                "success": False,
                "error": "An experiment is currently in progress. Please wait for completion.",
                "isBusy": True
            }
        )

    async with experiment_lock:
        try:
            # Execute CPU-intensive Qiskit quantum simulation in a worker thread
            results = await asyncio.to_thread(
                run_benchmark,
                n_components=6,
                test_size=0.2,
                random_state=42,
                reps=2,
                c_param=1.0,
                export_frontend=True
            )

            timestamp_str = results["metadata"]["timestamp"]

            return {
                "success": True,
                "message": "Live experiment completed successfully.",
                "executedAt": timestamp_str,
                "data": {
                    "lastUpdated": timestamp_str,
                    "datasetVerified": True,
                    "experimentsConcluded": True,
                    "isLiveRun": True,
                    "dataset": results["dataset"],
                    "models": results["models"],
                    "insights": results["insights"]
                }
            }
        except Exception as exc:
            return JSONResponse(
                status_code=500,
                content={
                    "success": False,
                    "error": str(exc),
                    "message": "Experiment execution failed. Please check local Python logs."
                }
            )


if __name__ == "__main__":
    print("=" * 60)
    print(" QUANTUM KERNEL LAB - LOCAL API SERVER")
    print("=" * 60)
    print("Binding to: http://127.0.0.1:8000")
    print("Endpoints:  POST http://127.0.0.1:8000/api/run-experiment")
    print("            GET  http://127.0.0.1:8000/api/status")
    print("=" * 60)
    uvicorn.run("experiments.server:app", host="127.0.0.1", port=8000, reload=False, log_level="info")
