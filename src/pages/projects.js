import {useContext} from 'react'
import {ProductsContext} from '../contex/products';
import Product from '../compo/product'
import {Link}  from 'react-router-dom'
const Projects = () => {
    const products = useContext(ProductsContext)
    console.log('products' , products)
  return (
    <div>
      Projects
      {products.map((item , i ) => {
          return (
              <Link to={`products/${item.id}`}
               key={i}>
                  <Product
                   {...item}
                   />
                </Link>
          )
      })}
    </div>
  )
}

export default Projects
