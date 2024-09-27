import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Overlay from "./components/Overlay/Overlay";

const arr = [
  {
    title: "Шоколад темный Callebaut (Бельгия), 54.5% какао, 2.5 кг ",
    price: 6200,
    image: "/img/chocolate/dark.jpg",
  },
  {
    title: "Шоколад молочный Callebaut (Бельгия), 33.6% какао, 2.5 кг ",
    price: 4500,
    image: "/img/chocolate/milk.jpg",
  },
  {
    title: "Шоколад белый Callebaut (Бельгия), 25.9% какао, 2.5 кг ",
    price: 4500,
    image: "/img/chocolate/white.jpg",
  },
];

function App() {
  return (
    <div className="wrapper">
      <Overlay />
      <Header />
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

          {arr.map((item) => (
            <Card title={item.title} price={item.price} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
