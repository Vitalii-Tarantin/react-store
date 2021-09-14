import React from 'react';
import axios from 'axios'
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState();
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://613f8e11e9d92a0017e17778.mockapi.io/items')
    .then(res => {
      return res.json();
    })
    .then(json => {
      setItems(json)
    });
    axios.get('https://613f8e11e9d92a0017e17778.mockapi.io/items').then((res) => {
      console.log(res.data);
    });
  }, []); 

  const onAddToCart = (obj) => {
    setCartItems([ ...cartItems, obj]);
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper clear">
     {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)}  />}
      <Header 
      onClickCart={() => setCartOpened(true)} 
      />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Пошук по запиту: "${searchValue}" ` : 'Каталог кросівок'}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg"  alt="Search" />
            {searchValue && (
              <img
                onClick={() => setSearchValue('')}
                className="clear cu-p" 
                src="/img/btn-remove.svg" 
                alt="Clear" 
              />
            )}
            <input 
              onChange={ onChangeSearchInput } 
              value={searchValue} 
              placeholder="Пошук..." 
            />
          </div>
        </div>

        <div className="d-flex flex-wrap">
           {items
           .filter((item) => item.title.toLowerCase().includes(searchValue))
           .map((item, index) => (
              <Card 
                key = {index}
                title= {item.title}
                price={item.price} 
                imageUrl={item.imageUrl}
                onPlus={(obj) => onAddToCart(obj)}
                onFavorite={() => console.log('Добавили в закладки')}
              />
           ))}
        </div>
      </div>
    </div>
  );
}

export default App;
