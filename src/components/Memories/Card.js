import React from "react";
import { css } from "emotion";
import { colors } from "../Shared/colors";

export function Card({ text }) {
    return (
        <div
            className={css`
                background-color: white;
                margin-bottom: 1.2em;
            `}
        >
            <div
                className={css`
                    background-color: ${colors.slate};
                `}
            >
                <h3
                    className={css`
                        text-transform: uppercase;
                        padding: 0.3em 0.5em;
                        margin: 0;
                        color: white;
                    `}
                >
                    I remember...
                </h3>
            </div>
            <div
                className={css`
                    display: flex;
                `}
            >
                <p
                    className={css`
                        padding-left: 0.5em;
                        line-height: 1.9;
                    `}
                >
                    {text}
                </p>
            </div>
        </div>
    );
}
