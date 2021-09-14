import React from 'react'
import styles from './Card.module.scss'

function Card({ imageUrl, title, price, onFavorite, onPlus}) {
  // const onClickButton = () => {
  //   alert(props.title);
  // }

  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

    const onClickPlus = () => {
      onPlus({ imageUrl, title, price });
      setIsAdded(!isAdded);
    };

    const onClickFavorite = () => {
      onFavorite({ imageUrl, title, price });
      setIsFavorite(!isFavorite);
    };

    return(
        <div className={styles.card}>
          <div className={styles.favorite} onClick={onClickFavorite}>
          <img 
          src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg" } 
          // onClick={onClickPlus}   
          alt="Inliked" />
          </div>
          <img width={133} height={112} src={imageUrl} alt="NikeBlazer" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Ціна:</span>
              <b>{price} грн.</b>
            </div>
            
              <img className={styles.plus} 
              onClick={onClickPlus}  
              src={isAdded ? "/img/btn-cheaked.svg" : "/img/btn-plus.svg" } 
              alt="Plus" />
           
          </div>
        </div>
    );
}

export default Card;