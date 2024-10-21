import React from 'react';
import TopMenu from "../TopMenu/TopMenu";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import hotelimg from "../../images/hotel.webp";
import Space from "../../components/Space/Space";
import Input from '../Input/Input';
import logo from "../../images/Logo.png";
import Title from "../Title/Title"
import Button from '../Button/Button';

const LogIn = () => {
  return (
    <div className="login">
      <TopMenu />
      <Header />
      <Space />
      <Space />
      <Space />
      <Space />
      <div className='login-container'>
        <div className='login-container__info'>
          <div>
          <img src={logo} alt="logo" className='login-container__info--logo'/>
            <Title title1="به هتل آریا خوش آمدید"></Title>
          <Space/>
          <p className='text-justify'>هتل بزرگ پنج ستاره آریا با الهام از طرح شکوهمند تخت جمشید در زمینی با وسعت دوازده هکتار در شمال شرق جزیره زیبای کیش نزدیک به ساحل شرقی در سال 1382 توسط بهترین معماران ایرانی ساخته شده است. این هتل موزه دارای 184 اتاق، سوییت و کاباناهای مجلل با چشم انداز دریا و باغ است.</p>
          <Space/>
          <Space/>
          </div>
          <Input placeholder="نام کاربری" type="text"/>
          <Space/>
          <Space/>
          <Input placeholder="رمز عبور" type="text"/>
        <Button>ورود</Button>
        </div>
        <img src={hotelimg} alt="hotelimg" className='login-container__img'/>
      </div>






      <Space />
      <Space />
      <Space />

      <Footer />
    </div>
  )
}

export default LogIn
