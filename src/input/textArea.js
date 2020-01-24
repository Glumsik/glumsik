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
            <div className="containerInputComment">
                <label className="paddingLabel" htmlFor="InputComment">Комментарий</label>
                <textarea id="InputComment" className="textArea" value={textComment} onChange={(e) => this.changeComment(e)}> </textarea>
            </div>
        )
    }
}

export {TextArea}