import React from 'react'
import {render} from 'react-dom'
import {ContentDelivery} from "./content/ContentDelivery";
import {ContentPickup} from "./content/ContentPickup";
import {Tab} from "./tab/Tab";
import './css/style.css'
import './input/input.css'
import './googleMap/googleMap.css'
import './tab/tab.css'
import './radioComponent/radio.css'

class App extends React.Component
{
    state =
        {
            showContentDelivery: true,
            showContentTabPickup: false,
            showTabDelivery: true,
            showTabPickup: false,
            nameTabDelivery: 'Доставка',
            nameTabPickup: 'Самовывоз',
            classNameDelivery: 'delivery',
            classNamePickup: 'pickup',
        };

    render()
    {
        return (
            <div className="containerApp">
                <div className="selectOuter">
                    <span className="selectTab">Выберите способ доставки</span>
                </div>
                <ul className="containerTabs">
                    <Tab showTab={this.state.showTabDelivery} classNameTab={this.state.classNameDelivery} nameTab={this.state.nameTabDelivery} click={() => this.setState({showTabDelivery: true, showTabPickup: false})}/>
                    <Tab showTab={this.state.showTabPickup} classNameTab={this.state.classNamePickup} nameTab={this.state.nameTabPickup} click={() => this.setState({showTabPickup: true, showTabDelivery: false})}/>
                </ul>
                <ContentDelivery showContent={this.state.showTabDelivery}/>
                <ContentPickup showContent={this.state.showTabPickup}/>
            </div>
        );
    }
}

render(<App/>, document.getElementById('root'));







