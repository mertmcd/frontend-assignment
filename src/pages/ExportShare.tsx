import React from 'react';
import Tab from '../components/Tab';

const exportShareImages = [
  'img-export-share.png',
  'img-export-share-2.png',
  'img-export-share-3.png',
  'img-export-share-4.png',
  'img-export-share-5.png',
];

const ExportShare: React.FC = () => {
  const title = 'EXPORT & SHARE';
  const header = 'All-Round Conversion';
  const description = ['Export your scans as PDF,JPG,ZIP,TXT and Word.'];
  const buttonText = 'Learn More';
  const tabName = 'export-share';

  return (
    <Tab
      title={title}
      header={header}
      description={description}
      buttonText={buttonText}
      images={exportShareImages}
      id="4"
      name={tabName}
    />
  );
};
export default ExportShare;
