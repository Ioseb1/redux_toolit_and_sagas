import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxState';
import { selectCats, selectIsLoading } from '../../modules/dashboard/selectors';
import { getCatsFetch } from '../../modules/dashboard/slices';
import View from './View';

const Controller = () => {
  const cats = useAppSelector(selectCats);
  const isLoading = useAppSelector(selectIsLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);

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
