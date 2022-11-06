import React, { Component } from "react";
import CommentForm from "./CommentFormComponent";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import Loading from "./LoadingComponent";
import {baseUrl} from '../Shared/baseUrl';
function RenderDish(dish) {
  if (dish != null) {
    return (
      <div>
        <Card>
          <CardImg width="100%" src={baseUrl+dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle> {dish.name}</CardTitle>
            <CardText> {dish.description} </CardText>
          </CardBody>
        </Card>
      </div>
    );
  } else {
    return <div></div>;
  }
}

function RenderComments(comments, dishId, addComment) {
  if (comments == null) {
    return <div></div>;
  }
  const cmnts = comments.map((comment) => {
    return (
      <li key={comment.id}>
        <p>{comment.comment}</p>
        <p>
          -- {comment.author}, &nbsp;
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          }).format(new Date(comment.date))}
        </p>
      </li>
    );
  });
  return (
    <div>
      <h4> Comments </h4>
      <ul className="list-unstyled">{cmnts}</ul>
      <CommentForm dishId={dishId} addComment={addComment} />
    </div>
  );
}

const DishDetail = (props) => {
  console.log("Check props dishdetail>>>", props);
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">{RenderDish(props.dish)}</div>
          <div className="col-12 col-md-5 m-1">
            {RenderComments(props.comments, props.dish.id, props.addComment)}
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
