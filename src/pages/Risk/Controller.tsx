import { useEffect } from 'react';

import type{ IRisk } from '@modules/risk/types';

import View from './View';


type IControllerProps = {
  risks: IRisk[];
  isLoading: boolean;
  getRisks: () => void;
};

const Controller = ({ risks, isLoading, getRisks }: IControllerProps) => {
    useEffect(() => {
        getRisks();
    }, [getRisks]);

    const handleButtonClick = () => {
        alert('Load more data!');
    };

    return (
        <View
            cats={risks}
            handleButtonClick={handleButtonClick}
            isLoading={isLoading}
        />
    );
};

export default Controller;
