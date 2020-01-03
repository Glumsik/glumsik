import React from "react";

class InputAddress extends React.Component
{
    constructor()
    {
        super();
        this.state =
            {
                textAddress: '',
                textAddressCorrect: false,
            };
        this.firstRender = true;
    }


    componentDidMount()
    {
        this.firstRender = false;
    }


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


    render()
    {
        const {textAddress} = this.state;
        const showError =  this.state.textAddressCorrect || this.firstRender;

        return (
            <div className="containerComponent containerInputAddress">
                <label>Адрес доставки</label>
                <input className={showError ? "inputText" : "test"} value={textAddress} placeholder="Город, улица, дом" onChange={(e) => this.changeAddress(e)}/>
                <small className={showError ? "hideErrorText" : "showErrorText"}>Введите адрес доставки</small>
            </div>
        )
    }
}

export {InputAddress}