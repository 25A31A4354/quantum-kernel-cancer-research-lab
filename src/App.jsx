import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ResearchOverview from './components/ResearchOverview';
import DatasetInfo from './components/DatasetInfo';
import ModelComparison from './components/ModelComparison';
import PerformanceVisualizations from './components/PerformanceVisualizations';
import ResearchInsights from './components/ResearchInsights';
import Limitations from './components/Limitations';
import Footer from './components/Footer';
import { experimentData as fallbackData } from './data/experimentResults';

export default function App() {
  const [data, setData] = useState(fallbackData);
  const [isRunning, setIsRunning] = useState(false);
  const [runFeedback, setRunFeedback] = useState(null);
  const [apiOnline, setApiOnline] = useState(null);

  const isLocal = typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

  // Check if local API is accessible on initial mount (only on localhost)
  useEffect(() => {
    let isMounted = true;
    if (!isLocal) {
      setApiOnline(false);
      return;
    }

    const checkApi = async () => {
      try {
        const res = await fetch('http://127.0.0.1:8000/api/status');
        if (res.ok && isMounted) {
          setApiOnline(true);
        } else if (isMounted) {
          setApiOnline(false);
        }
      } catch {
        if (isMounted) {
          setApiOnline(false);
        }
      }
    };
    checkApi();
    return () => {
      isMounted = false;
    };
  }, [isLocal]);

  const handleRunLiveExperiment = async () => {
    if (isRunning) return;

    if (!isLocal) {
      setRunFeedback({
        type: 'info',
        message: 'Live Qiskit quantum kernel execution runs via the local Python/FastAPI backend (localhost:8000). The deployed dashboard displays verified benchmark results. To execute live quantum circuits, clone the repository and run ./start_demo.sh locally.',
      });
      return;
    }

    setIsRunning(true);
    setRunFeedback({
      type: 'info',
      message: 'Executing Qiskit 6-qubit quantum kernel vs. classical RBF benchmark on localhost...',
    });

    try {
      const response = await fetch('http://127.0.0.1:8000/api/run-experiment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || errData.message || `API returned status ${response.status}`);
      }

      const result = await response.json();
      if (result.success && result.data) {
        setData(result.data);
        setApiOnline(true);
        const qRuntime = result.data.models?.quantum?.runtimeSeconds || '1.5';
        setRunFeedback({
          type: 'success',
          message: `Live experiment successfully executed in ${qRuntime}s! Newly generated metrics, bars, and confusion matrices updated.`,
          timestamp: result.executedAt,
        });
      } else {
        throw new Error(result.error || 'Failed to parse live experiment response.');
      }
    } catch (err) {
      console.error('Failed to run live experiment:', err);
      setApiOnline(false);
      setRunFeedback({
        type: 'error',
        message: `Failed to connect to local Python backend (${err.message}). Start the API with: .venv/bin/python experiments/server.py`,
      });
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header
        apiOnline={apiOnline}
        isRunning={isRunning}
        onRunExperiment={handleRunLiveExperiment}
      />
      <HeroSection
        models={data.models}
        dataset={data.dataset}
        isRunning={isRunning}
        onRunExperiment={handleRunLiveExperiment}
        runFeedback={runFeedback}
        isLiveRun={data.isLiveRun}
        apiOnline={apiOnline}
        lastUpdated={data.lastUpdated}
      />
      <main style={{ flex: 1 }}>
        <ResearchOverview />
        <DatasetInfo dataset={data.dataset} />
        <ModelComparison
          models={data.models}
          isRunning={isRunning}
          onRunExperiment={handleRunLiveExperiment}
          isLiveRun={data.isLiveRun}
        />
        <PerformanceVisualizations models={data.models} />
        <ResearchInsights insights={data.insights} models={data.models} />
        <Limitations />
      </main>
      <Footer />
    </div>
  );
}
