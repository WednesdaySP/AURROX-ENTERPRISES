import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './App.css'; // linking CSS file

export default function App() {
  const [search, setSearch] = useState('');

  return (
    <div className="container">
      {/* HEADER */}
      <header className="header">
        <div className="logo">AURROX ENTERPRISES</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
        </nav>
        <div className="header-right">
          <input 
            type="text" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            placeholder="Search..." 
            className="search-input" 
          />
          <FaUserCircle size={30} className="user-icon" />
        </div>
      </header>

      {/* BANNER */}
      <section id="home" className="banner">
        <h1>Welcome to AURROX ENTERPRISES</h1>
      </section>

      {/* RICH TEXT */}
      <section className="rich-text">
        <p>Discover premium furniture at unbeatable prices. Enhance your living spaces with AURROX ENTERPRISES.</p>
      </section>

      {/* COLLECTIONS */}
      <section className="collections container" id="collections">
        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnlrnv8epZTlNDouFCsjea_Cs5kPREHu988w&s" alt="Product 1" />
          <div className="card-content">
            <h3>Cozy Home Sofa</h3>
            <p>$10.00</p>
          </div>
        </div>
        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAiRgdwF4A5cy65dEhHT0VG9EBWKvCL0-VmA&s" alt="Product 2" />
          <div className="card-content">
            <h3>Compact Laptop Table</h3>
            <p>$15.00</p>
          </div>
        </div>
        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrbRCJBo-O73-Pu4J7odOUJy6XypVuivK6Cg&s" alt="Product 3" />
          <div className="card-content">
            <h3>Comfortable Lounge Sofa</h3>
            <p>$20.00</p>
          </div>
        </div>
        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0mrTUbtV_sS3iK50n7qFFPRZ3RiDB4vm7DQ&s" alt="Product 4" />
          <div className="card-content">
            <h3>Modern Office Desk</h3>
            <p>$25.00</p>
          </div>
        </div>
      </section>

      {/* IMAGE + TEXT SECTION */}
      <section className="image-text">
        <img 
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc" 
          alt="Special" 
          className="special-img" 
        />
        <div className="special-content">
          <h2>Elegant Furniture for Every Space</h2>
          <p>Create beautiful rooms with our specially crafted collections. Shop the finest chairs and tables now!</p>
          <button className="btn">Shop Now</button>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-choose">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div>Fast Shipping</div>
          <div>Customer Service</div>
          <div>Good Quality</div>
          <div>Secure Payment</div>
        </div>
      </section>

      {/* TABLE COLLECTION */}
      <section className="table-collection container" id="products">
        <h2>Our Products</h2>
        <div className="product-grid">
          {/* Row 1 */}
          <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKASxH-SUsonRmc_8MASjNPCTBPXnNgu5JoA&s" alt="Item 1" />
            <h4>Modern Curve Dining Chair</h4>
            <p>$12.00</p>
          </div>
          <div className="product-card">
            <img src="https://foter.com/photos/449/brookelyne-upholstered-side-chair.jpg?s=ts3" alt="Item 2" />
            <h4>Elegant Leather Dining Chair</h4>
            <p>$18.00</p>
          </div>
          <div className="product-card">
            <img src="https://images.thdstatic.com/productImages/bdad1909-ce75-48d6-ae3a-0dd08e472110/svn/coffee-dining-chairs-2dpthd23ws-6-64_600.jpg" alt="Item 3" />
            <h4>Classic Wooden Dining Chair</h4>
            <p>$22.00</p>
          </div>
          <div className="product-card">
            <img src="https://s.alicdn.com/@sc04/kf/H75394a1f93e7460c8ebcb134559358ca6.jpg_720x720q50.jpg" alt="Item 4" />
            <h4>Compact Laptop Table</h4>
            <p>$30.00</p>
          </div>
          {/* Row 2 */}
          <div className="product-card">
            <img src="https://i.pinimg.com/474x/16/f0/f6/16f0f659a121ac4c7e3c6e0f2bb34d49.jpg" alt="Item 5" />
            <h4>Luxury Padded Dining Chair</h4>
            <p>$40.00</p>
          </div>
          <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7GlGdxi_ignAIHAB0PKn63cxN0IJdmpd5ig&s" alt="Item 6" />
            <h4>Soft Ottoman Pouf</h4>
            <p>$45.00</p>
          </div>
          <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx0Q7eEYUOZHaVQdWc_QQ-iCrCIsSKssAlVA&s" alt="Item 7" />
            <h4>Plush Comfort Dining Chair</h4>
            <p>$50.00</p>
          </div>
          <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA59YN0K9ej_TagnJ8laBdaGU2Q8Gr9AuQhA&s" alt="Item 8" />
            <h4>Minimalist Dining Chair</h4>
            <p>$55.00</p>
          </div>
          {/* Row 3 */}
          {/* <div className="product-card">
            <img src="./src/assets/th (1).jpeg" alt="Item 9" />
            <h4>Heritage High-Back Chair</h4>
            <p>$60.00</p>
          </div>
          <div className="product-card">
            <img src="./src/assets/th (2).jpeg" alt="Item 10" />
            <h4>Stylish Upholstered Dining Chair</h4>
            <p>$65.00</p>
          </div>
          <div className="product-card">
            <img src="./src/assets/th.jpeg" alt="Item 11" />
            <h4>Glass Top Center Table</h4>
            <p>$70.00</p>
          </div>
          <div className="product-card">
            <img src="./src/assets/woodanvilled335_d335-15-b9.jpg" alt="Item 12" />
            <h4>Scandinavian Dining Chair</h4>
            <p>$75.00</p>
          </div> */}
        </div>
      </section>

      {/* ABOUT US */}
      <section id="about" className="about container">
        <h2>About Us</h2>
        <p>
          Welcome to our store! We are passionate about providing high-quality products that bring value to your life. 
          Our journey started with a simple idea: to offer the best products at affordable prices. 
          With years of experience, our team ensures that every item is carefully curated to meet your needs. 
          We believe in customer satisfaction and continuous innovation to improve your shopping experience.
          Thank you for choosing us!
        </p>
      </section>

      {/* CONTACT US */}
      <section id="contact" className="contact container">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="email" placeholder="Email ID" required />
          <textarea placeholder="Message" required></textarea>
          <button className="btn" type="submit">Submit</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#collections">Collections</a>
          <a href="#contact">Contact</a>
        </div>
        <p>Contact us at: 9783003150</p>
        <p>&copy; 2025 AURROX ENTERPRISES. All rights reserved.</p>
      </footer>
    </div>
  );
}
