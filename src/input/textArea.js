import React from "react";

class TextArea extends React.Component
{
    constructor()
    {
        super();
        this.state =
            {
                textComment: ''
            };
    }


    changeComment = (e) =>
    {
        this.setState({textComment: e.target.value});
    };


    render()
    {
        const {textComment} = this.state;

        return (
            <div className="containerComponent containerInputComment">
                <label>Комментарий</label>
                <textarea value={textComment} onChange={(e) => this.changeComment(e)}> </textarea>
            </div>
        )
    }
}

export {TextArea}