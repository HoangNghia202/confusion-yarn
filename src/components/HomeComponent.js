import React from "react";
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
function Home(props) {
  console.log('check props home>>> ', props);
  
   const RenderCard = ({item}) => {
      return (
          <Card>
              <CardImg width="100%" src={item.image} alt={item.name} />
              <CardBody>
                  <CardTitle>{item.name}</CardTitle>
                  {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                  <CardText>{item.description}</CardText>

              </CardBody>
          </Card>
      );
  }
  return (
    <div className="container">   
      <div className="row align-items-start ">
        <div className="col-12 col-md m-1">
          {RenderCard({item: props.dish})} 
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.promotion} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.leader} />
        </div>
      </div>
    </div>
  );
}

export default Home;
