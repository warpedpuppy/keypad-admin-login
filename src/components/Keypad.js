import React from 'react';
import Button from 'react-bootstrap/Button'

export default function Keypad (props) {
    const buttons = Array.from(Array(9).keys()).map((item) => {
        const buttonNum = item + 1
        return <span onMouseDown={props.buttonClicked} key={buttonNum}>{buttonNum}</span>
      })
    return (
        <div className="keyPad">
            <div>
            {buttons}
            </div>
            <div><Button onClick={props.submitCode}>submit code</Button></div>
            <div>{props.codeEnter}</div>
            <div className="feedback">{props.codeFeedback}</div>
      </div>
    )
}