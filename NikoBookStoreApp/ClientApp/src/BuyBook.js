import React from 'react';

import BookCard from './BookCard';

const BuyBook = (props) => {
    return (

        <div>
            <div className="clearfix" >
                <img className= "popupBook__image" src={props.image} alt="" />
                {props.desc}
          
            </div>
           
            <p className='card__title'>{props.title}</p>
            <p>{props.author} - {props.publishedDate}</p>

            <div className= "popupBook__footer">
          
           
                <hr></hr>
                <center>
            <p className = "title">Ship via</p>
        
                <button class="btn btn-primary btn-sm">MotorBike</button>
                <button class="btn btn-warning btn-sm">Train</button>
                <button class="btn btn-danger btn-sm ">Aircraft</button>
            </center>
             </div>
           
      </div>


    )
}

export default BuyBook;