import React from 'react'
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede',
  price: 7873, imageUrl: '/img/sneakers/1.jpg', },
  { title: 'Мужские Кроссовки Nike Air Max 270',
  price: 9899, imageUrl: '/img/sneakers/2.jpg',  },
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede',
  price: 7243, imageUrl: '/img/sneakers/3.jpg',  },
  { title: 'Кроссовки Puma X Aka Boku Future Rider',
  price: 5820, imageUrl: '/img/sneakers/4.jpg',  },
];

function App() {
  
  return (
    <div className="wrapper clear">
     
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кросcовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg"  alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
           {arr.map((obj) => (
              <Card 
                title= {obj.title}
                price={obj.price} 
                imageUrl={obj.imageUrl}
                onPlus={() => console.log('Нажали плюс')}
                onFavorite={() => console.log('Добавили в закладки')}
              />
           ))}
        </div>
      </div>
    </div>
  );
}

export default App;
