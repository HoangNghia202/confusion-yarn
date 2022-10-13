import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import { DISHES } from "../Shared/dishes";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  index,
  Na
} from "react-router-dom";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import AboutUs from "./AboutUsComponent";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Routes>        
          <Route path="/" element={<Home></Home>}></Route>
          <Route exact path='/menu' element={ <Menu dishes={this.state.dishes} />} />
          <Route path="/aboutus" element={<AboutUs />}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;
