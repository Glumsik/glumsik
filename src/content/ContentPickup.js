import React from "react";
import GoogleMapReact from "google-map-react";


const MarkerGoogleMap = (props) => <div className="marker" onClick={props.click}></div>;


class ContentPickup extends React.Component {
    constructor() {
        super();
        this.state =
            {
                markers:
                    [
                        {lat: 55.998840, lng: 37.223017},
                        {lat: 55.977773, lng: 37.154761}
                    ],
                checkBoxSelected: null,
                center:
                    {
                        lat: 55.982596,
                        lng: 37.176637
                    },
                zoom: 11,
            };
        this.stateButton = false;
    }


    markerIndex = (index) =>
    {
        if (index === 0)
        {
            this.stateMarkers('radio-1')
        } else if (index === 1)
        {
            this.stateMarkers('radio-2')
        }
    };


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


    checkBoxSelected = (e) =>
    {
        if(e.target.value === 'radio-1')
        {
            this.stateMarkers('radio-1')
        }
        else if(e.target.value === 'radio-2')
        {
            this.stateMarkers('radio-2')
        }
    };


    render()
    {
        const markerComponent = this.state.markers.map((marker, index) =>
        {
            return (<MarkerGoogleMap click={() => this.markerIndex(index)} key={index} lat={marker.lat} lng={marker.lng} />)
        });
        return (
            <div className={this.props.showContent ? "showContent" : "hideContent"}>
                <div className="radioComponentInner">
                    <div className="radioComponent">
                        <input type='radio'  value='radio-1'
                       checked={this.state.checkBoxSelected === 'radio-1'} onChange={(e) => this.checkBoxSelected(e)} />
                        <small className="addressPickup">ул. Юности, 5, Зеленоград, Москва, 124482</small>
                    </div>
                    <div className="radioComponent">
                        <input type='radio'  value='radio-2'
                       checked={this.state.checkBoxSelected === 'radio-2'} onChange={(e) => this.checkBoxSelected(e)} />
                        <small className="addressPickup">корпус 1549, Зеленоград, Москва, 124683</small>
                    </div>
                </div>
                <div className="googleMapContainer">
                    <div style={{width:'90%', height:'90%'}}>
                        <GoogleMapReact center={this.state.center} zoom={this.state.zoom}>
                            {markerComponent}
                        </GoogleMapReact>
                    </div>
                </div>
                <div className="containerButtonCheckout">
                    <button className={this.stateButton ? "checkout" : "checkoutOff"}>Оформить заказ</button>
                </div>
            </div>
        );
    }
}

export {ContentPickup}