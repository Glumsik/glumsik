import React from 'react'
import {render} from 'react-dom'
import {ContentDelivery} from "./content/ContentDelivery";
import {ContentPickup} from "./content/ContentPickup";
import {Tab} from "./tab/Tab";
import './css/style.css'

class App extends React.Component
{
    state =
        {
            showContentDelivery: true,
            showContentTabPickup: false,
            showTabDelivery: true,
            showTabPickup: false,
            nameTabDelivery: 'Доставка',
            nameTabPickup: 'Самовывоз'
        };

    render()
    {
        return (
            <div className="containerInner">
                <div className="containerTabs">
                    <Tab showTab={this.state.showTabDelivery} nameTab={this.state.nameTabDelivery} click={() => this.setState({showTabDelivery: true, showTabPickup: false})}/>
                    <Tab showTab={this.state.showTabPickup} nameTab={this.state.nameTabPickup} click={() => this.setState({showTabPickup: true, showTabDelivery: false})}/>
                </div>
                <ContentDelivery showContent={this.state.showTabDelivery}/>
                <ContentPickup showContent={this.state.showTabPickup}/>
            </div>
        );
    }
}

render(<App/>, document.getElementById('root'));







