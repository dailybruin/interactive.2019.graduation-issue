import React from "react";
import { css } from "emotion";
import { colors } from "../Shared/colors";

export class ArticleGrid extends React.Component {
    render() {
        return (
            <div className={css`
                background-color: ${colors.yellow};
                width: 100vw;
                height: 90vh;
            `}>
                <h1 className={css`
                    font-weight: 900;
                    text-transform: lowercase;
                    color: white;
                    text-align: center;
                    font-size: 4.38rem;
                    margin: 0;
                `}>graduation issue</h1>
            </div>
        )
    }
}
