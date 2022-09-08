import React from 'react';
//         <CovidDetails id={id} rank={rank} name={name} priceUsd={priceUsd}/>
const Currency = ({ id, rank, name, priceUsd}) => {
  return (
    <div className='mt-4 d-flex justify-content-center'>
      <h4>Search for a specific currency and view the price " {id} " is as follow :</h4>
      <div className='row mt-5'>
        <div className='col green'>
          <h1>Rank : </h1>
          <h1>{rank}</h1>
        </div>
        <div className='col red'>
          <h1>Name : </h1>
          <h1>{name}</h1>
        </div>
        <div className='col red'>
          <h1>price Usd : </h1>
          <h1>{priceUsd}</h1>
        </div>
      </div>
    </div>
  );
};

export default Currency;
