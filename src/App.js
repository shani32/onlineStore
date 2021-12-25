
import React from "react";
import { BrowserRouter,  Route} from 'react-router-dom'
import Homepage from "./pages/Homepage";
import Products from "./pages/products";
import Navbar from "./components/navbar";
import Checkout from "./pages/checkout";
class App extends React.Component {
state={
  productCart:[],
  productCounter:0,
  totalCart: 0,

}
addToCart=(product)=>{
  const newProductCart=[...this.state.productCart, product]
  this.setState({productCart: newProductCart})
}
getPay=()=>{
  this.setState({productCart:[]})
}
getCounter=()=>{
  this.setState({productCounter:this.state.productCounter+1})
  console.log(this.state.productCounter)
}
getTotalPay=(newPrice)=>{
  this.setState({totalCart:this.state.totalCart+newPrice})
}
  render(){

  return (
    <div className="App">
    <BrowserRouter>
    <Navbar counter={this.state.productCounter}/>
    <Route path="/" exact ><Homepage/> </Route>
    <Route path="/products" exact><Products getCounter={this.getCounter} getTotalPay={this.getTotalPay} /></Route>
    <Route path="/checkout" exact><Checkout totalCart={this.state.totalCart}/></Route>
    </BrowserRouter>
    </div>
  );
 } 
}

export default App;
