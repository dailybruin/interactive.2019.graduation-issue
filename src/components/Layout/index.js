import React from "react";
import { css } from 'emotion'

export class Layout extends React.Component {
    render() {
        return (
            <div className={css`
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                width: 100vw;
                height: 90vh;
            `}>
                <div className={css`
                    flex-grow: 3;
                    background-color: red;
                `}>

                </div>
                <div className={css`
                    flex-grow: 1;
                    background-color: blue;
                `}>

                </div>
            </div>
        )
    }
}
