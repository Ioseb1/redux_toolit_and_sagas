import { connect } from 'react-redux';

import { getCatData } from '../../modules/risk/action';
import type IState from '../../types/state';
import Controller from './Controller';


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
