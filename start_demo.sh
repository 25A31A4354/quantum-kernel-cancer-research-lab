#!/usr/bin/env bash
# ======================================================================
# Quantum Kernel Cancer Research Lab - Live Demo Startup Script
# ======================================================================
# Starts both the Python/Qiskit FastAPI backend (port 8000) and
# the React/Vite frontend (port 3000) for local live demonstration.
# ======================================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "======================================================================"
echo " QUANTUM KERNEL LAB - STARTING LIVE RESEARCH DEMO"
echo "======================================================================"

# 1. Check Python virtual environment
if [ ! -d ".venv" ]; then
    echo "[-] Error: .venv virtual environment not found in $SCRIPT_DIR"
    echo "    Run: python3 -m venv .venv && .venv/bin/pip install -r requirements.txt"
    exit 1
fi

# 2. Cleanup handler to terminate background processes on Ctrl+C
cleanup() {
    echo ""
    echo "[*] Stopping live demo processes..."
    if [ ! -z "$API_PID" ]; then
        kill "$API_PID" 2>/dev/null || true
    fi
    echo "[✓] Python API stopped."
    echo "[✓] Frontend server stopped."
    echo "[✓] Demo shutdown complete."
    exit 0
}
trap cleanup SIGINT SIGTERM EXIT

# 3. Start Python FastAPI backend in background
echo "[1/2] Starting Python/Qiskit backend on http://127.0.0.1:8000 ..."
.venv/bin/python experiments/server.py &
API_PID=$!

# Wait briefly for backend to initialize
sleep 2

# 4. Start React Vite frontend
echo "[2/2] Starting React frontend on http://localhost:3000 ..."
echo ""
echo "======================================================================"
echo " LIVE DEMO READY!"
echo "   • Open in Browser: http://localhost:3000"
echo "   • Python API:      http://127.0.0.1:8000/api/status"
echo "   • Press Ctrl+C in this terminal to stop both servers"
echo "======================================================================"
echo ""

npm run dev
