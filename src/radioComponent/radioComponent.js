import React from "react";

class RadioComponent extends React.Component
{
    checkBoxSelectedInput = (e) =>
    {
        this.check(e.target.value);
    };


    checkBoxSelected = (value) =>
    {
        this.check(value);
    };


    check = (value) =>
    {
        if(value === 'radio-1')
        {
            this.props.stateMarkers('radio-1')
        }
        else if(value === 'radio-2')
        {
            this.props.stateMarkers('radio-2')
        }
    };


    render()
    {
        return (
            <div className="radioComponentOuter">
                <div className="radioComponent">
                    <input type='radio'  value='radio-1'
                           checked={this.props.checkBoxSelected === 'radio-1'} onChange={(e) => this.checkBoxSelectedInput(e)} />
                    <small onClick={(e) => this.checkBoxSelected('radio-1')} className="addressPickup">ул. Юности, 5, Зеленоград, Москва, 124482</small>
                </div>
                <div className="radioComponent">
                    <input type='radio'  value='radio-2'
                           checked={this.props.checkBoxSelected === 'radio-2'} onChange={(e) => this.checkBoxSelectedInput(e)} />
                    <small onClick={(e) => this.checkBoxSelected('radio-2')} className="addressPickup">корпус 1549, Зеленоград, Москва, 124683</small>
                </div>
            </div>
        )
    }
}

export {RadioComponent}