import {createContext, useState} from 'react'

const ProductsContext = createContext()

const ProductsProvider= ({children}) => {
  const [produsts,setProducts] = useState([])
  
  return (
    <ProductsContext.Provider value={produsts}>
      {children}
    </ProductsContext.Provider>
  )
}

export {ProductsContext ,ProductsProvider}
