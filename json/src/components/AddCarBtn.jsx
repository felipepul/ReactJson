import './AddCarBtn.css';
//import React from 'react';


const AddCarBtn = ({name,newPrice}) => {
  return (
  <button onClick={ () => {alert(`has comprado ${name} en $${newPrice}`)}}>comprar</button>
  )
}

export  {AddCarBtn}
