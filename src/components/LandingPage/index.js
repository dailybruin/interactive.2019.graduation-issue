import React from "react";
import { css } from "emotion";

export class LandingPage extends React.Component {
    render() {
        return (
            <div
                className={css`
                    display: block;
                    position: absolute;
                    width: 100%;
                    height: 100%;

                    // TODO: Replace image with PhotoIllo
                    background-image: url(https://upload.wikimedia.org/wikipedia/commons/8/8e/Royce_Hall%2C_University_of_California%2C_Los_Angeles_%2823-09-2003%29.jpg);

                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                `}
                id="LandingPage"
            >
                <div
                    className={css`
                        height: 100%;
                        width: 100%;
                        display: table;
                        background: rgba(0, 0, 0, 0.4);
                    `}
                >
                    <div
                        className={css`
                            vertical-align: middle;
                            height: 100%;
                            display: table-cell;

                            color: white;
                            font-family: Source Sans Pro;
                            font-style: normal;
                            font-weight: 900;
                            text-align: center;
                            line-height: 100%;
                        `}
                    >
                        <p
                            className={css`
                                font-size: 2.5vw;
                                letter-spacing: 0.2em;
                                margin: 0;
                                line-height: normal;
                            `}
                        >
                            THE DAILY BRUIN
                        </p>
                        <p
                            className={css`
                                font-size: 8vw;
                                margin: 0;
                                line-height: normal;
                            `}
                        >
                            graduation issue
                        </p>
                        <p
                            className={css`
                                font-size: 2.5vw;
                                letter-spacing: 0.2em;
                                margin: 0;
                                line-height: normal;
                            `}
                        >
                            2019
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
