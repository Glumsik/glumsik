import React from "react";
import InputMask from "react-input-mask";

class InputNumber extends React.Component
{
    constructor()
    {
        super();
        this.state =
            {
                numberCorrect: false,
            };
        this.firstRender = true;
    }


    componentDidMount()
    {
        this.firstRender = false;
    }


    changeNumber = (e) =>
    {
        if((e.target.value.replace( /\D/g, '').length === 11))
        {
            this.setState({numberCorrect: true});
        }
        else
        {
            this.setState({numberCorrect: false});
        }
    };


    render()
    {
        const showError =  this.state.numberCorrect || this.firstRender;
        return (
            <div className="containerComponent">
                    <label>Телефон</label>
                    <InputMask mask="+7 (999) 999-99-99" className="inputText" placeholder="+7 (___) ___-__-__" onChange={(e) => this.changeNumber(e)}/>
                    <small className={showError ? "hideErrorText" : "showErrorText"}>Введите номер телефона</small>
            </div>

        )
    }
}

export {InputNumber}