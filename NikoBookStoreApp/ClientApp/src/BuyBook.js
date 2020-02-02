import React, { Component } from 'react';

var motorCostFactor     = [0.5, 1.5, 1];
var trainCostFactor     = [0.8, 1.8, 1];
var aircraftCostFactor  = [0.8, 2, 1];

let i = 0;
let serviceinfo;
let serviceBtn;
const BuyBook = (props) => {
    i += 1;
    serviceinfo = "serviceInfo-" + i;
    serviceBtn = "serviceBtn" + i;
    var valueM = i + "-M";
    var valueT = i + "-T";
    var valueA = i + "-A";

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
        
                    <button id={serviceBtn} value={valueM} className="delivery_M" onClick={shipping} name="Motorbike">Motorbike</button>
                    <button id={serviceBtn} value={valueT} className="delivery_T" onClick={shipping} name="Train">Train</button>
                    <button id={serviceBtn} value={valueA} className="delivery_A" onClick={shipping} name="Aircraft">Aircraft</button>

                    <form onSubmit={deliver} action="">
                    <div id={serviceinfo} className="serviceInfo">


                     </div>
                    </form>
            </center>
             </div>
           
      </div>


    )
}




const deliver = () => {
    alert('Thank you for your purchase, We will now process your delivery details.');
}

const shipping = (e) => {

    var driverName = ['Shaun', 'Veeren', 'Govindu'];
    var mobile = ['0275513678', '0275513678', '0275513678'];

    var trainNo = ['TRAIN001', 'TRAIN002', 'TRAIN003']
    var trainSt = ['ST000001', 'ST000002', 'ST000003']

    var airCraft = ['FLT0001', 'FLT0002', 'FLT0003']
    var arrivalGate = ['Gate01','Gate02','Gate03']

    var min = 0;
    var max = 2;
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    var lblFrstProp = "";
    var lblScndProp = "";
    var lblThrdProp = "";
    var lblCost;
    var cost;
    var targetValue = e.target.value.toString();
    var header;

    var splitId = targetValue.split("-");

    var serviceInfo = "serviceInfo-" + splitId[0];

    // Get full date in dd/mm/yyyy format
    function getFullDate() {

        var date = new Date();
        var yyyy = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        var dd = [d < 10 ? '0' + d : d];
        var mm = [m < 10 ? '0' + m : m];
        var ddmmyyyy = dd + '/' + mm + '/' + yyyy;
        return ddmmyyyy;
    }

    // get base factor
    function getFactor() {

        var date = new Date();
        var m = date.getMonth + 1
        var factor;  
        switch (m) {
            // for June to Aug
            case 6:
            case 7:
            case 8:
                factor = 0
            break;
            // for September
            case 9:
                factor = 1
                break;
            default:
                factor = 2

        }

        return factor;
    }
    // Populate Delivery Details
    switch (splitId[1]) {
        case "M":
            header = "Motorbike";
            lblFrstProp = "Driver Name: " + driverName[random]
            lblScndProp = "Mobile: " + mobile[random]
            lblThrdProp = "Delivery date: " + getFullDate();
            cost = 5 * getFactor();
            lblCost = "Cost: $" + cost.toString();


      
            break;
        case "A":
            header = "Aircraft";

            lblFrstProp = "Flight no: " + airCraft[random]
            lblScndProp = "Gate of arrival: " + arrivalGate[random]
            lblThrdProp = "Date of arrival: " + getFullDate()+10;
            cost = 10 * getFactor();
            lblCost = "Cost: $" + cost.toString();
      
            break;
        case "T":
            header = "Train";

            lblFrstProp = "Train No: " + trainNo[random]
            lblScndProp = "Station of arrival: " + trainSt[random]
            lblThrdProp = "Date of arrival: " + getFullDate()+30;
            cost = 20 * getFactor();
            lblCost = "Cost: $" + cost.toString();
          
            break;

        default:

    }
    //Remove Child
    var list = document.getElementById(serviceInfo);
    if (list.hasChildNodes()) {

        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }


    }

    //Create delivery Details
    var node = document.createElement('H3');
    var textnode = document.createTextNode(header + " Delivery Details:")
    node.appendChild(textnode);
    document.getElementById(serviceInfo).appendChild(node);


    node = document.createElement('P');
    textnode = document.createTextNode(lblFrstProp )
    node.appendChild(textnode);
    document.getElementById(serviceInfo).appendChild(node);

    node = document.createElement('P');
    textnode = document.createTextNode(lblScndProp)
    node.appendChild(textnode);
    document.getElementById(serviceInfo).appendChild(node);

    node = document.createElement('P');
    textnode = document.createTextNode(lblThrdProp)
    node.appendChild(textnode);
    document.getElementById(serviceInfo).appendChild(node);

    node = document.createElement('P');
    textnode = document.createTextNode(lblCost)
    node.appendChild(textnode);
    document.getElementById(serviceInfo).appendChild(node);


    node = document.createElement('button');
    textnode = document.createTextNode('Confirm Delivery')
    node.appendChild(textnode);
    document.getElementById(serviceInfo).appendChild(node);
}


export default BuyBook;


