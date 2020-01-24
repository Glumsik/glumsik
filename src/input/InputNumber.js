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
                numberFocus : false
            };
        this.firstRender = false;
    }


    changeNumberBlur = (e) =>
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

    

    changeNumberFocus = (e) =>
    {
        if((e.target.value.replace( /\D/g, '').length === 11))
        {
            this.setState({numberCorrect: true});
            this.firstRender = true;
        }
        else
        {
            this.firstRender = false;
        }
        this.props.checkButton(this.firstRender, 'inputNumber')
    }

       

    render()
    {
        const showError =  this.state.numberCorrect;
        
        const show = showError ? ('') : (<label htmlFor="InputNumber" className="showErrorText">Введите номер телефона</label>);

        return (
            <div className="containerInputNumber">
                    <label className="paddingLabel" htmlFor="InputNumber">Телефон</label>
                    <InputMask id="InputNumber" mask="+7 (999) 999-99-99" className="inputText" placeholder="+7 (___) ___-__-__" onChange={(e) => this.changeNumberFocus(e)} onBlur={(e) => this.changeNumberBlur(e)}/>
                    {show}
            </div>

        )
    }
}

export {InputNumber}