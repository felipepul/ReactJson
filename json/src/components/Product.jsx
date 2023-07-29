import React from 'react';
import './Product.css';
import { AddCarBtn } from './AddCarBtn';
import { Discount } from './Discount';
import { Heart } from './Heart';



const Product = ({discount,name,oldPrice,newPrice}) => {
  return (
    <div className ='product'>
        <Discount discount ={discount}/>
        <Heart/>
        <img className ='product_img'src='https://picsum.photos/id/1/180' alt='product' />
        <h2 className='product_name'>{name}</h2>
        <div className='product_details'>
            <p className='product_oldPrice'>${oldPrice}</p>
            <p className='product_price'>${newPrice}</p>
            <AddCarBtn name ={name} newPrice={newPrice}/>
        </div>
        
        
    </div>
  )
}

export {Product}
