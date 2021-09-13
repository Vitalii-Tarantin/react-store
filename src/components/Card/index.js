import React from 'react'
import styles from './Card.module.scss'

function Card(props) {
  // const onClickButton = () => {
  //   alert(props.title);
  // }

  const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
      setIsAdded(!isAdded);
    }

    return(
        <div className={styles.card}>
          <div className={styles.favorite}>
          <img 
          src={isAdded ? "/img/heart-liked.svg" : "/img/heart-unliked.svg" } 
          onClick={onClickPlus}   
          alt="unliked" />
          </div>
          <img width={133} height={112} src={props.imageUrl} alt="NikeBlazer" />
          <h5>{props.title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Price:</span>
              <b>{props.price} грн.</b>
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