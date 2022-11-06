import React, { Component } from "react";
import Menu from "./MenuComponent";
import { Route, Routes, useParams, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import About from "./AboutUsComponent";
import Contact from "./ContactComponent";
import {
  postComment,
  fetchDishes,
  fetchComments,
  fetchPromos,
} from "../Redux/ActionCreators";
import DishDetail from "./DishDetailComponent";
import { actions } from "react-redux-form";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) =>
    dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => dispatch(fetchDishes()),
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
});
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion={
            this.props.promotions.promotions.filter(
              (promo) => promo.featured
            )[0]
          }
          promosLoading={this.props.promotions.isLoading}
          promosErrMess={this.props.promotions.errMess}
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
            this.props.dishes.dishes.filter(
              (dish) => dish.id === parseInt(dishId, 10)
            )[0]
          }
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          commentsErrMess={this.props.comments.errMess}
          comments={this.props.comments.comments.filter(
            (comment) => comment.dishId === parseInt(dishId, 10)
          )}
          postComment={this.props.postComment}
        />
      );
    };
    return (
      <div>
        <Header></Header>
        <TransitionGroup>
          <CSSTransition
            key={this.props.location}
            classNames="page"
            timeout={300}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                exact
                path="/menu"
                element={<Menu dishes={this.props.dishes.dishes} />}
              />
              <Route path="/menu/:dishId" element={<DishWithId />} />
              <Route
                path="/aboutus"
                element={<About leaders={this.props.leaders} />}
              />
              <Route
                path="/contactus"
                element={
                  <Contact resetFeedbackForm={this.props.resetFeedbackForm} />
                }
              />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
        <Footer></Footer>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
