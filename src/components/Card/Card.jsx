import styles from "./Card.module.scss";

function Card(props) {
  const click = () => {
    console.log("нажали на плюс");
  };
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card__favorite}>
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
          <button className={styles.button} onClick={click}>
            <img width={11} height={11} src="/img/plus.svg" alt="plus image" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
