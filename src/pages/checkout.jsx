import React from "react";

class Checkout extends React.Component{
    

    getPay=()=>{
        this.props.getPay()
    }

    renderCart=()=>{
        return this.props.paroductCart.map((product)=>{
            this.totalCart+= product.price;
            return product={product} //i think something is missing
        })
    }
    render(){
        if(this.props.paroductCart===0)
        this.totalCart=0
        return(
            <div className="checkoutContainer">
                <h2>checkout</h2>
                <p>total: {this.props.totalCart}</p>
                <button onClick={this.getPay}>pay</button>

            </div>
        )
    }
}
export default Checkout