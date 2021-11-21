import { Component } from "react";
import "./App.css";
import React from "react";
import productData from "./data/productData"
import formatPrice from "./helpers/formatPrice"
import { render } from "@testing-library/react";


class App extends Component{

  constructor() {
    super();
    this.state ={
      cart: [],
      products: [...productData],
      firstName: "",
      lastName: "",
      email: "",
      creditCard: "",
      zipCode: "",
    }
  }
  
  addToCart = (event) => {
    const {cart,products} = this.state
    const item = products.find((items) => items.id === event.target.value)
    this.setState({
      cart: [...cart, item]
    })
  }
  
  deleteFromCart = (event) => {
    const { cart } = this.state;
    const itemIndex = Number(event.target.value);
    this.setState({
      cart: cart.filter((items, index) => index !== itemIndex),
    });
  };
  
  subtotal =()=>{
    return( this.state.cart.map((item)=> item.price).reduce((a,b)=>{
      return a+b
    },0)
    )
  }
  
  buyNow = (event) =>{
    event.preventDefault()
    let tax = this.subtotal() * .05
    if (this.state.firstName === "" || this.state.lastName === "" || this.state.email === ""){
      alert("Input is not valid")
    }else if (this.state.creditCard.length < 16){
      alert("Credit card number is not valid")
    }else if (this.state.zipCode.length < 5 ){
      alert("Zip code is not valid")
    }else{
      alert("Purchase complete")
    };
  };
  
  render(){
    
    let productDisplay = this.state.products.map((product)=>{
      return(
        <div className="product">
            <h3>{product.name}</h3>
            <div> Price:{formatPrice(product.price)}</div>
            <div>
              <button onClick={()=>this.AddToCart(product)} type="submit">Add To Cart</button>
            </div>
            <img src={product.img} alt= "product"/>
            <div>{product.description}</div>
          </div>
      )
    })
    
    let productList = this.state.cart.map ((product)=>{
      return <li>{product.name}: {formatPrice(product.price)}</li>
    })
    
    let tax = this.subtotal() * .05
    return(
      <section className="Application">

    <h1>My Garage Sale</h1>;

    <div className="products">{productDisplay}</div>;

    <div className="Cart">
    <ul>{productList}</ul>
    <h3>Subtotal: {formatPrice(this.subtotal())}</h3>
    <h3>Tax: {formatPrice(tax)}</h3>
    <h3>Total: {formatPrice(this.subtotal() + tax)}</h3>
    </div>
    </section>
  )
};

}
export default App;
