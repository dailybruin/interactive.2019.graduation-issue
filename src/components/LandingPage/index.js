import React from "react";
import { css } from "emotion";

export class LandingPage extends React.Component {
    render() {
        return (
            <div
                className={css`
                    position: fixed;
                    z-index: 1001;
                    width: 100vw;
                    height: 100vh;
                    top: 0;
                    left: 0;

                    animation-name: fade-out;
                    animation-delay: 10.2s;
                    animation-duration: 800ms;
                    animation-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
                    animation-fill-mode: forwards;
                    will-change: opacity;

                    :after {
                        content: "\A";
                        position: absolute;
                        width: 100vw;
                        height: 100vh;
                        top: 0;
                        left: 0;
                        opacity: 0;
                        background: linear-gradient(
                            to bottom,
                            rgba(0, 0, 0, 0),
                            rgba(0, 0, 0, 0.4) 95% 100%
                        );
                        animation-name: fade-in;
                        animation-delay: 10s;
                        animation-duration: 800ms;
                        animation-fill-mode: forwards;
                        will-change: opacity;
                    }
                `}
                id="LandingPage"
            >
                <video
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    playsInline={true}
                    className={css`
                        height: 100%;
                        width: 133.333333333; /* 100 * 1600 / 1200 */
                        min-width: 100%;
                        min-height: 75vw; /* 100 * 1200 / 1600 */

                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                    `}
                >
                    <source
                        src={require("../../assets/video.mp4")}
                        type="video/mp4"
                    />
                </video>
            </div>
        );
    }
}
