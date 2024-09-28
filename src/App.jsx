import React from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Overlay from "./components/Overlay/Overlay";

function App() {
  const [cartOpen, setCartOpen] = React.useState(false);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch("https://660580e02ca9478ea1807a75.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  return (
    <div className="wrapper">
      {cartOpen && <Overlay onCloseCart={() => setCartOpen(false)} />}
      <Header onClickCart={() => setCartOpen(true)} />
      <div className="content">
        <div className="content__top">
          <h1 className="content__title">Шоколад</h1>
          <div className="content__search">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="cards">
          {/* <Card
            title="Шоколад темный Callebaut (Бельгия), 54.5% какао, 2.5 кг"
            price="6200"
            image="/img/chocolate/dark.jpg"
          />
          <Card
            title="Шоколад белый Callebaut (Бельгия), 25.9% какао, 2.5 кг"
            price={4500}
            image="/img/chocolate/white.jpg"
          /> */}

          {items.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              onClickFavorite={() => console.log("Добавили в закладки")}
              onClickPlus={() => console.log("Нажали на плюс")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
