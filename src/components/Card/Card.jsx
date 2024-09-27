function Card(props) {
  console.log(props);
  const click = () => {
    console.log("нажали на плюс");
  };
  return (
    <>
      <div className="card">
        <div className="card__favorite">
          <img src="/img/heart-unliked.svg" alt="unliked" />
        </div>
        <div className="card__item">
          <img
            width={150}
            height={160}
            src={props.image}
            alt="chocolate image"
          />
        </div>

        <h5>{props.title}</h5>
        <div className="card__info">
          <div className="card__price">
            <span>Цена</span>
            <b>{props.price} руб.</b>
          </div>
          <button className="button" onClick={click}>
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
