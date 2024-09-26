import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Overlay from "./components/Overlay/Overlay";

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
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
