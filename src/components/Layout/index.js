import React from "react";
import { connect } from "react-redux";
import { css } from 'emotion';
import { mobile, notMobile } from "../Shared/mediaQueries";
import MyMap from "../Map";
import { colors } from "../Shared/colors";

class Layout extends React.Component {
    render() {
        return (
            <div className={css`
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                width: 100vw;
                height: 90vh;

                ${mobile} {
                    flex-direction: column-reverse;
                }
            `}>
                <div className={css`
                    flex-grow: 3;
                    flex-basis: 0;
                `}>
                    <MyMap />
                </div>
                <div className={css`
                    flex-grow: 1;
                    flex-basis: 0;
                    padding: 2rem;
                    background-color: ${colors.blue};
                    ${notMobile} {
                        max-width: 33.333%;
                    }
                `}>
                    <h1 className={css`
                        font-weight: 900;
                        text-transform: uppercase;
                        color: white;
                        text-align: center;
                        font-size: 3.13rem;
                        margin: 0;
                    `}>Memories</h1>
                    <p className={css`
                        color: white;
                        font-weight: 600;
                        font-size: 1rem;
                        text-align: center;
                        line-height: 1.9;
                        margin: 0;

                        ${mobile} {
                            display: none;
                        }
                    `}>Explainer for the interactive scrapbook. This panel is vertically scrollable and location specific. Clicking on a paw print prompts the input box and switches out these posts for those in that location.</p>
                    <h3 className={css`
                        color: white;
                        font-weight: 900;
                        font-size: 1.25rem;
                        text-align: center;
                        text-transform: uppercase;
                    `}>{this.props.location ? `Location: ${this.props.location}` : "Click a paw to see or add some memories!"}</h3>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    location: state.location
})

export default connect(mapStateToProps)(Layout);
