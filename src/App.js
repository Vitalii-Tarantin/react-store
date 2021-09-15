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
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
   axios.get('https://613f8e11e9d92a0017e17778.mockapi.io/items').then((res) => {
     setItems(res.data);
   });
   axios.get('https://613f8e11e9d92a0017e17778.mockapi.io/cart').then((res) => {
    setCartItems(res.data);
  });
  axios.get('https://613f8e11e9d92a0017e17778.mockapi.io/favorite').then((res) => {
      setFavorites(res.data);
  });
  }, []); 

  const onAddToCart = (obj) => {
    axios.post('https://613f8e11e9d92a0017e17778.mockapi.io/cart', obj);
    setCartItems([ ...cartItems, obj]);
  };

  const onRemoveItem = (id) => {
    
    axios.delete(`https://613f8e11e9d92a0017e17778.mockapi.io/cart/${id}`);
    setCartItems((cartItems) => cartItems.filter(item => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try { 
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://613f8e11e9d92a0017e17778.mockapi.io/favorites/${obj.id}`);
        setFavorites((favorites) => favorites.filter((item) => item.id !== obj.id));
      } else {
       const { data } = await axios.post('https://613f8e11e9d92a0017e17778.mockapi.io/favorites', obj);
        setFavorites((favorites) => [ ...favorites, data]);
      }
      
    } catch (error) {
      alert('ne ydalos dobavit v favoritu')
    }
    
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

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
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
              
            />
        </Route>

        <Route path="/favorites" exact>
          <Favorites 
            items={favorites}
            onAddToFavorite={onAddToFavorite}
          />
        </Route>

     </div>
  );
}

export default App;
