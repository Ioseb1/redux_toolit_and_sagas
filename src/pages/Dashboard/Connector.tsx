import { connect } from 'react-redux';

import { getCatData } from '../../modules/dashboard/action';
import type IState from '../../types/state';
import Controller from './Controller';

const mapStateToProps = (state: IState) => {
  return {
    cats: state.dashboardReducer.catsData,
    isLoading: state.dashboardReducer.isLoading,
  };
};

const mapActionsToProps = {
  getCatData,
};

export default connect(mapStateToProps, mapActionsToProps)(Controller);
