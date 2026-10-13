import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ResearchOverview from './components/ResearchOverview';
import DatasetInfo from './components/DatasetInfo';
import ModelComparison from './components/ModelComparison';
import PerformanceVisualizations from './components/PerformanceVisualizations';
import ResearchInsights from './components/ResearchInsights';
import Limitations from './components/Limitations';
import Footer from './components/Footer';
import { experimentData } from './data/experimentResults';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <HeroSection models={experimentData.models} dataset={experimentData.dataset} />
      <main style={{ flex: 1 }}>
        <ResearchOverview />
        <DatasetInfo dataset={experimentData.dataset} />
        <ModelComparison models={experimentData.models} />
        <PerformanceVisualizations models={experimentData.models} />
        <ResearchInsights insights={experimentData.insights} models={experimentData.models} />
        <Limitations />
      </main>
      <Footer />
    </div>
  );
}
