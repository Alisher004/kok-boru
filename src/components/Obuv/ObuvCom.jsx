import React, { useState, useEffect } from 'react'
import "./Obuv.scss"
import Like3 from "../../assets/svg/Like3.svg"
import Magazin2 from "../../assets/svg/magazin2.svg"
import search from "../../assets/svg/search2.svg"
import { Link } from 'react-router-dom'
import obuv1 from "../../assets/image/obuv1.png"
import Like2 from "../../assets/svg/Like2.svg"
import kros3 from "../../assets/image/kros3.png"
import catolog from "../../assets/image/catalog.png"
import Acardion from '../acardion/Acardion'
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux';
import x from "../../assets/svg/delete.svg"; 





const API = "https://66dfd7322fb67ac16f2740dd.mockapi.io/product";



function ObuvCom() {
  const location = useLocation();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const selectedProduct = location.state?.selectedProduct; 
  const [products, setProducts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(selectedProduct?.avatar || obuv1); 
  const [currentView, setCurrentView] = useState('size');
  const [currentIndex, setCurrentIndex] = useState(0); // Новое состояние для индекса
  const openModal = () => setIsModalVisible(true);
const closeModal = () => setIsModalVisible(false);
const [isModalVisible, setIsModalVisible] = useState(false);
const [selectedSize, setSelectedSize] = useState(null);

const handleSizeSelect = (size) => {
  setSelectedSize(size); // Устанавливаем выбранный размер
};






  

  const getProduct = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setProducts(data); 
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseClick = () => {
    setIsModalVisible(false);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    setSelectedImage(products[(currentIndex + 1) % products.length]?.avatar || obuv1);
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    setSelectedImage(products[(currentIndex + 1) % products.length]?.avatar || obuv1);
  };
  
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  const handleViewChange = (view) => {
    setCurrentView(view); // Меняем состояние на RU, EU, или US
  };

  const sizeOptions = [
    { label: 'size', sizes: [
        { size: '35.5', availability: 'под заказ' },
        { size: '36',  availability: 'в наличии' },
        { size: '36.5', availability: 'в наличии' },
        { size: '37', availability: 'в наличии' },
        { size: '37.5',  availability: 'в наличии' },
        { size: '38',  availability: 'в наличии' },
        { size: '38.5',  availability: 'в наличии' },
        { size: '39', availability: 'в наличии' },
        { size: '39.5',  availability: 'в наличии' },
        { size: '40',  availability: 'в наличии' },
        { size: '40.5',  availability: 'в наличии' },
        { size: '41',  availability: 'в наличии' },
        { size: '41.5',  availability: 'в наличии' },
        { size: '42', availability: 'в наличии' },
        { size: '42.5',  availability: 'в наличии' },
        { size: '43',  availability: 'в наличии' },
      ],
    },
   
  
  
    
  ];

  // Инициализация useHistory

  // ... остальной код ...

 


  // Функция для получения данных
  const handleMagazinClick = () => {
    console.log("Magazin2 clicked!"); // Добавьте это для отладки
    setIsModalVisible(true);
};


 

  // const handleCloseClick = () => {
  //   setModalVisible(false);
  // };


 
 
  const handleAvatarClick = (item) => {
    console.log('Clicked item:', item);
    toggleButton1(item); // Добавляем продукт в корзину при клике на аватар
    navigate('/obuv', { state: { selectedProduct: item } });
  };
  
  const toggleButton1 = (item) => {
    if (!item || !selectedSize) return; // Проверяем, выбран ли товар и размер
    
    const productWithSize = { ...item, size: selectedSize }; // Добавляем размер к товару
    
    setSelectedProducts((prevSelected) => {
      if (prevSelected.some(selectedItem => selectedItem.id === item.id)) {
        return prevSelected.filter(selectedItem => selectedItem.id !== item.id);
      }
      return [...prevSelected, productWithSize]; // Добавляем товар с размером
    });
    
    setIsModalVisible(true); // Показываем модальное окно при добавлении продукта
  };
  

  return (
    <div>
         <header className='header33   '>
          <div className='header33gg container'>
          <div className='header33-left '>
            <ul>
              <li>
                <a href="">Одежда</a>
              </li>
              <li>
              <Link to={`/obuv`}>
                <a href="">Обувь</a>
                </Link>
              </li>
              <li>
                <a href="">Аксессуары</a>
              </li>
              <li>
                <a href="">Сумки</a>
              </li>
              <li>
              <Link to={`/0consignment`}>
                <a href="">Товары для спорта</a>
                </Link>              </li>
              <p>DEALER</p>
            </ul>
          </div>
          <div className='header33-img'>
          <img src={Like3} alt="" />
          <img src={Magazin2} alt="" onClick={handleMagazinClick} />
          {isModalVisible && (
              <div className='icon2'>
                <div className='modal-nur'>
                  <div className='modal2-nur'>
                    <h2>Корзина</h2>
                    <img src={x} alt="" onClick={() => setIsModalVisible(false)} />
                  </div>
                  <div className='m3-nur'>
                    <h5>{selectedProducts.length} товара</h5>
                    <h5>Очистить</h5>
                  </div>
                  <div className='bm-nur'>
                    <div className='bm2-nur'>
                      {/* <h2>Итого</h2> */}
                      {/* <h2>{selectedProducts.reduce((total, product) => total + product.price, 0)}₽</h2> */}
                    </div>
                    
                  </div>
                  <div className='selected-items'>
                    {selectedProducts.map((item) => (
                      <div key={item.id} className='selected-item'>
                        <img src={item.avatar} alt={item.name} style={{ height: "200px", width: "200px" }} />
                        <div>
                          <p>{item.name}</p>
                          <p>Размер: {item.size}</p> {/* Отображение выбранного размера */}
                          <h5>{item.price}</h5>
                          <div className='btn-nur'>
                            <Link to={`/oferzakaz`}>
                      <button>Оформить</button>
                            </Link>
                    </div>
                        </div>
                      </div>
                      
                      
                    ))}
                   
</div>

                </div>
              </div>
            )}

          <img src={search} alt="" />
          
          </div>
          </div>

         

       
      
        </header>
        <main className='main-obuv container'>
        <div className='obuv-div'>
        <div className='obuv-1'>
        <div className='obuv-1img'>
              {/* Изменено: отображение выбранного изображения */}
              {selectedProduct ? (
                <img src={selectedImage} alt={selectedProduct.name} />
              ) : (
                <p>Изображение не найдено</p>
              )}
            </div>
            <div className='obuv-2img'>
        {products.slice(0, 8).map((item) => (
          <motion.div
            key={item.id}
            onClick={() => handleImageClick(item.avatar)} // Только изменение изображения
            whileHover={{ scale: 1.1 }} // Анимация при наведении
            transition={{ duration: 0.3 }}
          >
            <img src={item.avatar || obuv1} alt={item.name} />
          </motion.div>
        ))}
      </div>

        </div>
        <div className='obuv-2'>
            <div className='obuv-2-Nike'>
                <div className='nike4'>
                  <Link to={`/`}>
                <p>Главная /</p>
                  </Link>
                <p>Каталог /</p>
                <p>Обувь /</p>
                <p> Кроссовки</p>
                </div>
                <div className='nike3'>
                
                <h1>Кроссовки Nike Milu Deer</h1>
                <img src={Like3} alt="" />
                     </div>
                <h2> </h2>


                <div className='nike-button'>
        <Link to={`/oferzakaz`}>
          <button>Быстрая покупка</button>
        </Link>
        <button onClick={() => toggleButton1(selectedProduct)}>Добавить в корзину</button> {/* Добавляем товар только при клике на кнопку */}
      </div>


            </div>
            <div className='nike-razmer'>
                    <h1>Выберите размер</h1>
                    <div className='razmer-button'>
                    <button onClick={() => handleViewChange('size')}>size</button>
                
                    </div>
                    <p>Таблица размеров</p>
                </div>
                <div className='nike-grid'>
  {sizeOptions.find(option => option.label === currentView)?.sizes.map((item, index) => (
    <div className='grid1' key={index} onClick={() => handleSizeSelect(item.size)}>
      <h1>{item.size} {currentView}</h1>
      <h2>{item.price}</h2>
      <p>{item.availability}</p>
    </div>
  ))}
</div>




        </div>
        </div>
    
        </main>
    </div>
  )
}

export default ObuvCom
