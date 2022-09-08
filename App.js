import { useEffect, useState } from 'react';
import './App.css';
import Currency from './component/Currency';
import Spinner from './component/Spinner';
import CurrencyForm from './component/CurrencyForm';

const App = () => {
  const [id, setId] = useState(0);
  const [rank, setRank] = useState(0);
  const [name, setName] = useState('');
  const [priceUsd, setPriceUsd] = useState(0);
  const[symbol,setSymbol]=useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrencyData = async () => {
      const request = await fetch('https://api.coincap.io/v2/assets');
      const data = await request.json();
      setId(data.id.value);
      setRank(data.rank.value);
      setName(data.name.value);
      setPriceUsd(data.priceUsd.value);
    };
    fetchCurrencyData();
  }, []);

  useEffect(() => {
    const fetchSymbolData = async () => {
      const request = await fetch('https://api.coincap.io/v2/assets');
      const data = await request.json();

      const symbolMap = data.symbol.map((symbol) => {
        return {
          value: symbol.value,
          label: symbol.value,
        };
      });
      setSymbol(symbolMap);
      console.log(data);
      setLoading(false);
    };
    fetchSymbolData();
  }, []);

  // const onSelect = async (option) => {
  //   console.log(option);
  //   setLoading(true);
  //   const request = await fetch(
  //     'https://cryptoflash-icons-api.herokuapp.com/svg/color/' + option.value
  //   );
  //   const data = await request.json();
  //   setId(option.label);
  //   setRank(data.rank.value);
  //   setName(data.name.value);
  //   setPriceUsd(data.priceUsd.value);
  //   setLoading(false);
  // };

  return (
    <div className='container text-center mt-5'>
      {loading ? (
        <Spinner />
      ) : (
        <>
        <CurrencyForm
            symbol={symbol}
            onSelect={onSelect}
          />
       <Currency id={id} rank={rank} name={name} priceUsd={priceUsd}/>
          
        </>
      )}
    </div>
  );
};
export default App;
