import React from "react";
import {InputName} from "../input/InputName";
import {InputNumber} from "../input/InputNumber";
import {InputAddress} from "../input/InputAddress";
import {TextArea} from "../input/textArea";

class ContentDelivery extends React.Component
{

    constructor()
    {
        super();
        this.state =
            {
                stateButton: false
            };
            this.inputName = false;
            this.inputAddress = false;
            this.inputNumber = false;
    }


    checkButton = (value, input) =>
    {
       if(input === 'inputName')
       {
           this.inputName = value;
       }
       else if(input === 'inputAddress')
       {
           this.inputAddress = value;
       }
       else if(input === 'inputNumber')
       {
           this.inputNumber = value;
       }
        this.stateButton();
    };


    stateButton = () =>
    {
        if(this.inputName && this.inputAddress && this.inputNumber)
        {
            this.setState({stateButton: true})
        }
        else
        {
            this.setState({stateButton: false})
        }
    };


    render()
    {
        return (
            <div className={this.props.showContent ? "showContent" : "hideContent"}>
                <div className="containerInner">
                    <InputName checkButton={this.checkButton}/>
                    <InputNumber checkButton={this.checkButton}/>
                </div>
                    <InputAddress checkButton={this.checkButton}/>
                    <TextArea/>
                <div className="containerButtonCheckout">
                    <button className={this.state.stateButton ? "checkout" : "checkoutOff"}>Оформить заказ</button>
                </div>
            </div>
        );
    }
}


export {ContentDelivery}