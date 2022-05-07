import {createContext, useState} from 'react'
import {data} from '../data'
const ProductsContext = createContext()

const ProductsProvider= ({children}) => {
  const [produsts,setProducts] = useState(data)
  
  return (
    <ProductsContext.Provider value={produsts}>
      {children}
    </ProductsContext.Provider>
  )
}

export {ProductsContext ,ProductsProvider}
