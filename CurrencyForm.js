import React from 'react';
import Select from 'react-select';

const CurrencyForm = ({ setSymbol, onSelect }) => {
  return (
    <div className='input-group mt-3 w-50 mx-auto'>
      <Select onChange={onSelect} className='w-100' options={setSymbol} />
    </div>
  );
};

export default CurrencyForm;
