import React from 'react';

import { Loader } from '../../components/Loader';
import { CatType } from '../../types/CatType';

const View = ({ cats, handleButtonClick, isLoading }: CatType) => {
    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <div className='Gallery'>
                        {cats &&
              cats.map((cat: CatType) => {
                  return (
                      <div key={cat.id} className='row'>
                          <div className='column column-left'></div>

                          <div className='column column-right'>
                              <h2>{cat.name}</h2>
                              <h5>Temperament: {cat.temperament}</h5>
                              <p>{cat.description}</p>
                          </div>
                      </div>
                  );
              })}
                    </div>
                    <button onClick={handleButtonClick}>View More Cats</button>
                </>
            )}
        </>
    );
};

export default React.memo(View);
