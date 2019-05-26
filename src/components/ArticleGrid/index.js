import React from "react";
import { css } from 'emotion'

export class ArticleGrid extends React.Component {
    render() {
        return (
            <div className={css`
                background-color: yellow;
                width: 100vw;
                height: 90vh;
            `}>
            </div>
        )
    }
}
