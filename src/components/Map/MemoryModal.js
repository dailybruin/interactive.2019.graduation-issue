import React from "react";
import { connect } from "react-redux";
import { css } from 'emotion';
import { mobile, notMobile } from "../Shared/mediaQueries";
import MyMap from "../Map";
import { colors } from "../Shared/colors";

class MemoryModal extends React.Component {
    addToMap() {
        console.log("adding to map...")
    }

    render() {
        return (
            <div className={css`
                height: 50%;
                width: 55%;
                background-color: white;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                z-index: 500; 
            `}>
                <div className={css`
                    background-color: ${ colors.blue };
                    font-weight: 900;
                    text-transform: uppercase;
                    color: white;
                    text-align: left;
                    font-size: 2rem;
                    padding: 5px;
                    padding-left: 15px;
                `}>
                    I Remember...
                </div>
                <div className={css`
                    font-weight: 400;
                    text-align: left;
                    font-size: 2rem;
                    padding: 5px;
                    padding-left: 15px;
                `}>
                    <div>
                        <strong>Location: </strong> {this.props.location}
                    </div>
                    <div>
                        <input type="text" className={css`
                            height: 30%;
                        `}>

                        </input>
                    </div>
                    <div onClick={ this.addToMap } className={css`
                        cursor: pointer;
                        text-transform: uppercase;
                        position: absolute;
                        color: ${ colors.gray };
                        &:hover {
                            color: black;
                        }
                        bottom: 0;
                        right: 0;
                        margin: 10px;
                        font-weight: 900;
                        text-align: left;
                        font-size: 1rem;
                        padding: 5px;
                        padding-left: 15px;
                    `}>
                        Add to Map
                    </div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    location: state.location
})

export default connect(mapStateToProps)(MemoryModal);
