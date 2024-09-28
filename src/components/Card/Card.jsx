import React from "react";
import styles from "./Card.module.scss";

function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);

  React.useEffect(() => {
    console.log("Переменная isAdded изменилась");
  }, [isAdded]);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card__favorite} onClick={props.onClickFavorite}>
          <img src="/img/heart-unliked.svg" alt="unliked" />
        </div>
        <div className={styles.card__item}>
          <img
            width={150}
            height={160}
            src={props.image}
            alt="chocolate image"
          />
        </div>

        <h5>{props.title}</h5>
        <div className={styles.card__info}>
          <div className={styles.card__price}>
            <span>Цена</span>
            <b>{props.price} руб.</b>
          </div>

          <img
            width={20}
            height={20}
            src={isAdded ? "/img/check.svg" : "/img/plus.svg"}
            alt="plus image"
            onClick={onClickPlus}
          />
        </div>
      </div>
    </>
  );
}

export default Card;
