function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between p-40">
      <div className="d-flex align-center">
        <img width = {40} height = {40} src="/img/logo.png" />
        <div>
          <h3 className="text-uppercase">Rocksi Shoop</h3>
          <p className="opacity-5">Best brend!</p>
        </div>
      </div>
        <ul className="d-flex">
          <li className="mr-30 justify-between align-center">
            <img width = {18} height = {18} src="/img/cart.svg"  />
            <span>1205 UAH</span>
          </li>
          <li>
            <img width = {18} height = {18} src="/img/user.svg"   />

          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">All Sneakers</h1>

        <div className="d-flex">
        <div className="card">
          <img width={133} height={112} src="/img/snrakers/1.jpg" alt="Sneakers" />
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
          <img width={133} height={112} src="/img/snrakers/2.jpg" alt="Sneakers" />
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
          <img width={133} height={112} src="/img/snrakers/3.jpg" alt="Sneakers" />
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
          <img width={133} height={112} src="/img/snrakers/4.jpg" alt="Sneakers" />
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
