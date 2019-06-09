import React from "react";
import { css } from "emotion";
import { colors } from "../Shared/colors";

export function Header({ colorswitch, sections }) {
    return (
        <div
            className={css`
                position: -webkit-sticky;
                position: sticky;
                top: 0;
                background-color: ${colorswitch ? "white" : colors.yellow};
                padding-bottom: 10px;
            `}
        >
            <h4
                className={css`
                    text-transform: uppercase;
                    margin: 0px;
                    margin-bottom: -12px;
                    margin-top: 6px;
                `}
            >
                The Daily Bruin
            </h4>
            <h1
                className={css`
                    font-weight: 900;
                    text-transform: lowercase;
                    font-size: 4.1rem;
                    margin: 0;
                `}
            >
                graduation issue
            </h1>
            <nav
                className={css`
                    display: flex;
                    justify-content: space-around;
                    flex-wrap: wrap;
                    -ms-flex-pack: distribute;

                    a {
                        color: ${colorswitch ? colors.blue : "white"};
                        font-weight: bold;
                        padding-right: 2em;
                    }
                `}
            >
                <a href="#map">Memories</a>
                {sections.map(section => (
                    <a href={`#${section}`}>{section}</a>
                ))}
            </nav>
        </div>
    );
}
