import React from "react";

class InputName extends React.Component
{
    constructor(props)
    {
        super();
        this.state =
            {
                textName: '',
                textNameCorrect: false,
            };
        this.firstRender = true;
    }


    componentDidMount()
    {
        this.firstRender = false;
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


    render()
    {
        const {textName} = this.state;
        const showError =  this.state.textNameCorrect || this.firstRender;

        return (
            <div className="containerComponent">
                <label>ФИО</label>
                <input className={showError ? "inputText" : "test"} value={textName} placeholder="Только кириллица" onChange={(e) => this.changeName(e)} />
                <small className={showError ? "hideErrorText" : "showErrorText"}>Введите корректное имя.</small>
            </div>
        )
    }
}

export {InputName}