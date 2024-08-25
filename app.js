import React, { useState } from "react";
import ReactDOM from "react-dom/client";

/** Food app
 *
 * Header
 * -logo
 * -home about
 *
 * body
 * -search
 * -resturant cards
 *
 * footer
 * - contact info
 * - customer care
 *
 */
//Header
const Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        <img src="https://imageshttps://www.google.com/url?sa=i&url=https%3A%2F%2Fjowelahmed.artstation.com%2Fprojects%2FL3y0dv&psig=AOvVaw1BiwkYxIlNUatSRrQRFSJA&ust=1724655761205000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLiquMXJj4gDFQAAAAAdAAAAABAZ-platform.https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dfood%2Bdelivery&psig=AOvVaw1BiwkYxIlNUatSRrQRFSJA&ust=1724655761205000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLiquMXJj4gDFQAAAAAdAAAAABAR99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018" />
      </div>
      <div className="Nav-bar">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
// Sample data for restaurant cards
const restaurants = [
  {
    id: 1,
    name: "The Italian Bistro",
    image: "https://via.placeholder.com/200",
    description: "Authentic Italian cuisine",
  },
  {
    id: 2,
    name: "Sushi World",
    image: "https://via.placeholder.com/200",
    description: "Fresh sushi and sashimi",
  },
  {
    id: 3,
    name: "Burger Haven",
    image: "https://via.placeholder.com/200",
    description: "Juicy burgers and fries",
  },
  {
    id: 3,
    name: "Burger Haven",
    image: "https://via.placeholder.com/200",
    description: "Juicy burgers and fries",
  },
  // Add more restaurant data as needed
];
const Cards = ({ restaurant }) => {
  return (
    <div className="card" key={restaurant.id}>
      <img src={restaurant.image} alt={restaurant.name} />
      <div className="card-content">
        <h3>{restaurant.name}</h3>
        <p>{restaurant.description}</p>
      </div>
    </div>
  );
};
//Body
const Body = () => {
  const [search, setSearch] = useState("");

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
      <div className="restaurant-cards">
        {restaurants
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
//Footer

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
