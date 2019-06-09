import React from "react";
import { css } from "emotion";
import { colors } from "../Shared/colors";

export default function ArticleCard({ article }) {
    return (
        <article
            className={css`
                border: 6px solid ${colors.blue};
                background-color: ${colors.fills.blue};
                padding: 0.7em;
            `}
        >
            <a
                href={article.link}
                className={css`
                    color: ${colors.slate};
                    text-decoration: none;
                    width: 100%;
                `}
            >
                <img
                    src={article.image}
                    className={css`
                        object-fit: cover;
                        width: 100%;
                        height: 250px;
                    `}
                />
                <h3 className="headline">
                    {article.italics ? (
                        <em>{article.headline}</em>
                    ) : (
                        article.headline
                    )}
                </h3>
                {article.author ? (
                    <div
                        className={css`
                            text-transform: uppercase;
                        `}
                    >
                        By {article.author}
                    </div>
                ) : null}
            </a>
        </article>
    );
}
