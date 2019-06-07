import React from "react";
import { css } from "emotion";

export function Card({ text }) {
    return (
        <div>
            <div>
                <h3
                    className={css`
                        text-transform: uppercase;
                    `}
                >
                    I remember...
                </h3>
            </div>
            <div>
                <p>{text}</p>
            </div>
        </div>
    );
}
