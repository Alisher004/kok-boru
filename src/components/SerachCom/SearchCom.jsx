import React, { useState, useEffect } from 'react';
import "./Search.scss";
import Like3 from "../../assets/svg/Like3.svg";
import Magazin2 from "../../assets/svg/magazin2.svg";
import search2 from "../../assets/svg/search2.svg";
import search3 from "../../assets/svg/search3.svg";
import Like2 from "../../assets/svg/Like2.svg";
import { Link } from 'react-router-dom';


import kros3 from "../../assets/image/kros3.png"
import { div } from 'framer-motion/m';

const API = "https://66dfd7322fb67ac16f2740dd.mockapi.io/product";

function SearchCom() {
  const [searchproducts, setproductsSearch] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState(32780);
  const [maxPrice, setMaxPrice] = useState(82780);

  const [selectedColor, setSelectedColor] = useState("black");

  const getproductSearch = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setproductsSearch(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getproductSearch();
  }, []);

  // Функция для очистки поля ввода
  const clearSearch = () => {
    setSearchTerm("");
  };



  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleMinChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxChange = (e) => {
    setMaxPrice(e.target.value);
  };

  return (
    <div>
      <header className='header39'>
        <div className='header39gg'>
          <div className='header39-left container'>
          <ul>
              <li>
                <Link to={`/`}>
                <a href="">Главная</a>
                </Link>
              </li>
              <li>
                <Link to={`/onas`}>
                <a href="">О нас</a>
                </Link>
              </li>
              <li>
                
              </li>
              <li>
                <Link to={`/istoriabrenda`}>
                <a href="">История </a>
                </Link>
              </li>
              <li>
                <Link to={`/proleved`}>
                <a href="">Proleved</a>
                </Link>
              </li>
              <li>
                <Link to={`/help`}>
                <a href="">Help</a>
              </Link>
              </li>
              <li>
                <Link to={`/0consignment`}>
                <a href="">Товары для спорта</a>
                </Link>
              </li>
              <p>DEALER</p>
            </ul>
          </div>
          <div className='header39-img'>
            <Link to={`/wishlist`}>
              <img src={Like3} alt="" />
            </Link>
            <img src={Magazin2} alt="" />
            <img src={search3} alt="" />
          </div>
        </div>
      </header>

      <div className='main3-input3 container'>
        <div className='input-3'>
          <div className='input3-search'>
            <img src={search3} alt="" />
            <input
              type="text"
              placeholder='Мне повезёт'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button onClick={clearSearch}>очистить</button>
        </div>
        <p>закрыть</p>
      </div>

      <div className='main11-kros container'>
        {searchproducts
          .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())) // Фильтрация по названию
          .slice(0, 20)
          .map((item) => (
            <div key={item.id} data={item}>
            <div className='kros1'>
                  <div className='mm'>
                  <img 
                      src={item.avatar} 
                      alt="" 
                      // style={{ height: "248px", marginTop: "-60px" }} 
                      onClick={() => handleAvatarClick(item)} // Обработчик клика
                    /> 
                  </div>
                  
                    <button style={{width: "250px", backgroundColor: "yellow", border:"none",}} onClick={() => toggleButton(item)}>add to cart</button>
                  
                  {/* <div className='pp'>NOT</div> */}
                  <div className='pw1' >
                    <img src={Like2} onClick={() => toggleLike(item)} alt="" />
                  </div> 
                  <br />
                  <div className='main-top1'>
                    {/* <p>{item.name}</p> */}
                    <p>{item.name}</p>
                    <h5>price: {item.price}</h5>
                  </div> 
                </div>
            </div>
          ))}
      </div>
      <div className='search-two container'>
      <div className='catalog-1'>


<div className='catolog-1-2'>
  <h1>Фильтры</h1>
  <div className="price-range1">
<label>Цена</label>
<div className="slider-container1">
<input
type="range"
id="rangeMin"
min="0"
max="100000"
value={minPrice}
step="100"
onChange={handleMinChange}
/>
<input
type="range"
id="rangeMax"
min="0"
max="100000"
value={maxPrice}
step="100"
onChange={handleMaxChange}
/>
</div>
<div className="price-labels1">
<input
type="text"
id="minPrice"
value={parseInt(minPrice).toLocaleString()}
readOnly
/>
<span>–</span>
<input
type="text"
id="maxPrice"
value={parseInt(maxPrice).toLocaleString()}
readOnly
/>
<span>₽</span>

</div>

</div>



</div>
</div>
<div className='catalog-2'>
  {
    searchproducts
      .filter(item => item.price >= minPrice && item.price <= maxPrice)  // Фильтрация по цене
      .map((item) => (
        <div key={item.id} data={item}>
         <div className='kros1'>
                  <div className='mm'>
                  <img 
                      src={item.avatar} 
                      alt="" 
                      // style={{ height: "248px", marginTop: "-60px" }} 
                      onClick={() => handleAvatarClick(item)} // Обработчик клика
                    /> 
                  </div>
                  
                    <button style={{width: "250px", backgroundColor: "yellow", border:"none",}} onClick={() => toggleButton(item)}>add to cart</button>
                  
                  {/* <div className='pp'>NOT</div> */}
                  <div className='pw1' >
                    <img src={Like2} onClick={() => toggleLike(item)} alt="" />
                  </div> 
                  <br />
                  <div className='main-top1'>
                    {/* <p>{item.name}</p> */}
                    <p>{item.name}</p>
                    <h5>price: {item.price}</h5>
                  </div> 
                </div>
        </div>
      ))
  }
</div>

      </div>
    </div>
  );
}

export default SearchCom;
