/**
 * Quantum Kernel Cancer Research Lab
 * Experiment Results Data Store
 * 
 * NOTE FOR ML TEAM:
 * Populate this file as experimental runs complete.
 * All fields with `null` or `status: "pending"` will automatically display
 * verified empty states across the dashboard without breaking presentation code.
 */

export const experimentData = {
  // Metadata & verification status
  lastUpdated: null, // e.g. "2026-10-14T10:00:00Z"
  datasetVerified: false,
  experimentsConcluded: false,

  // Section C: Dataset Information
  dataset: {
    status: "pending", // "pending" | "verified"
    name: null, // e.g. "TCGA-LUAD / GEO GSE31210"
    sourceUrl: null, // e.g. "https://portal.gdc.cancer.gov/"
    samplesCount: null, // e.g. 226
    featuresCount: null, // e.g. 16 (after PCA/feature selection)
    featureExtractionMethod: null, // e.g. "PCA / SelectKBest (variance-preserving)"
    targetLabel: null, // e.g. "EGFR Mutation Status"
    classDefinitions: null, // e.g. "Class 0: EGFR Wild-Type (WT), Class 1: EGFR Mutant (L858R / Exon 19 del)"
    classDistribution: null, // e.g. { "Wild-Type": null, "Mutant": null }
    missingValuesHandling: null, // e.g. "KNN Imputation / Median Impute"
    trainTestSplit: {
      trainRatio: null, // e.g. 0.8
      testRatio: null, // e.g. 0.2
      strategy: null, // e.g. "Stratified 5-Fold Cross Validation"
      randomState: null // e.g. 42
    },
    verificationNotes: "Pending dataset verification from dataset lead."
  },

  // Section D: Model Specifications & Results
  models: {
    classical: {
      name: "Classical Baseline (e.g. RBF Support Vector Classifier)",
      framework: "scikit-learn / Classical ML",
      status: "pending", // "pending" | "in_progress" | "completed"
      kernelMethod: "Radial Basis Function (RBF) Kernel",
      hyperparameters: null, // e.g. { C: 1.0, gamma: "scale" }
      metrics: {
        accuracy: null, // e.g. 0.742
        balancedAccuracy: null, // e.g. 0.710
        macroF1: null // e.g. 0.725
      },
      confusionMatrix: null,
      // Format when populated:
      // {
      //   labels: ["WT", "Mutant"],
      //   matrix: [[tn, fp], [fn, tp]]
      // },
      runtimeSeconds: null
    },
    quantum: {
      name: "Qiskit Quantum Kernel Model",
      framework: "Qiskit Machine Learning / StatevectorSimulator",
      status: "pending", // "pending" | "in_progress" | "completed"
      kernelMethod: "FidelityQuantumKernel (ZZFeatureMap, depth=2)",
      qubitCount: null, // e.g. 8 or 16
      entanglement: null, // e.g. "linear" or "full"
      hyperparameters: null,
      metrics: {
        accuracy: null,
        balancedAccuracy: null,
        macroF1: null
      },
      confusionMatrix: null,
      runtimeSeconds: null
    }
  },

  // Section F: Verified Research Insights
  insights: {
    ready: false,
    superiorModel: null, // e.g. "classical" | "quantum" | "inconclusive"
    balancedAccuracyAnalysis: null,
    errorAnalysis: null, // false positive / false negative breakdown
    computationalCostAnalysis: null,
    fallbackMessage: "Insights will be generated from verified experiment results."
  }
};
