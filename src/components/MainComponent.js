import React, { Component } from "react";
import Menu from "./MenuComponent";
import { Route, Routes, useParams, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import About from "./AboutUsComponent";
import Contact from "./ContactComponent";
import {addComment} from "../Redux/ActionCreators";

import DishDetail from "./DishDetailComponent";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) =>dispatch(addComment(dishId, rating, author, comment)),
});
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    const DishWithId = () => {
      console.log("match>>> run into dish with id");
      const { dishId } = useParams();
      return (
        <DishDetail
          dish={
            this.props.dishes.filter(
              (dish) => dish.id === parseInt(dishId, 10)
            )[0]
          }
          comments={this.props.comments.filter(
            (comment) => comment.dishId === parseInt(dishId, 10)
          )}
          addComment={this.props.addComment }
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
            element={<Menu dishes={this.props.dishes} />}
          />
          <Route path="/menu/:dishId" element={<DishWithId />} />
          <Route
            path="/aboutus"
            element={<About leaders={this.props.leaders} />}
          />
          <Route path="/contactus" element={<Contact />} />
        </Routes>
        <Footer></Footer>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
