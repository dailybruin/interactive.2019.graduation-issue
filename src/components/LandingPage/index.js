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
                    background-image: url(http://4bp.blogspot.com/-zsg43eWUe_E/UUv7k-nZ_aI/AAAAAAAAAPs/5OKaXms0zOs/s1600/copy.JPG);

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
