import React, { Component } from "react";
import Menu from "./MenuComponent";
import { Route, Routes, useParams } from "react-router-dom";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import AboutUs from "./AboutUsComponent";
import Contact from "./ContactComponent";
import { DISHES } from "../Shared/dishes";
import { COMMENTS } from "../Shared/comments";
import { LEADERS } from "../Shared/leaders";
import { PROMOTIONS } from "../Shared/promotions";
import DishDetail from "./DishDetailComponent";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
    };
  }

  

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
   
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    const DishWithId = () => {
      console.log("match>>> run into dish with id");
      const { dishId } = useParams();
      return (
        <DishDetail
        dish={
          this.state.dishes.filter(
            (dish) => dish.id === parseInt(dishId, 10)
          )[0]
        }
        comments={this.state.comments.filter(
          (comment) => comment.dishId === parseInt(dishId, 10)
        )}
        />
      );
    };
    return (
      <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            exact
            path="/menu"
            element={<Menu dishes={this.state.dishes} />}
          />
          <Route path="/menu/:dishId" element={<DishWithId/>} />
          <Route path="/aboutus" element={<AboutUs />}/>
          <Route path="/contactus" element={<Contact />} />
        </Routes>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;
