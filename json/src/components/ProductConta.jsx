import React from 'react'
import './ProductConta.css';

const ProductConta = (props) => {
  return (
   <section className='product_section'>
    <h1 className='product_tittle'>Nuestros Productos:</h1>
    <div className='products_container'>
      {props.children}

    </div>
   </section>
  )
}

export  {ProductConta}
