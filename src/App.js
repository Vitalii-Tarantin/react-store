import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';

import Home from './pages/Home';
import Favorites from './pages/Favorites'
function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState();
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
   axios.get('https://613f8e11e9d92a0017e17778.mockapi.io/items').then((res) => {
     setItems(res.data);
   });
   axios.get('https://613f8e11e9d92a0017e17778.mockapi.io/cart').then((res) => {
    setCartItems(res.data);
  });
  axios.get('https://613f8e11e9d92a0017e17778.mockapi.io/favorites').then((res) => {
      setFavorites(res.data);
  })
  }, []); 

  const onAddToCart = (obj) => {
    axios.post('https://613f8e11e9d92a0017e17778.mockapi.io/cart', obj);
    setCartItems([ ...cartItems, obj]);
  }

  const onRemoveItem = (id) => {
    
    axios.delete(`https://613f8e11e9d92a0017e17778.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  const onAddToFavorite = (obj) => {
    axios.post('https://613f8e11e9d92a0017e17778.mockapi.io/favorites', obj);
    setFavorites([ ...favorites, obj]);
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper clear">
     {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}  />}
      <Header 
        onClickCart={() => setCartOpened(true)} 
      />

        <Route path="/" exact>
           <Home 
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToCart={onAddToCart}
              onAddToFavorite={onAddToFavorite}
            />
        </Route>

        <Route path="/favorites" exact>
          <Favorites 
            items={favorites}
          />
        </Route>

     </div>
  );
}

export default App;
