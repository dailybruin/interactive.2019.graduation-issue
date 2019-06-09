import React from "react";
import { css } from "emotion";
import { Section } from "./Section";
import { colors } from "../Shared/colors";

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

    componentWillUnmount() {
        // This fixes the "leaky component" error
        // Make sure to remove any event listeners you add!
        if (window) {
            window.removeEventListener("scroll", this.listenScrollEvent);
        }
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
                    border-top: 2vh solid white;
                `}
            >
                <img
                    src={
                        this.state.colorswitch
                            ? require("../../assets/chevron-blue.svg")
                            : require("../../assets/chevron.svg")
                    }
                    alt="Scroll down"
                />
                <h4
                    className={css`
                        text-transform: uppercase;
                        margin: 0px;
                        margin-bottom: -8px;
                        margin-top: 6px;
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
                    `}
                >
                    graduation issue
                </h1>
                {this.state.data.length
                    ? this.state.data.map(section => (
                          <Section key={section.section} data={section} />
                      ))
                    : null}
            </div>
        );
    }
}
