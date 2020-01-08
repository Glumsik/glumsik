import React from "react";
import {RadioComponent} from "../radioComponent/radioComponent";
import {GoogleMap} from "../googleMap/googleMap";


class ContentPickup extends React.Component
{
    constructor()
    {
        super();
        this.state =
            {
                markers:
                    [
                        {lat: 55.998840, lng: 37.223017},
                        {lat: 55.977773, lng: 37.154761}
                    ],
                center:
                    {
                        lat: 55.992698,
                        lng: 37.191747
                    },
                zoom: 11,
                checkBoxSelected: null
            };
        this.stateButton = false;
    }


    stateMarkers = (radio) =>
    {
        if(radio === 'radio-1')
        {
            this.setState(
                {
                    center:
                        {
                            lat: this.state.markers[0].lat,
                            lng: this.state.markers[0].lng
                        },
                    zoom: 14,
                    checkBoxSelected: radio
                })
        }
        else if(radio === 'radio-2')
        {
            this.setState(
                {
                    center:
                        {
                            lat: this.state.markers[1].lat,
                            lng: this.state.markers[1].lng
                        },
                    zoom: 14.1,
                    checkBoxSelected: radio
                })
        }
        this.stateButton = true;
    };


    render()
    {
        return (
            <div className={this.props.showContent ? "showContent" : "hideContent"}>
                <RadioComponent stateMarkers={this.stateMarkers} checkBoxSelected={this.state.checkBoxSelected}/>
                <GoogleMap stateMarkers={this.stateMarkers} markers={this.state.markers} center={this.state.center} zoom={this.state.zoom}/>
                <div className="containerButtonCheckout">
                    <button className={this.stateButton ? "checkout" : "checkoutOff"}>Оформить заказ</button>
                </div>
            </div>
        );
    }
}

export {ContentPickup}