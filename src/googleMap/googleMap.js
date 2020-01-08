import React from "react";
import GoogleMapReact from "google-map-react";


const MarkerGoogleMap = (props) => <div className="marker" onClick={props.click}></div>;

class GoogleMap extends React.Component
{
    markerIndex = (index) =>
    {
        if (index === 0)
        {
            this.props.stateMarkers('radio-1')
        } else if (index === 1)
        {
            this.props.stateMarkers('radio-2')
        }
    };


    render()
    {
        const markerComponent = this.props.markers.map((marker, index) =>
        {
            return (<MarkerGoogleMap click={() => this.markerIndex(index)} key={index} lat={marker.lat} lng={marker.lng} />)
        });

        return (
            <div className="googleMapContainer">
                <div style={{width:'90%', height:'90%'}}>
                    <GoogleMapReact center={this.props.center} zoom={this.props.zoom}>
                        {markerComponent}
                    </GoogleMapReact>
                </div>
            </div>
        )
    }
}

export {GoogleMap}