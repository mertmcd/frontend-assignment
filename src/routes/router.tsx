import { Routes, Route, useLocation } from 'react-router-dom';

import DocumentScanner from '../pages/DocumentScanner';
import SignStamp from '../pages/SignStamp';
import BatchScanning from '../pages/BatchScanning';
import AdvancedFilters from '../pages/AdvancedFilters';
import ExportShare from '../pages/ExportShare';

import { AnimatePresence } from 'framer-motion';

export const TabRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<DocumentScanner />} />
        <Route path="/sign-stamp" element={<SignStamp />} />
        <Route path="/batch-scanning" element={<BatchScanning />} />
        <Route path="/advanced-filters" element={<AdvancedFilters />} />
        <Route path="/export-share" element={<ExportShare />} />
      </Routes>
    </AnimatePresence>
  );
};
