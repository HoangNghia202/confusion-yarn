import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import moment from "moment/moment";
class DishDetail extends Component {
  
  state = {
    selectedDish: this.props.dish,
  };
  renderDish(dish) {
    this.setState = { selectedDish: dish };
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }

  renderComments(comments) {
    if (comments != null) {
      let comment = comments.map((comment) => {
        return (
          <div>
            <p>{comment.comment}</p>
            <p>
              -- {comment.author}, {moment(comment.date).format("MMM DD, YYYY")}
            </p>
          </div>
        );
      });
      return (
        <div>
          <h4>Comments</h4>
          {comment}
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {    
    console.log("check props>>>", this.props.dish);
    console.log("check state>>>", this.state.dishDetail);
    
    // console.log("check comments>>>", this.state.dishDetail.comments);
    // let dish = this.state.dishDetail;
    // let comments = this.state.dishDetail.comments;
    // const dishItem = this.renderDish(dish);
    // const commentItem = this.renderComments(comments);

    return (
      <>
        <div className="col-12 col-md-5">
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {/* {dishItem}
                {commentItem} */}
          </ul>
        </div>
      </>
    );
  }
}

export default DishDetail;
