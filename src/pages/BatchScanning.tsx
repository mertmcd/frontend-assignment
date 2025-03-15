import React from 'react';
import Tab from '../components/Tab';

const batchScanningImages = [
  'img-batch-scanning.png',
  'img-batch-scanning-2.png',
  'img-batch-scanning-3.png',
  'img-batch-scanning-4.png',
];

const BatchScanning: React.FC = () => {
  const title = 'BATCH SCANNING';
  const header = 'Multiple Page Scan';
  const description = [
    'LScan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.',
  ];
  const buttonText = 'Learn More';
  const tabName = 'batch-scanning';

  return (
    <Tab
      title={title}
      header={header}
      description={description}
      buttonText={buttonText}
      images={batchScanningImages}
      id="2"
      name={tabName}
    />
  );
};
export default BatchScanning;
