# Quantum Kernel Cancer Research Lab: Experimental Protocol & Methodology

This folder contains the complete, reproducible Python experiment comparing classical support vector machines against quantum-kernel machine learning using Qiskit.

---

## 1. Research Question

> **"Can an unoptimized Qiskit quantum-kernel machine learning model learn useful patterns from real oncological diagnostic data, and how does it compare with a classical support vector machine baseline?"**

---

## 2. Dataset Provenance & Justification

* **Dataset:** Breast Cancer Wisconsin (Diagnostic) Dataset (WDBC)
* **Citation:** Dr. William H. Wolberg, W. Nick Street, Olvi L. Mangasarian (1995), University of Wisconsin Hospitals. UCI Machine Learning Repository.
* **Why this dataset was selected:**
  * Raw local clinical sequencing files for the provisionally explored EGFR mutation prediction task in Non-Small Cell Lung Cancer were not available locally in this offline environment.
  * In strict adherence to scientific integrity (no invented or hallucinated clinical labels), we utilize this verified, peer-reviewed clinical oncological benchmark.
* **Task:** Binary classification of digitized breast mass fine-needle aspirates into:
  * **Class 0:** Malignant (212 samples, 37.3%)
  * **Class 1:** Benign (357 samples, 62.7%)
* **Samples:** 569 total patients (455 training, 114 testing).
* **Features:** 30 continuous real-valued nuclear morphometry features (radius, texture, perimeter, area, smoothness, compactness, concavity, concave points, symmetry, fractal dimension).

---

## 3. Experimental Methodology & Rigor

To prevent data leakage and ensure an exact, apples-to-apples comparison:

1. **Stratified Holdout Split:**
   * 80% Train ($N=455$), 20% Test ($N=114$).
   * Fixed random seed (`seed=42`) preserving class ratios.
2. **Zero-Leakage Preprocessing:**
   * `StandardScaler` is fitted **strictly on training data** and applied to test data.
   * Dimensionality reduction via `PCA(n_components=6)` is fitted **strictly on training data** to map the 30 continuous features onto 6 qubits, capturing 89.08% of cumulative variance.
3. **Identical Partitions:**
   * Both the Classical and Quantum pipelines are trained on the exact same 455 training samples and evaluated on the exact same 114 test samples.

---

## 4. Models Evaluated

### A. Classical Baseline
* **Algorithm:** Support Vector Classifier (`SVC`, scikit-learn)
* **Kernel:** Radial Basis Function (`RBF`), $\exp(-\gamma \|x - x'\|^2)$, $\gamma = \text{'scale'}$
* **Regularization:** $C = 1.0$

### B. Quantum-Kernel Model
* **Algorithm:** Quantum Support Vector Classifier (`QSVC`) with Qiskit Statevector Simulation
* **Quantum Feature Map:** 6-qubit `ZZFeatureMap` (`reps=2`, linear entanglement)
* **Fidelity Kernel:** Evaluates transition state fidelity $K(x_i, x_j) = |\langle 0| U^\dagger(x_i) U(x_j) |0 \rangle|^2$ in Hilbert space.
* **Simulation Mode:** Exact statevector simulation (ideal noiseless quantum simulator).

---

## 5. Scientific Findings & Empirical Observations

| Metric | Classical Baseline (RBF-SVC) | Quantum Kernel (ZZFeatureMap) | Delta (Q - C) |
| :--- | :---: | :---: | :---: |
| **Accuracy** | **95.61%** | 57.89% | -37.72% |
| **Balanced Accuracy** | **95.54%** | 47.32% | -48.22% |
| **Macro-F1** | **95.31%** | 41.76% | -53.55% |
| **Malignant Recall (Class 0)** | **95.24%** (40/42) | 7.14% (3/42) | -88.10% |
| **Benign Recall (Class 1)** | **95.83%** (69/72) | 87.50% (63/72) | -8.33% |
| **Execution Time** | **0.0057s** | 1.6282s | +285x |

### Critical Scientific Insights:
1. **Absence of Quantum Advantage on Continuous Tabular Data:**
   * The classical RBF kernel achieved 95.6% accuracy, while the generic unoptimized quantum feature map achieved 57.9%.
2. **Class Collapse & Possible Explanations:**
   * The quantum kernel suffered from severe class collapse: it predicted the majority class (Benign) in 102 out of 114 test cases, missing 39 of 42 malignant cases (false negatives).
   * Empirical audit revealed that feeding continuous unscaled PCA components into periodic $ZZ$-rotation gates caused rapid phase wrapping and state orthogonality ($K_{ij} \approx 0.019$).
   * While quantum machine learning theory documents exponential concentration in expressive ansatzes, in this setup phase wrapping is the primary demonstrated limitation; exponential kernel concentration is a possible contributing hypothesis rather than an empirically proven cause.
3. **Simulation vs. Physical Quantum Hardware:**
   * This local experiment ran on a noiseless statevector simulator. Physical noisy intermediate-scale quantum (NISQ) hardware would introduce gate infidelity, thermal relaxation ($T_1$), and dephasing ($T_2$), requiring robust error mitigation.

---

## 6. How to Reproduce

Run the experiment locally with the project virtual environment:

```bash
# 1. Run the default 6-qubit benchmark (updates frontend automatically)
.venv/bin/python experiments/run_experiment.py

# 2. Or customize parameters:
.venv/bin/python experiments/run_experiment.py --qubits 4 --reps 1 --seed 42
```
