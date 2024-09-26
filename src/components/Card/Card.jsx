function Card() {
  return (
    <>
      <div className="card">
        <div className="card__favorite">
          <img src="/img/heart-unliked.svg" alt="unliked" />
        </div>
        <div className="card__item">
          {" "}
          <img
            width={150}
            height={160}
            src="/img/chocolate/milk.jpg
 "
            alt="chocolate"
          />
        </div>

        <h5>
          Шоколад темный Callebaut (Бельгия),
          <br />
          54,5% какао, 2,5 кг
        </h5>
        <div className="card__info">
          <div className="card__price">
            <span>Цена</span>
            <b>1100 руб.</b>
          </div>
          <button className="button">
            <img
              width={11}
              height={11}
              src="/img/plus.svg"
              alt="plus image
   "
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
