import React from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"
import CoCartAPI from "@cocart/cocart-rest-api"

class UserComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      password: ""
    };
  }

  componentDidMount() {

    // so we are getting the result and are able to print out some of the data in the response to the screen on page load.
    // but we actually want to iterate over the results and print out the results
    const CoCart = new CoCartAPI({
      url: "https://betterdeveloperdocs.com",
    });

    const fetchUserEmail = async () => {
      CoCart.get("products").then(result => this.setState({
        products: result.data.products
      }))
    };

    fetchUserEmail();
    
  }

  render() {

    return (
      <div>
        <ul>
        {this.state.products.map(product => 
            <li>{product.id} : {product.name} <b>{product.permalink}</b></li>
            )}
        </ul>
      </div>
    );
  }
}

export default connect(UserComponent)
