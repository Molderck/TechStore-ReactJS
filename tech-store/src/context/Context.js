import React, { Component } from 'react';
import { LinkData } from "./LinkData";
import { socialData } from "./SocialData";
import { items } from "./productData";

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        sidebarOpen: false,
        cartOpen: false,
        cartItems: 0,
        links: LinkData,
        socialLinks: socialData,
        cart: [],
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        storeProducts: [],
        filteredProduct: [],
        featuredProducts: [],
        singleProduct: {},
        loading: true
    }

    handleSidebar = () => {
        this.setState({ sidebarOpen: !this.state.sidebarOpen })
    }

    handleCart = () => {
        this.setState({ cartOpen: !this.state.sidebarOpen })
    }

    closeCart = () => {
        this.setState({ cartOpen: false })
    }

    openCart = () => {
        this.setState({ cartOpen: true })
    }

    render() {
        return (
            <ProductContext.Provider value={{ ...this.state, handleSidebar: this.handleSidebar, handleCart: this.handleCart, openCart: this.openCart, closeCart: this.closeCart }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }; 