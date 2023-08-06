import "./country.css";
import { useEffect} from "react";
import {Link} from "react-router-dom";
// redux :
import { searchByRegion } from "../../features/countries/countriesAction";
import { useSelector, useDispatch } from "react-redux";
import { showAllCountries } from "../../features/countries/countriesAction";

const Country = () => {

  const {countriesData, loading, success, error, region, searchTerm} = useSelector((state) => state.country);
  const dispatch = useDispatch();

  // const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    dispatch(showAllCountries());

    // if(success){
    //   setCountryData(countriesData);
    // }

    if(region) {
      dispatch(searchByRegion(region))
    }

    if(error){
      console.log(error)
    }
  }, [dispatch, error, success, region]);

  // const data = countriesData.filter((item) => {
  //   item.name.common.toLowerCase().includes(searchTerm)
  // })

  return (
    <section className="country-container">
      { loading ? (<h1> loading ... </h1>) : (
        countriesData.length > 0 && countriesData.map((item,index) => {
            <Link
              to={`/${item.cioc}`}
              // onClick={() => dispatch(searchByName(item.cioc.toLowerCase()))}
              className="country-card"
              key={index}
            >
              <img src={item.flags.png} alt={item.flags.alt} className="country-image" />
              <div className="country-content">
                <h3> {item.name.common} </h3>
                <p>
                  Population: <span>{item.population}</span>
                </p>
                <p>
                  Region: <span>{item.region}</span>
                </p>
                <p>
                  Capital: <span>{item.capital}</span>
                </p>
              </div>
            </Link>
        })
      )
      }
    </section>
  );
};

export default Country;
