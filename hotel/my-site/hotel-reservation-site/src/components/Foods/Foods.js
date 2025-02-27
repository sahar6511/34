import React from 'react'
import TopMenu from "../TopMenu/TopMenu";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Space from "../../components/Space/Space";
import SectionTitle from '../SectionTitle/SectionTitle';
import { useGetFoodsQuery } from "../redux/services/foodsApi";
import FoodBox from "../FoodBox/FoodBox";
import "../../styles/main.scss";
import SearchPannel from '../SearchPanel/SearchPanel';


const Foods = () => {
    const { data: foods, error, isLoding } = useGetFoodsQuery();
  return (
    <div className='food'>
    <TopMenu />
    <Header />
    <Space />
    <Space />
    <Space />
    <Space />

 <SearchPannel/> 
 <Space/>
      <SectionTitle>غذاهای موجود</SectionTitle>
    <div className="food container-custom">
      {error ? (
        <p className="error container-custom">احتمالا خطایی رخ داده است</p>
      ) : isLoding ? (
        <p className="container-custom warning">در حال واکشی اطلاعات</p>
      ) : foods ? (
        <div className="foods-container">
          {foods.map((food) => (
            <FoodBox
              key={food.id}
              id={food.id}
              title={food.title}
              src={food.img}
              price={food.price}
              info={food.info}
            ></FoodBox>
          ))}
        </div>
      ) : null}

    </div>
    <Space />
    <Footer />
    </div>
  )
}

export default Foods
