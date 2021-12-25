import React from "react";
import './style.css'


class Product extends React.Component{
    addToCart=(product)=>{
        // this.props.addToCart(product);
        this.props.getCounter();
        this.props.getTotalPay(product.price)
    }
    render(){
        const {product}=this.props;
        return(
            <div className="ItemCard">
                {/* <div className="productImage">{product.image}</div> */}
                <img src={product.image} alt="image" className="randompic"/>
                <div className="productTitle">{product.title}</div>
                <div className="produxtPrice">price: {product.price}$</div>
                <div className="productDescription"> {product.description}</div>
                <button onClick={(e)=>this.addToCart(product)}>add to cart</button>
            </div>
        )
    }
}
export default Product