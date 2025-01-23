import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxState';
import { getCatsFetch } from '../../catState';
import { selectCats } from '../../modules/dashboard/selectors';
import View from './View';

const Controller = () => {
  const cats = useAppSelector(selectCats);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);

  const handleButtonClick = () => {
    alert('Load more data!');
  };

  return <View cats={cats} handleButtonClick={handleButtonClick} />;
};

export default Controller;
