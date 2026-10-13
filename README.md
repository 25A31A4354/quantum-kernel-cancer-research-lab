# Quantum Kernel Lab
### A Classical vs Quantum Machine Learning Research Prototype

Quantum Kernel Lab is an experimental machine learning project that compares a classical Support Vector Machine (SVM) with a quantum-kernel SVM implemented using Qiskit. The project explores how quantum feature maps can be used in a classification workflow and evaluates their performance against a classical baseline.

The results are presented through an interactive research dashboard built with React.

> **Research disclaimer:** This is an educational research prototype using the Breast Cancer Wisconsin Diagnostic dataset. It is not a clinical diagnostic tool and does not establish quantum advantage.

## Overview

The project evaluates two approaches to binary classification:

- **Classical model:** Support Vector Classifier (SVC) with an RBF kernel.
- **Quantum model:** SVC using a quantum fidelity kernel constructed with Qiskit's `ZZFeatureMap` and statevector simulation.

Both approaches use the same stratified training/test split to support a fair comparison.

## Features

- Interactive research dashboard built with React and Vite.
- Classical versus quantum-kernel model comparison.
- Accuracy, balanced accuracy, macro-F1, and runtime metrics.
- Confusion matrices for examining classification errors.
- Dataset metadata and preprocessing information.
- Python-based experiment pipeline using scikit-learn and Qiskit.
- FastAPI backend for triggering the actual experiment during a local demonstration.
- Saved experiment results for viewing the dashboard without rerunning the experiment.

## Dataset

This project uses the **Breast Cancer Wisconsin (Diagnostic) dataset**, which contains numerical features computed from digitized images of fine needle aspirates of breast masses.

| Property | Description |
|---|---|
| Samples | 569 |
| Input features | 30 |
| Classification task | Benign vs. malignant |
| Malignant samples | 212 |
| Benign samples | 357 |
| Training split | 80% |
| Test split | 20% |

The dataset is used for research benchmarking only. The project does not predict EGFR mutations or classify lung cancer.

## Methodology

### 1. Data preparation

- Use a stratified train/test split with a fixed random seed.
- Standardize the numerical features.
- Apply Principal Component Analysis (PCA) to reduce the input to six components.
- Fit preprocessing transformations on training data only.

### 2. Classical machine learning

Train a Support Vector Classifier using the RBF kernel as the classical baseline.

### 3. Quantum-kernel machine learning

- Encode the reduced features with a six-qubit `ZZFeatureMap`.
- Construct a quantum fidelity kernel using Qiskit's statevector simulator.
- Train and evaluate an SVC using the precomputed kernel matrices.

### 4. Evaluation

Compare the models using:

- Accuracy
- Balanced accuracy
- Macro-F1 score
- Confusion matrix
- Execution time

The quantum model's results are reported as measured. Better performance is not assumed, and no quantum advantage is claimed.

## Initial Benchmark Results

The following are the project's previously reported benchmark results. Re-run the experiment to reproduce them on your environment.

| Metric | Classical RBF-SVC | Quantum-kernel SVC |
|---|---:|---:|
| Accuracy | 95.61% | 57.89% |
| Balanced accuracy | 95.54% | 47.32% |
| Macro-F1 | 95.31% | 41.76% |
| Approximate runtime | 0.01 s | 1.51 s |

*Runtime varies by hardware and environment. These are benchmark results from a particular run, not guaranteed performance.*

The classical baseline performed substantially better in this experiment. The quantum-kernel model struggled to identify malignant cases, demonstrating why quantum machine learning requires careful feature encoding, validation, and comparison with classical methods.

## Technology Stack

**Frontend**
- React
- Vite
- JavaScript
- CSS

**Backend and machine learning**
- Python
- FastAPI
- Uvicorn
- Qiskit
- scikit-learn
- NumPy

## Project Structure

```text
quantum-kernel-lab/
├── experiments/
│   ├── run_experiment.py
│   ├── server.py
│   ├── results/
│   │   └── experiment_results.json
│   └── README.md
├── src/
│   ├── components/
│   └── data/
│       └── experimentResults.js
├── requirements.txt
├── start_demo.sh
├── package.json
└── README.md
```

*The structure above summarizes the main project files; component names and directories may vary slightly in your repository.*

## Getting Started

### Prerequisites

- Node.js and npm
- Python 3
- Git

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd YOUR_REPOSITORY_NAME
```

Replace the placeholders with your actual GitHub repository URL and directory name.

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Create a Python virtual environment

```bash
python3 -m venv .venv
```

Activate it on macOS or Linux:

```bash
source .venv/bin/activate
```

Install the Python dependencies:

```bash
pip install -r requirements.txt
```

### 4. Start the live demo

If the startup script is available and executable:

```bash
chmod +x start_demo.sh
./start_demo.sh
```

Open the local website at:

**http://localhost:3000**

The frontend and Python API must both be running for the live experiment button to work.

If the startup script does not work, start the services separately.

Terminal 1 — Python API:

```bash
.venv/bin/python experiments/server.py
```

Terminal 2 — React frontend:

```bash
npm run dev
```

Open the local URL printed by Vite. If configured as in this project, it will be `http://localhost:3000`.

### 5. Run the experiment directly

To execute the research pipeline independently:

```bash
.venv/bin/python experiments/run_experiment.py
```

The experiment generates results that can be inspected and used by the dashboard. Follow the experiment documentation if your local setup uses a different command or output location.

## Live Experiment API

The local FastAPI backend exposes the following endpoints:

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/status` | Check whether the backend is running |
| POST | `/api/run-experiment` | Execute the experiment and return its results |

Local backend status:

**http://127.0.0.1:8000/api/status**

The live API is intended for local demonstration. The public frontend hosted on Vercel cannot access `127.0.0.1` on your laptop when opened by a remote user.

## Deployment

The React frontend can be deployed to Vercel using the repository's Vite build configuration.

Typical settings:

- Build command: `npm run build`
- Output directory: `dist`

The deployed dashboard can display the saved experiment results. Running the actual Python/Qiskit experiment from the public website requires a separately deployed and configured backend; it is not provided by frontend hosting alone.

## Limitations

- The dataset is relatively small and represents a specific binary classification task.
- PCA reduces the original feature space and may discard information.
- Quantum feature-map performance depends on encoding, circuit configuration, and preprocessing.
- Statevector simulation is a classical simulation of quantum circuits, not execution on quantum hardware.
- A single train/test split does not establish generalization across independent clinical populations.
- The experiment does not demonstrate quantum advantage.
- The model is not intended for clinical decision-making.

## Future Work

Possible research extensions include:

- Cross-validation and repeated-seed experiments.
- Controlled comparisons of quantum feature-scaling strategies.
- Analysis of quantum kernel matrices and their distributions.
- Experiments with alternative quantum feature maps.
- Evaluation on additional datasets.
- Testing on real quantum hardware when suitable access is available.

## Responsible Use

This project is intended for education and machine learning research. It must not be used to diagnose patients, guide treatment, or replace professional medical evaluation.

## Acknowledgements

- [Qiskit](https://qiskit.org/)
- [scikit-learn](https://scikit-learn.org/)
- [UCI Machine Learning Repository](https://archive.ics.uci.edu/)

---

**Quantum Kernel Lab — Exploring quantum-kernel methods through reproducible experimentation.**
