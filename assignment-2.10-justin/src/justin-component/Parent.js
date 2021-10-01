import React from 'react';
import ChildList from './ChildList';
import ChildFormInput from './ChildFormInput';

class ParentContainer extends React.Component {
    constructor(){
        super();
        this.handleAddProduct = this.handleAddProduct.bind(this);
        this.state = {
          products: [],
        };
      }
    
      handleAddProduct(product) {
        const products = this.state.products;
        products.push(product);
        this.setState({ products });
        console.log(product);  
        console.log(products); 
      }
    
      render() {
        return (
          <>
            <h2>Product Container</h2>
            <ChildFormInput add={this.handleAddProduct} />
            <hr />
            <ChildList products={this.state.products} />
          </>
        );
      }
    }
    
    export default ParentContainer;