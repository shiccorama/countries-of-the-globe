import "./home.css";
import Country from "../../components/country/Country"
import Filter from "../../components/input/filter/Filter";
import Search from "../../components/input/search/Search";

const Home = () => {
  return (
    <section className="home-page-container">
      <div className="input-container">
        <Search />
        <Filter />
      </div>
      <Country />
    </section>
  );
};

export default Home;
