import React from 'react';

import { Loader } from '@components/Loader';
import type { IRisk } from '@modules/risk/types';


export type IViewProps = {
    cats: IRisk[];
    handleButtonClick: () => void;
    isLoading: boolean;
};

const View = ({ cats, handleButtonClick, isLoading }: IViewProps) => {
    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <div className='Gallery'>
                        {cats &&
                            cats.map((cat: IRisk, index: number) => (
                                <div key={index} className='row'>
                                    <div className='column column-left'></div>

                                    <div className='column column-right'>
                                        <h2>{cat.name}</h2>
                                        <h5>Temperament: {cat.temperament}</h5>
                                        <p>{cat.description}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <button onClick={handleButtonClick}>View More Risks</button>
                </>
            )}
        </>
    );
};

export default React.memo(View);
