import React from "react";

class InputName extends React.Component
{
    constructor()
    {
        super();
        this.state =
            {
                textName: '',
                textNameCorrect: true,
            };
        this.firstRender = false;
    }


    changeName = (e) =>
    {
        if((parseInt(e.target.value.replace( /\D/g, '')) || true) === true)
        {
            this.setState(
                {
                    textNameCorrect: true,
                    textName: e.target.value
                });
            this.firstRender = true
        }
        else
        {
            this.setState(
                {
                    textNameCorrect: false,
                    textName: e.target.value
                });
            this.firstRender = false;
        }
        this.props.checkButton(this.firstRender, 'inputName')
    };


    render()
    {
        const {textName} = this.state;
        const showError =  this.state.textNameCorrect;
        return (
            <div className="containerInputName">
                <label className="paddingLabel">ФИО</label>
                <input className={showError ? "inputText" : "errorImage"} value={textName} placeholder="Только кириллица" onChange={(e) => this.changeName(e)} />
                <small className={showError ? "hideErrorText" : "showErrorText"}>Введите корректное имя.</small>
            </div>
        )
    }
}

export {InputName}