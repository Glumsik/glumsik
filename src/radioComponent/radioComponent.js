import React from "react";

class RadioComponent extends React.Component
{
    checkBoxSelected = (e) =>
    {
        if(e.target.value === 'radio-1')
        {
            this.props.stateMarkers('radio-1')
        }
        else if(e.target.value === 'radio-2')
        {
            this.props.stateMarkers('radio-2')
        }
    };


    render()
    {
        return (
            <div className="radioComponentInner">
                <div className="radioComponent">
                    <input type='radio'  value='radio-1'
                           checked={this.props.checkBoxSelected === 'radio-1'} onChange={(e) => this.checkBoxSelected(e)} />
                    <small className="addressPickup">ул. Юности, 5, Зеленоград, Москва, 124482</small>
                </div>
                <div className="radioComponent">
                    <input type='radio'  value='radio-2'
                           checked={this.props.checkBoxSelected === 'radio-2'} onChange={(e) => this.checkBoxSelected(e)} />
                    <small className="addressPickup">корпус 1549, Зеленоград, Москва, 124683</small>
                </div>
            </div>
        )
    }
}

export {RadioComponent}