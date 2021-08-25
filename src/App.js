import Row from './Row';
import './App.css';
import Banner from './Banner';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner title="Popular" fetchUrl={"https://api.themoviedb.org/3/trending/all/day?api_key=371758274f1233b79f81b1e8a2e43894&language=371758274f1233b79f81b1e8a2e43894"}/>
    <Row title="NETFLIX ORIGINALS" fetchUrl={"https://api.themoviedb.org/3/trending/all/day?api_key=371758274f1233b79f81b1e8a2e43894&language=371758274f1233b79f81b1e8a2e43894"} />
    <Row title="NETFLIX TRENDING" fetchUrl={"https://api.themoviedb.org/3/trending/tv/day?api_key=371758274f1233b79f81b1e8a2e43894&language=371758274f1233b79f81b1e8a2e43894"} />
    <Row title="NETFLIX POPULAR" fetchUrl={"https://api.themoviedb.org/3/trending/movie/week?api_key=371758274f1233b79f81b1e8a2e43894&language=371758274f1233b79f81b1e8a2e43894"} />

    </div>
  );
}

export default App;
