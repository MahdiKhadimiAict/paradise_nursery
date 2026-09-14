import { useDispatch, useSelector } from 'react-redux';
import { plants, categories } from '../data/plants.js';
import Navbar from '../components/Navbar.jsx';
import {
  addToCart,
  selectCartItems,
} from '../features/cart/CartSlice.jsx';
import placeholderImage from '../assets/plant-placeholder.svg';

function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isInCart = cartItems.some((item) => item.id === plant.id);

  return (
    <article className="plant-card">
      <div className="plant-image-wrap">
        <img
          className="plant-image"
          src={plant.image}
          alt={plant.name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = placeholderImage;
          }}
        />
        <span className="plant-category-tag">{plant.category}</span>
      </div>
      <div className="plant-info">
        <h3 className="plant-name">{plant.name}</h3>
        <p className="plant-botanical">{plant.botanical}</p>
        <p className="plant-description">{plant.description}</p>
        <div className="plant-footer">
          <span className="plant-price">${plant.price.toFixed(2)}</span>
          <button
            type="button"
            className={isInCart ? 'btn btn-add added' : 'btn btn-add'}
            disabled={isInCart}
            onClick={() =>
              dispatch(
                addToCart({
                  id: plant.id,
                  name: plant.name,
                  price: plant.price,
                  thumbnail: plant.image,
                }),
              )
            }
          >
            {isInCart ? 'Added ✓' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </article>
  );
}

export default function ProductList() {
  return (
    <>
      <Navbar />
      <main className="products-page">
        <header className="products-header">
        <h1>Our Plants</h1>
        <p>
          Six unique houseplants in every category — carefully grown and ready to
          brighten your corner of the world.
        </p>
      </header>

      {categories.map((category) => (
        <section key={category} className="plant-category">
          <h2 className="category-title">{category}</h2>
          <div className="plant-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
          </div>
        </section>
      ))}
      </main>
    </>
  );
}