import styles from "./Overlay.module.scss";
console.log(styles);

function Overlay(props) {
  return (
    <div className={styles.overlay}>
      <div className={styles.right__side}>
        <h2>
          Корзина
          <img
            onClick={props.onCloseCart}
            className={styles.removeBtn}
            src="/img/btn-remove.svg"
            alt="close"
          />
        </h2>
        <div className={styles.items}>
          <div className={styles.cartItem}>
            <img
              className={styles.cartItem__img}
              width={70}
              height={70}
              src="/img/chocolate/milk.jpg"
              alt="chocolate image"
            />
            <div className={styles.cartItem__info}>
              <p>Шоколад молочный, 2.5 кг</p>
              <b>4500 руб.</b>
            </div>
            <img
              className={styles.removeBtn}
              src="/img/btn-remove.svg"
              alt="remove"
            />
          </div>
          <div className={styles.cartItem}>
            <img
              className={styles.cartItem__img}
              width={70}
              height={70}
              src="/img/chocolate/milk.jpg"
              alt="chocolate image"
            />
            <div className={styles.cartItem__info}>
              <p>Шоколад молочный, 2.5 кг</p>
              <b>4500 руб.</b>
            </div>
            <img
              className={styles.removeBtn}
              src="/img/btn-remove.svg"
              alt="remove"
            />
          </div>
          <div className={styles.cartItem}>
            <img
              className={styles.cartItem__img}
              width={70}
              height={70}
              src="/img/chocolate/dark.jpg"
              alt="chocolate image"
            />
            <div className={styles.cartItem__info}>
              <p>Шоколад темный, 2.5 кг</p>
              <b>4500 руб.</b>
            </div>
            <img
              className={styles.removeBtn}
              src="/img/btn-remove.svg"
              alt="remove"
            />
          </div>
          <div className={styles.cartItem}>
            <img
              className={styles.cartItem__img}
              width={70}
              height={70}
              src="/img/chocolate/white.jpg"
              alt="chocolate image"
            />
            <div className={styles.cartItem__info}>
              <p>Шоколад белый, 2.5 кг</p>
              <b>5900 руб.</b>
            </div>
            <img
              className={styles.removeBtn}
              src="/img/btn-remove.svg"
              alt="remove"
            />
          </div>
        </div>

        <div className={styles.items__info}>
          <ul>
            <li className={styles.items__list}>
              <span>Итого:</span>
              <div></div>
              <b>2200 руб. </b>
            </li>
            <li className={styles.items__list}>
              <span>Налог 5%</span>
              <div></div>
              <b>200 руб.</b>
            </li>
          </ul>
          <button className={styles.greenBtn}>
            Оформить заказ <img src="/img/arrow-right.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Overlay;
