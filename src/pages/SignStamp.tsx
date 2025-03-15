import React from 'react';
import Tab from '../components/Tab';

const signStampImages = [
  'img-sign-stamp.png',
  'img-sign-stamp-2.png',
  'img-sign-stamp-3.png',
];

const SignStamp: React.FC = () => {
  const title = 'SIGN & STAMP';
  const header = 'One-Tap Focus';
  const description = [
    'Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!',
  ];
  const buttonText = 'Learn More';
  const tabName = 'sign-stamp';

  return (
    <Tab
      title={title}
      header={header}
      description={description}
      buttonText={buttonText}
      images={signStampImages}
      id="5"
      name={tabName}
    />
  );
};
export default SignStamp;
