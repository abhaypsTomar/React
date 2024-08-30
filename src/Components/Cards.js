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

export default Cards;
