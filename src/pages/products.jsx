import React from "react";
import dataApi from "../components/api";
import Product from "../components/product";
import '../components/style.css'
class Products extends React.Component {
    state = {
        products: []
        
    }
    // product= this.props.match.params.product;

    getProducts = async () => {
        const  {data}  = await dataApi.get("products")
         this.setState({ products: data})
        
    }

    addToCart = (product) => {
        this.props.addToCart(product)
    }

    componentDidMount = async () => {
        await this.getProducts();
        
        
    }
    renderProducts = () => {
        return this.state.products.length === 0 ?
            (<div>Loading page</div>)
            :
            (this.state.products.map((product) => {
                return <Product key={product.id} product={product} getCounter={this.props.getCounter} getTotalPay={this.props.getTotalPay} />

            })
            )
    }
    render() {
        return (

            <div className="productContainer">{this.renderProducts()}</div>

        )
    }
}
export default Products