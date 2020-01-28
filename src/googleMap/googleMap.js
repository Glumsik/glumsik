import React from "react";
import GoogleMapReact from "google-map-react";
import {isMobile, isTablet} from 'react-device-detect';


const MarkerGoogleMap = (props) => <div className="marker" onClick={props.click}><svg width="34" height="40" viewBox="0 0 34 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path  d="M16.6667 38.3333C15.7422 39.7201 15.7413 39.7195 15.7413 39.7195L15.7365 39.7163L15.7254 39.7088L15.6872 39.683C15.6547 39.661 15.6085 39.6293 15.5493 39.5883C15.4309 39.5063 15.2608 39.3869 15.0463 39.232C14.6176 38.9223 14.0106 38.4704 13.2847 37.8923C11.8356 36.7384 9.89898 35.0714 7.95675 33.0212C4.14044 28.9929 0 23.1699 0 16.6667C9.93411e-08 12.2464 1.75595 8.00716 4.88155 4.88155C8.00716 1.75595 12.2464 0 16.6667 0C21.0869 0 25.3262 1.75595 28.4518 4.88155C31.5774 8.00716 33.3333 12.2464 33.3333 16.6667C33.3333 23.1699 29.1929 28.9929 25.3766 33.0212C23.4344 35.0714 21.4978 36.7384 20.0486 37.8923C19.3227 38.4704 18.7158 38.9223 18.287 39.232C18.0726 39.3869 17.9025 39.5063 17.7841 39.5883C17.7249 39.6293 17.6786 39.661 17.6461 39.683L17.6079 39.7088L17.5968 39.7163L17.5933 39.7187C17.5933 39.7187 17.5912 39.7201 16.6667 38.3333ZM16.6667 38.3333L17.5912 39.7201C17.0313 40.0933 16.3011 40.0927 15.7413 39.7195L16.6667 38.3333Z" fill="#215BF0"/>
<circle cx="16.6666" cy="16" r="6" fill="white"/>
</svg>
</div>;

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
                <div style={{width:'100%', height:'100%'}}>
                    <GoogleMapReact options={(isMobile || isTablet) ? {gestureHandling: "none"} : {gestureHandling: "greedy"}} center={this.props.center} zoom={this.props.zoom}>
                        {markerComponent}
                    </GoogleMapReact>
                </div>
            </div>
        )
    }
}

export {GoogleMap}