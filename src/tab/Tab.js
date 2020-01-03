import React from "react";

class Tab extends React.Component
{
    render()
    {
        return (
            <div className={this.props.showTab ? "showTab tab" : "hideTab tab"} onClick={this.props.click}>{this.props.nameTab}</div>
        );
    }
}

export {Tab}