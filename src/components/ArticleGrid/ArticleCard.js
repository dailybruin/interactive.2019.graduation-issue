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
                    className={css`
                        max-width: 100%;
                    `}
                    src={article.image}
                    alt={article.imagedescription}
                />
                <h3 className="headline">
                    {article.italics ? (
                        <em>{article.headline}</em>
                    ) : (
                        article.headline
                    )}
                </h3>
                <div
                    className={css`
                        text-transform: uppercase;
                    `}
                >
                    By {article.author}
                </div>
            </a>
        </article>
    );
}
