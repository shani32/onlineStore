import React from 'react'
import {Link} from 'react-router-dom'

class Navbar extends React.Component{
render(){
    return(
        <div className='navbar'>
            <Link to="/"><i className="fas fa-tshirt"></i></Link>
            <Link to="/products">products</Link>
            <Link to="/checkout"><span ><i className="fas fa-shopping-cart fa-2x"></i>{this.props.counter}</span> </Link>
        </div>
            
          
    )
}
}
export default Navbar