import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://613f8e11e9d92a0017e17778.mockapi.io/items')
    .then(res => {
      return res.json();
    })
    .then(json => {
      setItems(json)
    });
  }, []); 

  const onAddToCart = (obj) => {
    setCartItems([ ...cartItems, obj]);
  }

  return (
    <div className="wrapper clear">
     {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)}  />}
      <Header 
      onClickCart={() => setCartOpened(true)} 
      />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кросcовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg"  alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
           {items.map((item) => (
              <Card 
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
