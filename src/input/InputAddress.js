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
        const show = showError ? ('') : (<label htmlFor="InputAddress" className="showErrorText">Введите адрес доставки.</label>);


        return (
            <div className="containerInputAddress">
                <label className="paddingLabel" htmlFor="InputAddress">Адрес доставки</label>
                <input  id="InputAddress" className={showError ? "InputAddress" : "errorAddress"} value={textAddress} placeholder="Город, улица, дом" onChange={(e) => this.changeAddress(e)}/>
                {show}
            </div>
        )
    }
}

export {InputAddress}