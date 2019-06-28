const products = [
    {
      id: 1,
      name: 'Apple Mac Book Pro',
      quantity: 3
    },
    {
      id: 2,
      name: 'IQOS',
      quantity: 10
    },
    {
      id: 3,
      name: 'Apple iPhone 6',
      quantity: 6
    }
  ]
  
  const nextId = 4
  
  export default class ProductService {
    list() {
      return products;
    }
  
    find(id) {
      return products.find(product => product.id == id);
    }
  
    increment(product) {
      product.quantity++
    }
  
    decrement(product) {
      product.quantity > 0 && product.quantity--
    }
  }
  
  export const productService = new ProductService()