import React from "react";
import { css } from "emotion";
import ArticleCard from "./ArticleCard";
import { colors } from "../Shared/colors";

export class Section extends React.Component {
    render() {
        console.log(this.props.data);
        const articles = this.props.data.content.map((article, i) => (
            <ArticleCard article={article} key={i} />
        ));

        const gridStyles =
            this.props.data.content.length > 1
                ? css`
                      display: grid;
                      grid-template-columns: repeat(
                          ${this.props.data.content.length == 2 ? 2 : 3},
                          1fr
                      );
                      grid-gap: 20px;
                      @media (max-width: 900px) {
                          grid-template-columns: repeat(2, 1fr);
                      }
                      @media (max-width: 700px) {
                          grid-template-columns: 1fr;
                      }
                  `
                : null;

        return (
            <div
                className={css`
                    text-align: center;
                `}
            >
                <h2
                    className={css`
                        font-size: ${this.props.data.section.length > 10
                            ? "3rem"
                            : "4rem"};
                        color: ${colors.slate};
                        text-transform: uppercase;
                        margin-bottom: 0.4em;
                    `}
                >
                    {this.props.data.section}
                </h2>
                <div className={gridStyles}>{articles}</div>
            </div>
        );
    }
}
