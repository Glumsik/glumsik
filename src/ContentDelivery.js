import React from "react";
import {InputName} from "./InputName";
import {InputNumber} from "./InputNumber";
import {InputAddress} from "./InputAddress";

class ContentDelivery extends React.Component
{

    constructor()
    {
        super();
        this.state =
            {
                textComment: '',
                stateButton: false
            }
    }


    changeComment = (e) =>
    {
        this.setState({textComment: e.target.value});
    };


    changeStateButton = () =>
    {
        // if(this.state.textNameCorrect)
        // {
        //     this.setState({stateButton: true})
        // }
    };

    render()
    {
        const {textComment} = this.state;

        return (
            <div className={this.props.showContent ? "showContent" : "hideContent"}>
                <div className="containerFirst">
                    <InputName/>
                    <InputNumber/>
                </div>
                    <InputAddress/>
                <div className="containerComponent containerInputComment">
                    <label>Комментарий</label>
                    <textarea value={textComment} onChange={(e) => this.changeComment(e)}> </textarea>
                </div>
                <div className="containerButtonCheckout">
                    <button className={this.state.stateButton ? "checkout" : "checkoutOff"}>Оформить заказ</button>
                </div>
            </div>
        );
    }
}


export {ContentDelivery}