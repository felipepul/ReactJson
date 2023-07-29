import './App.css'
import {Product} from './components/Product'
import {ProductConta} from './components/ProductConta';
import data from './products.json'

const App = ()=> {
  return(
    <ProductConta>
      {data.map( product => <Product
        key = {product.name}
        name ={product.name}
        discount = {product.discount}
        oldPrice = {product.price}
        newPrice = {product.price - product.price*product.discount / 100}
      />)}
    </ProductConta>
  
  )
}

export default App