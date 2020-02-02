import React, { Component } from 'react';
import BuyBook  from './BuyBook';

let i = 0;
let modalId;
let closeId;

const BookCard = (props) => {

    i += 1;
    modalId = 'modal' + i;
    closeId = 'close' + i;
    return (
    
      
    <div className="card">
        <div className= "card__image-container">
            <img src={props.image} alt="" />
        </div>

        <div className = "card__content">
            <p class="card__title ">{props.title}</p>
            
            <p>Author: {props.author}</p>
            <p>Published Date: {props.publishedDate === '0000' ? 'Not Available' : props.publishedDate.substring(0,4)}</p>
        
        </div>
        <div className="card__footer">
            <p ><button className="card__button" value={i} id={i} onClick={showModal}>Buy it</button></p>
        </div>
        
        <div id={modalId} className="modal" >
            <div class="modal-content">
                <span class="close" id={closeId}>&times;</span>
                <BuyBook author={props.author} desc={props.desc} title={props.title} publishedDate={props.publishedDate} image={props.image} />
            </div>

        </div>
    </div>
              
    )
}

const showModal = (e) => {

    var modal = document.getElementById('modal'+ e.target.value);
    var btn = document.getElementById(e.target.value);
    var span = document.getElementById('close'+e.target.value);

    if (!modal.style.display || modal.style.display == "none") {
        modal.style.display = "block";
    }
    else {
        modal.style.display = "none";
    }

    btn.onclick = function () {
    
    
            modal.style.display = "none";

    }

    span.onclick = function () {
        modal.style.display = "none";

    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
       
        }
    }
 
};
       
export default BookCard;