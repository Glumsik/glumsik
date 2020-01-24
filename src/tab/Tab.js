import React from "react";

class Tab extends React.Component
{
    render()
    {
        return (
            <li className={this.props.showTab ? "showTab "+this.props.classNameTab+'' : "hideTab "+this.props.classNameTab+'' } onClick={this.props.click}>{this.props.nameTab}</li>
        );
    }
}

export {Tab}