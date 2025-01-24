import { connect } from 'react-redux';

import Controller from './Controller';
import { getCatData } from '../../modules/risk/action';
import type IState from '../../types/state';


const mapStateToProps = (state: IState) => {
    return {
        risks: state.riskReducer.risks,
        isLoading: state.riskReducer.isLoading,
    };
};

const mapActionsToProps = {
    getCatData,
};

export default connect(mapStateToProps, mapActionsToProps)(Controller);
