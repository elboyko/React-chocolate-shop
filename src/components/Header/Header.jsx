import styles from "./Header.module.scss";

function Header() {
  return (
    <header>
      <div className={styles.headerLeft}>
        <img width={35} height={35} src="/img/logo.svg" alt="logo image" />
        <div className={styles.headerInfo}>
          <h3>React Chocolate</h3>
          <p>Магазин шоколада для кондитеров</p>
        </div>
      </div>
      <ul className={styles.headerRight}>
        <li className={styles.headerRight__list}>
          <img width={18} height={18} src="/img/cart.svg" alt="cart image" />
          <span>1205 руб.</span>
        </li>
        <li>
          <img
            className={styles.header__user}
            width={18}
            height={18}
            src="/img/user.svg"
            alt="user image"
          />
        </li>
      </ul>
    </header>
  );
}
export default Header;
