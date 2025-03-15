import React from 'react';
import Tab from '../components/Tab';

const AdvancedFiltersImages = [
  'img-advanced-filters.png',
  'img-advanced-filters-2.png',
  'img-advanced-filters-3.png',
];
const AdvancedFilters: React.FC = () => {
  const title = 'ADVANCED FILTERS';
  const header = 'Unique Filters';
  const description = [
    'Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.',
  ];
  const buttonText = 'Learn More';
  const tabName = 'advanced-filters';

  return (
    <Tab
      title={title}
      header={header}
      description={description}
      buttonText={buttonText}
      images={AdvancedFiltersImages}
      id="1"
      name={tabName}
    />
  );
};

export default AdvancedFilters;
