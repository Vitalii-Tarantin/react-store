function Header() {
    return (
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
    );
}
export default Header;