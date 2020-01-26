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
        if((/^[A-ZА-ЯЁ\s-]+$/i).test(e.target.value) === true)
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
        this.props.checkButton(this.firstRender, 'inputName');
    };


    render()
    {
        const {textName} = this.state;
        const showError =  this.state.textNameCorrect;
        const show = showError ? ('') : (<label htmlFor="InputName" className="showErrorText">Введите корректное имя.</label>);
        
        return (
            <div className="containerInputName">
                <label className="paddingLabel" htmlFor="InputName">ФИО</label>
                <input id="InputName" className={showError ? "InputName" : "errorImage"} value={textName} placeholder="Только кириллица" onChange={(e) => this.changeName(e)} />
                {show}
            </div>
        )
    }
}

export {InputName}