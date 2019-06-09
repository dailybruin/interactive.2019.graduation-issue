import React from "react";
import { css } from "emotion";
import { Section } from "./Section";
import { colors } from "../Shared/colors";
import { mobile, notMobile } from "../Shared/mediaQueries";

export class ArticleGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            colorswitch: false
        };
        this.listenScrollEvent = this.listenScrollEvent.bind(this);
    }

    listenScrollEvent(e) {
        if (window.scrollY > 130) {
            this.setState({ colorswitch: true });
        } else {
            this.setState({ colorswitch: false });
        }
    }

    componentWillMount() {
        if (window) {
            window.addEventListener("scroll", this.listenScrollEvent);
        }
        fetch(
            "https://kerckhoff.dailybruin.com/api/packages/flatpages/interactive.2019.gradissue/"
        )
            .then(response => response.json())
            .then(data => {
                let sections = data.data["data.aml"].sections;
                this.setState({
                    data: sections
                });
            });
    }

    render() {
        return (
            <div
                className={css`
                    background-color: ${this.state.colorswitch
                        ? "white"
                        : colors.yellow};
                    color: ${this.state.colorswitch ? colors.blue : "white"};
                    width: calc(100vw - 2em);
                    min-height: 90vh;
                    text-align: center;
                    padding: 1em;
                    transition: background-color 500ms, color 500ms;
                    -webkit-transition: background-color 500ms, color 500ms;
                `}
            >
                <h4
                    className={css`
                        text-transform: uppercase;
                        margin: 0px;
                        margin-bottom: -8px;
                    `}
                >
                    The Daily Bruin
                </h4>
                <h1
                    className={css`
                        font-weight: 900;
                        text-transform: lowercase;
                        font-size: 4.38rem;
                        margin: 0;
                        ${mobile} {
                            font-size: 11vw;
                        }
                    `}
                >
                    graduation issue
                </h1>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className={css`
                        margin-top: -20px;
                        ${mobile} {
                            display: none;
                        }
                    `}
                >
                    <path
                        d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                        fill="#fff"
                    />
                    <path fill="none" d="M0 0h24v24H0V0z" />
                </svg>
                {this.state.data.length
                    ? this.state.data.map(section => <Section data={section} />)
                    : null}
            </div>
        );
    }
}
