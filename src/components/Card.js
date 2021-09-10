function Card() {
    return(
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
    );
}

export default Card;