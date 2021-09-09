function App() {
  return (
    <div className="wrapper clear">

      <div className="overlay">
        <div className="drawer">
          <h2 className="d-flex justify-between mb-30 ">Корзина<img className="cu-p" src="/img/btn-remove.svg" alt="Remove" /></h2>

         <div className="items">
          <div className="cartItem d-flex align-center mb-20" >
           

            <div style={{backgroundImage: 'url(/img/snrakers/1.jpg)'}} className="cartItemImg"></div>

            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>6800 uah.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
          <div className="cartItem d-flex align-center mb-20" >
           

            <div style={{backgroundImage: 'url(/img/snrakers/1.jpg)'}} className="cartItemImg"></div>

            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>6800 uah.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
          <div className="cartItem d-flex align-center mb-20" >
           

            <div style={{backgroundImage: 'url(/img/snrakers/1.jpg)'}} className="cartItemImg"></div>

            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>6800 uah.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
          <div className="cartItem d-flex align-center mb-20" >
           

            <div style={{backgroundImage: 'url(/img/snrakers/1.jpg)'}} className="cartItemImg"></div>

            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>6800 uah.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
          <div className="cartItem d-flex align-center mb-20" >
           

            <div style={{backgroundImage: 'url(/img/snrakers/1.jpg)'}} className="cartItemImg"></div>

            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>6800 uah.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
          <div className="cartItem d-flex align-center mb-20" >
           

            <div style={{backgroundImage: 'url(/img/snrakers/1.jpg)'}} className="cartItemImg"></div>

            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>6800 uah.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
          <div className="cartItem d-flex align-center mb-20" >
           

            <div style={{backgroundImage: 'url(/img/snrakers/1.jpg)'}} className="cartItemImg"></div>

            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>6800 uah.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
          v
          <div className="cartItem d-flex align-center mb-20" >
           

            <div style={{backgroundImage: 'url(/img/snrakers/1.jpg)'}} className="cartItemImg"></div>

            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>6800 uah.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
          <div className="cartItem d-flex align-center mb-20" >
           

            <div style={{backgroundImage: 'url(/img/snrakers/1.jpg)'}} className="cartItemImg"></div>

            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>6800 uah.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
          <div className="cartItem d-flex align-center mb-20" >
           

            <div style={{backgroundImage: 'url(/img/snrakers/2.jpg)'}} className="cartItemImg"></div>

            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>6800 uah.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
         </div>
        <div className="cartTotalBlock">
        <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b> 14 800 грн.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b> 2 400 грн.</b>
            </li>
          </ul>
          <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow"/></button>
        </div>
         
        </div>
      </div>

      <header className="d-flex justify-between p-40">
      <div className="d-flex align-center">
        <img width = {40} height = {40} src="/img/logo.png" alt="Store" />
        <div>
          <h3 className="text-uppercase">Rocksi Store</h3>
          <p className="opacity-5">Магазин лучших кросовок!</p>
        </div>
      </div>
        <ul className="d-flex">
          <li className="mr-30 justify-between align-center">
            <img width = {18} height = {18} src="/img/cart.svg" alt="Card" />
            <span>1205 UAH</span>
          </li>
          <li>
            <img width = {18} height = {18} src="/img/user.svg" alt ="Profile"/>

          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
        <h1>Все кросовки</h1>
        <div classNane="search d-flex">
          <img src="/img/search.svg"  alt="Search" />
          <input placeholder="Поиск..." />
        </div>
        </div>

        <div className="d-flex">
        <div className="card">
          <div className="favorite">
          <img src="/img/heart-unliked.svg" alt="unliked" />
          </div>
          <img width={133} height={112} src="/img/snrakers/1.jpg" alt="NikeBlazer" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Price:</span>
              <b>7800 uah</b>
            </div>
            <button className="button"><img width={11} height={11} src="/img/plus.svg" alt="Plus" /></button>
          </div>
        </div>

        
        <div className="card">
          <img width={133} height={112} src="/img/snrakers/2.jpg" alt="NikeAir" />
          <h5>Мужские Кроссовки Nike Air Max 270</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Price:</span>
              <b>6800 uah</b>
            </div>
            <button className="button"><img width={11} height={11} src="/img/plus.svg" alt="Plus" /></button>
          </div>
        </div>

        
        <div className="card">
          <img width={133} height={112} src="/img/snrakers/3.jpg" alt="Nike" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Price:</span>
              <b>7800 uah</b>
            </div>
            <button className="button"><img width={11} height={11} src="/img/plus.svg" alt="Plus" /></button>
          </div>
        </div>

        
        <div className="card">
          <img width={133} height={112} src="/img/snrakers/4.jpg" alt="Puma" />
          <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Price:</span>
              <b>4800 uah</b>
            </div>
            <button className="button"><img width={11} height={11} src="/img/plus.svg" alt="Plus" /></button>
          </div>
        </div>

      </div>

      </div>
    </div>
  );
}

export default App;
