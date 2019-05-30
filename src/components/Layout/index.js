import React from "react";
import { css } from 'emotion';
import { mobile } from "../Shared/mediaQueries";
import { MyMap } from "../Map";

export class Layout extends React.Component {
    render() {
        return (
            <div className={css`
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                width: 100vw;
                height: 90vh;

                ${mobile} {
                    flex-direction: column-reverse;
                }
            `}>
                <div className={css`
                    flex-grow: 3;
                `}>
                    <MyMap />
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
