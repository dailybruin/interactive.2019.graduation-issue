import React from "react";
import { css } from "emotion";
import ArticleCard from "./ArticleCard";
import { colors } from "../Shared/colors";
import { mobile } from "../Shared/mediaQueries";

export class Section extends React.Component {
    render() {
        const articles = this.props.data.content.map((article, i) => (
            <ArticleCard article={article} key={i} />
        ));

        const gridStyles =
            this.props.data.content.length > 1
                ? css`
                      display: grid;
                      grid-template-columns: repeat(
                          ${this.props.data.section === "-30-"
                              ? 5
                              : this.props.data.content.length == 2
                              ? 2
                              : 3},
                          1fr
                      );
                      grid-gap: 20px;
                      padding-left: 2em;
                      padding-right: 2em;
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
                id={this.props.data.section}
                className={css`
                    text-align: center;
                `}
            >
                <h2
                    className={css`
                        font-size: 4rem;
                        color: ${colors.slate};
                        text-transform: uppercase;
                        margin-bottom: 0.4em;

                        ${mobile} {
                            font-size: ${this.props.data.section.length > 10
                                ? "3rem"
                                : "4rem"};
                        }
                    `}
                >
                    {this.props.data.section}
                </h2>
                {this.props.data.blurb ? (
                    <p
                        className={css`
                            color: ${colors.slate};
                            font-size: 1.2em;
                        `}
                    >
                        {this.props.data.blurb}
                    </p>
                ) : null}
                <div className={gridStyles}>{articles}</div>
            </div>
        );
    }
}
