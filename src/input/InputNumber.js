import React from "react";
import InputMask from "react-input-mask";

class InputNumber extends React.Component
{
    constructor()
    {
        super();
        this.state =
            {
                numberCorrect: true,
            };
        this.firstRender = false;
    }


    changeNumber = (e) =>
    {
        if((e.target.value.replace( /\D/g, '').length === 11))
        {
            this.setState({numberCorrect: true});
            this.firstRender = true;
        }
        else
        {
            this.setState({numberCorrect: false});
            this.firstRender = false;
        }
        this.props.checkButton(this.firstRender, 'inputNumber')
    };


    render()
    {
        const showError =  this.state.numberCorrect;
        return (
            <div className="containerInputNumber">
                    <label className="paddingLabel">Телефон</label>
                    <InputMask mask="+7 (999) 999-99-99" className="inputText" placeholder="+7 (___) ___-__-__" onChange={(e) => this.changeNumber(e)}/>
                    <small className={showError ? "hideErrorText" : "showErrorText"}>Введите номер телефона</small>
            </div>

        )
    }
}

export {InputNumber}