import React from 'react';
import Tab from '../components/Tab';

const documentScannerImages = ['img-document-scanner.png'];

const DocumentScanner: React.FC = () => {
  const title = 'DOCUMENT SCANNER';
  const header = 'Scan with Ease';
  const description = [
    'Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format.',
  ];
  const buttonText = 'Learn More';
  const tabName = 'document-scanner';

  return (
    <Tab
      title={title}
      header={header}
      description={description}
      buttonText={buttonText}
      images={documentScannerImages}
      id="3"
      name={tabName}
    />
  );
};
export default DocumentScanner;
