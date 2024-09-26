function Overlay() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="right-side">
        <h2>
          Корзина
          <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
        </h2>
        <div className="items">
          <div className="cartItem">
            <img
              className="cartItem__img"
              width={70}
              height={70}
              src="/img/cakes/praga.jpg"
              alt="praga"
            />
            <div className="cartItem__info">
              <p>Торт прага, вес 1 кг</p>
              <b>1100 руб.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
          </div>
          <div className="cartItem">
            <img
              className="cartItem__img"
              width={70}
              height={70}
              src="/img/cakes/praga.jpg"
              alt="praga"
            />
            <div className="cartItem__info">
              <p>Торт прага, вес 1 кг</p>
              <b>1100 руб.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
          </div>
          <div className="cartItem">
            <img
              className="cartItem__img"
              width={70}
              height={70}
              src="/img/cakes/praga.jpg"
              alt="praga"
            />
            <div className="cartItem__info">
              <p>Торт прага, вес 1 кг</p>
              <b>1100 руб.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
          </div>
        </div>

        <div className="items__info">
          <ul>
            <li className="items__list">
              <span>Итого:</span>
              <div></div>
              <b>2200 руб. </b>
            </li>
            <li className="items__list">
              <span>Налог 5%</span>
              <div></div>
              <b>200 руб.</b>
            </li>
          </ul>
          <button className="greenBtn">
            Оформить заказ <img src="/img/arrow-right.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Overlay;
