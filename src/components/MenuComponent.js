import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
} from "reactstrap";

  function RenderMenuItem({ dish }) {
    return (
      <Card>     
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Card>
    );
  }

  const Menu  =(props)=> {

    // const menu = props.dishes.map((dish) => {
    //   return (
    //     <div key={dish.id} className="col-12 col-md-5 m-1">
    //       <RenderMenuItem dish={dish} onClick={props.onClick} />
    //     </div>
    //   );
    // });

    // return (
    //   <div className="container">
    //     <div className="row">
    //       {menu}
    //     </div>
    //   </div>
    // );
    console.log('check props of menu>>>', props);
    
    return (
      <div className="container">
        <div className="row">
          {props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
               { RenderMenuItem({ dish})}
              </div>
            );
          })}
        </div>
       
      </div>
    );
}

export default Menu;
