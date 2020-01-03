import React from "react";

class InputAddress extends React.Component
{
    constructor()
    {
        super();
        this.state =
            {
                textAddress: '',
                textAddressCorrect: true,
            };
        this.firstRender = false;
    }


    changeAddress = (e) =>
    {
        this.setState({textAddress: e.target.value});

        if(e.target.value.length > 0)
        {
            this.setState(
                {
                    textAddressCorrect: true,
                    textAddress: e.target.value
                });
            this.firstRender = true;
        }
        else
        {
            this.setState(
                {
                    textAddressCorrect: false,
                    textAddress: e.target.value
                });
            this.firstRender = false;
        }
        this.props.checkButton(this.firstRender, 'inputAddress')
    };


    render()
    {
        const {textAddress} = this.state;
        const showError =  this.state.textAddressCorrect;

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