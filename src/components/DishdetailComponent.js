
import React, {Component} from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody } from 'reactstrap';

class Dishdetail extends Component{

    constructor(props){
        super(props);
        this.state={
            selectedDish: this.props.selectedDishDetail
        }

    }

    renderDish(dish) {
        if (dish != null)
            return(
                <div className='col-12 col-md-5 m-1'>
                <Card >
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );
        else
            return(
                <div></div>
            );
    }

    
    renderComments(comments){

        if (comments==null){
        return(
                <div></div>
        );
        }
       const cmts= comments.map(comment=> {

        return (
         <li key={comment.id}>
            <p> { comment.comment}</p>
            <p> --{comment.author} , {new Intl.DateTimeFormat('en-US', { year:'numeric', month:'long', day:"2-digit"}
            ).format( new Date(comment.date ))}</p>
             
       </li>


        )

       }  )


        return(

            <div className='col-12 col-md-5 m-1'>
                <h4>Comments</h4>
                <ul className='list-unstyled'>
                    {cmts}


                </ul>

            </div>
        )
        
    



}



    render(){
       const  dish= this.props.dish;
       if(dish==null){
        return(
            <div>

            </div>
        )
       }
       const dishDisplay= this.renderDish(dish);
       const commentDisplay= this.renderComments(dish.comments);
       
       
       
       

        return(
            <div className='row'>
            
               {dishDisplay}
               
               {commentDisplay}
              
            </div>


        );
    }



}


export default Dishdetail;


