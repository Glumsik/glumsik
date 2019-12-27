import React from 'react'
import {render} from 'react-dom'
import InputMask from "react-input-mask";
import GoogleMapReact from 'google-map-react';
import './style.css'


// class Tabs extends React.Component
// {
//     constructor(props)
//     {
//         super();
//         this.state =
//         {
//             tabs: props.tabs,
//             currentIndex: 0
//         }
//     }
//
//
//     render()
//     {
//         const buttons = this.state.tabs.map((tab, index) =>
//         {
//             return (<button className="button" key={index} onClick={() => this.setState({currentIndex: index})}>{tab.name}</button>)
//         });
//
//         const content = this.state.tabs[this.state.currentIndex].content;
//         console.log(content)
//         return (
//        <div className="container">
//            <div className="buttonContainer">
//                {buttons}
//            </div>
//                {content}
//        </div>
//         );
//     }
// }
// class Delivery extends React.Component
// {
//     constructor(props)
//     {
//         super();
//         this.state =
//             {
//                 text: props.text
//             }
//     }
//
//
//     change = (e) =>
//     {
//         const {name, value} = e.target;
//         this.setState({[name]: value})
//             {text: e.target.value.replace(/[abAB$&()-_.*]|\d+/g, '')}
//     };
//
//
//     render()
//     {
//         const {text} = this.state;
//
//         return(
//             <div>
//                 <div className="contentContainer">Delivery</div>
//                 <form>
//                     <input name="text" value={text} onChange={(e) => this.change(e)}/>
//                 </form>
//             </div>
//         );
//     }
// }
//
//



class Tab extends React.Component
{
    render()
    {
        return (
           <div className={this.props.showTab ? "showTab tab" : "hideTab tab"} onClick={this.props.click}>{this.props.nameTab}</div>
        );
    }
}


class ContentDelivery extends React.Component
{

    constructor()
    {
        super();
        this.state =
            {
                textName: '',
                textNameCorrect: true,
                textAddress: '',
                textAddressCorrect: true,
                textComment: ''
            }
    }


    changeName = (e) =>
    {
        this.setState({textName: e.target.value});

        if((parseInt(e.target.value.replace( /\D/g, '')) || true) === true)
        {
            this.setState({textNameCorrect: true});
        }
        else
        {
            this.setState({textNameCorrect: false});
        }
    };


    changeAddress = (e) =>
    {
        this.setState({textAddress: e.target.value});

        if(e.target.value.length > 0)
        {
            this.setState({textAddressCorrect: true});
        }
        else
        {
            this.setState({textAddressCorrect: false});
        }
    };


    changeComment = (e) =>
    {
        this.setState({textComment: e.target.value});
    };


    render()
    {
        const {textName} = this.state;
        const {textAddress} = this.state;
        const {textComment} = this.state;

        return (
            <div className={this.props.showContent ? "showContent" : "hideContent"}>
                <div className="containerFirst">
                    <div className="containerComponent">
                        <label>ФИО</label>
                        <input className={this.state.textNameCorrect ? "" : "test"} value={textName} placeholder="Только кириллица" onChange={(e) => this.changeName(e)} />
                        <small className={this.state.textNameCorrect ? "hideErrorText" : "showErrorText"}>Введите корректное имя.</small>
                    </div>
                    <div className="containerComponent">
                        <label>Телефон</label>
                        <InputMask mask="+7 (999) 999-99-99" placeholder="+7 (___) ___-__-__"/>
                    </div>
                </div>
                    <div className="containerComponent containerInputAddress">
                        <label>Адрес доставки</label>
                        <input className={this.state.textAddressCorrect ? "" : "test"} value={textAddress} placeholder="Город, улица, дом" onChange={(e) => this.changeAddress(e)}/>
                        <small className={this.state.textAddressCorrect ? "hideErrorText" : "showErrorText"}>Введите адрес доставки</small>
                    </div>
                    <div className="containerComponent containerInputComment">
                        <label>Комментарий</label>
                        <textarea value={textComment} onChange={(e) => this.changeComment(e)}> </textarea>
                    </div>
                <div className="containerButtonCheckout">
                    <button className="checkout">Оформить заказ</button>
                </div>
            </div>
        );
    }
}


const MarkerGoogleMap = () => <div className="marker" onClick={() => console.log("You clicked me!")} ></div>;


class ContentPickup extends React.Component
{
    static defaultProps = {
        center: {
            lat:  55.982596,
            lng:  37.176637
        },
        zoom: 11
    };


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
                checkBoxSelected: "null",
            }
    }


    render()
    {
        const markerComponent = this.state.markers.map((marker, index) =>
        {
            return (<MarkerGoogleMap  key={index} lat={marker.lat} lng={marker.lng} />)
        });

        return (
            <div className={this.props.showContent ? "showContent" : "hideContent"}>
                <div>
                    <input type='radio'  value='radio-1'
                           checked={this.state.checkBoxSelected === 'radio-1'} onChange={(e) => this.setState({ checkBoxSelected: e.target.value })} />
                    <input type='radio'  value='radio-2'
                           checked={this.state.checkBoxSelected === 'radio-2'} onChange={(e) => this.setState({ checkBoxSelected: e.target.value })} />
                </div>

                <div style={{ height: '90%', width: '100%' }}>
                    <GoogleMapReact defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
                        {markerComponent}
                    </GoogleMapReact>
                </div>
            </div>
        );
    }
}


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
                    <Tab showTab={this.state.showTabDelivery} nameTab={this.state.nameTabDelivery} click={() => this.setState({showContentPickup: false, showContentDelivery: true, showTabDelivery: true, showTabPickup: false})}/>
                    <Tab showTab={this.state.showTabPickup} nameTab={this.state.nameTabPickup} click={() => this.setState({showContentDelivery: false, showContentPickup: true, showTabPickup: true, showTabDelivery: false})}/>
                </div>
                <ContentDelivery showContent={this.state.showContentDelivery}/>
                <ContentPickup showContent={this.state.showContentPickup}/>
            </div>
        );
    }
}



render(<App/>, document.getElementById('root'));







