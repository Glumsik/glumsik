import React from "react";
import GoogleMapReact from "google-map-react";


const MarkerGoogleMap = (props) => <div className="marker" onClick={props.clickTest}></div>;


class ContentPickup extends React.Component
{
    constructor()
    {
        super();
        this.state =
            {
                markers:
                    [
                        {lat: 55.980673, lng: 37.168749},
                        {lat: 55.998212, lng:  37.225081}
                    ],
                checkBoxSelected: null,
                center:
                    {
                        lat:  55.982596,
                        lng:  37.176637
                    },
                zoom: 11,
            };
        this.stateButton = false;
    }


    test = (index) =>
    {
        if(index === 0)
        {
            this.setState({checkBoxSelected: 'radio-1'})
        }
        else if(index === 1)
        {
            this.setState({checkBoxSelected: 'radio-2'})
        }
        this.stateButton = true;
    };


    checkBoxSelected = (e) =>
    {
        this.setState({ checkBoxSelected: e.target.value });
        if(e.target.value === 'radio-1')
        {
            this.setState(
            {center:
                    {
                        lat:  55.980673,
                        lng:  37.168749
                    },
                zoom: 14
            })
        }
        else if(e.target.value === 'radio-2')
        {
            this.setState(
            {center:
                    {
                        lat:  55.998212,
                        lng:  37.225081
                    },
                zoom: 15
            })
        }
        this.stateButton = true;
    };


    render()
    {
        const markerComponent = this.state.markers.map((marker, index) =>
        {
            return (<MarkerGoogleMap clickTest={() => this.test(index)} key={index} lat={marker.lat} lng={marker.lng} />)
        });
        return (
            <div className={this.props.showContent ? "showContent" : "hideContent"}>
                <div className="radioComponentInner">
                    <div className="radioComponent">
                        <input type='radio'  value='radio-1'
                       checked={this.state.checkBoxSelected === 'radio-1'} onChange={(e) => this.checkBoxSelected(e)} />
                        <small >адрес доставки</small>
                    </div>
                    <div className="radioComponent">
                        <input type='radio'  value='radio-2'
                       checked={this.state.checkBoxSelected === 'radio-2'} onChange={(e) => this.checkBoxSelected(e)} />
                        <small >адрес доставки</small>
                    </div>
                </div>

                <div style={{ height: '90%', width: '100%' }}>
                    <GoogleMapReact center={this.state.center} zoom={this.state.zoom}>
                        {markerComponent}
                    </GoogleMapReact>
                </div>
                <div className="containerButtonCheckout">
                    <button className={this.stateButton ? "checkout" : "checkoutOff"}>Оформить заказ</button>
                </div>
            </div>
        );
    }
}

export {ContentPickup}