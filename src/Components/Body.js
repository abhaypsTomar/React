import { restaurants } from "../Utils/mockdata";
import Cards from "./Cards";
import { useState } from "react";
const Body = () => {
  const [search, setSearch] = useState("");
  const [ListOfRestro, setListOfRestro] = useState(restaurants);

  const filterTopRated = () => {
    const topRatedRestaurants = ListOfRestro.filter((res) => res.rating > 4);
    setListOfRestro(topRatedRestaurants);
  };

  return (
    <div className="Body">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for restaurants..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <button onClick={filterTopRated}>Top Rated</button>
      </div>

      <div className="restaurant-cards">
        {ListOfRestro
          //   .filter((restaurant) =>
          //     restaurant.name.toLowerCase().includes(search.toLowerCase())
          //   )
          .map((restaurant) => (
            <Cards key={restaurant.id} restaurant={restaurant} />
          ))}
      </div>
    </div>
  );
};

export default Body;
