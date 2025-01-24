import { useEffect } from 'react';

import View from './View';

type IControllerProps = {
  cats: any;
  isLoading: boolean;
  getCatData: () => void;
};

const Controller = ({ cats, isLoading, getCatData }: IControllerProps) => {
  useEffect(() => {
    getCatData();
  }, []);

  const handleButtonClick = () => {
    alert('Load more data!');
  };

  return (
    <View
      cats={cats}
      handleButtonClick={handleButtonClick}
      isLoading={isLoading}
    />
  );
};

export default Controller;
