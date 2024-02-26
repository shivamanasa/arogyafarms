import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ItemsPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Notification from './Notification';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'vegetables', name: 'Vegetables' },
  { id: 'groceries', name: 'Groceries' },
  { id: 'milk', name: 'Milk & Products' },
  { id: 'honey', name: 'Honey' },
  { id: 'dry-fruits', name: 'Dry Fruits' },
];

const items = {
  vegetables: [
    { id: 1, name: 'Tomato', price: 20, unit: 'KG', image: 'https://t4.ftcdn.net/jpg/02/32/98/31/360_F_232983161_9lmUyHKnWbLW0vQPvWCrp5R5DSpexhbx.jpg' },
    { id: 2, name: 'Mirchi', price: 25, unit: 'KG', image: 'https://lazyshoppy.com/cdn/shop/products/Green_Chilli_e391ab5f-9e8e-420c-95ce-dcd6ed2d36d7.png?v=1643607819' },
    { id: 3, name: 'Potato', price: 30, unit: 'KG', image: 'https://www.jiomart.com/images/product/original/590000090/potato-1-kg-product-images-o590000090-p590000090-0-202207291750.jpg?im=Resize=(420,420)' },
    { id: 4, name: 'Carrot', price: 30, unit: 'KG', image: 'https://zonefresh.com.au/wp-content/uploads/CARROTS-BAGGED.png' },
  ],
  groceries: [
    { id: 5, name: 'Rice', price: 80, unit: 'KG', image: 'https://origin.club/media/catalog/product/cache/86eaafd287624d270d87c663dd3976d5/b/a/basmathi_rice_1.jpg' },
    { id: 6, name: 'Chana Dal', price: 60, unit: 'KG', image: 'https://www.urbangroc.com/wp-content/uploads/2021/05/Chana-Dal-1-01-2.jpg' },
    { id: 7, name: 'Kandi Dal', price: 40, unit: 'KG', image: 'https://5.imimg.com/data5/ECOM/Default/2023/1/XD/DM/FW/154040248/toordal4-250x250.jpg' },
  ],
  milk: [
    { id: 8, name: 'Milk', price: 25, unit: 'Liter', image: 'https://cdn.store-factory.com/www.culinaide.com/content/product_4801045b.jpg?v=1597660182' },
    { id: 9, name: 'Ghee', price: 100, unit: 'KG', image: 'https://5.imimg.com/data5/ANDROID/Default/2020/9/ME/VO/DA/43364441/product-jpeg-500x500.jpeg' },
    { id: 10, name: 'Honey', price: 35, unit: 'Liter', image: 'https://www.simhas.in/image/cache/catalog/products/honey-inet-1-500x500.jpg' },
  ],
  'dry-fruits': [
    { id: 11, name: 'Almonds', price: 200, unit: 'KG', image: 'https://m.media-amazon.com/images/I/61vQWDeYJIL._AC_UF1000,1000_QL80_.jpg' },
    { id: 12, name: 'Cashews', price: 180, unit: 'KG', image: 'https://www.drsmood.com/cdn/shop/products/7_PDP_2_ACTIVATEDCASHEWSMIX_052b.png?v=1613764521&width=1200' },
    { id: 13, name: 'Pistachios', price: 220, unit: 'KG', image: 'https://cdn-jdgil.nitrocdn.com/zHpQkxMUZpgOaCxsHmmYHPUOgFHgLdJA/assets/images/optimized/rev-3619abc/www.eatrightbasket.com/wp-content/uploads/2019/04/Peanuts-670x570.jpg' },
  ],
};

function ItemsPage({ addToCart }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [notification, setNotification] = useState(null);

  const handleAddToCart = (item) => {
    addToCart(item);
    setNotification(`${item.name} Successfully added to cart`);
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const filteredItems = categories.find((cat) => cat.id === selectedCategory).id === 'all'
    ? items.vegetables.concat(items.groceries, items.milk, items['dry-fruits'])
    : items[selectedCategory];

  const displayItems = filteredItems.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="c-container">
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://themewagon.github.io/foody2/img/carousel-2.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Be Organic</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://themewagon.github.io/foody2/img/carousel-1.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Natural Food Is Always Healthy</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://themewagon.github.io/foody2/img/carousel-2.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Slide 3</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {notification && <Notification message={notification} onClose={() => setNotification(null)} />}

      <p style={{textAlign:'center', marginTop:'5px'}}>Select From Here</p>
      <div className="input-container">
        <select value={selectedCategory} onChange={(e) => handleCategoryChange(e.target.value)}>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button><Link to="/cart" style={{textDecoration:'none', color:'inherit'}}>View Cart</Link></button>
      </div>
      <div className="items">
        {displayItems.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.name} />
            <div className="item-info">
              <p>{item.name}</p>
              <p>{item.unit === 'Liter' ? `₹${item.price}/Liter` : `₹${item.price}/KG`}</p>
            </div>
            <div className="item-actions">
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemsPage;
