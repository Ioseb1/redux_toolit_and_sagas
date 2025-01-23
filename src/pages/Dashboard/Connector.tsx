import { connect } from 'react-redux';

import { RootState } from '../../store/store';
import { getCatData } from '../../modules/dashboard/action';
import Controller from './Controller';

const mapStateToProps = (state: RootState) => {
  return {
    cats: state['0'].catsData,
    isLoading: state.isLoading,
  };
};

const mapActionsToProps = {
  getCatData,
};

export default connect(mapStateToProps, mapActionsToProps)(Controller);
