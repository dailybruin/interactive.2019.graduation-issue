import React from "react";
import { css } from "emotion";
import { colors } from "../Shared/colors";

export default function StoryCard(content) {
    return (
        <article
            className={css`
                border: 6px solid ${colors.blue};
                background-color: ${colors.fills.blue};
                padding: 0.7em;
            `}
        >
            <a
                href={content.link}
                className={css`
                    color: ${colors.slate};
                    text-decoration: none;
                    width: 100%;
                `}
            >
                <img src={content.imageurl} alt={content.imagedescription} />
                <h3 className="headline">
                    {content.italics ? (
                        <em>{content.headline}</em>
                    ) : (
                        content.headline
                    )}
                </h3>
                <div
                    className={css`
                        text-transform: uppercase;
                    `}
                >
                    By {content.byline}
                </div>
            </a>
        </article>
    );
}
