import React from "react";
import { connect } from "react-redux";
import { css } from 'emotion';
import { mobile, notMobile } from "../Shared/mediaQueries";
import MyMap from "../Map";
import { colors } from "../Shared/colors";


class MemoryModal extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            memoryText: "",
        }

        this.addToMap = this.addToMap.bind(this);
        this.memoryTextChange = this.memoryTextChange.bind(this);
    }

    addToMap() {
        const { memoryText } = this.state;
        if (memoryText == "")
            return;
        console.log("adding to map...")
        console.log(this.props.location)
        console.log(this.state.memoryText)
    }

    memoryTextChange(event) {
        this.setState({memoryText: event.target.value})
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
                box-shadow: 10px 10px 5px grey;
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
                    position: relative;
                    height: 40px;
                `}>
                    I Remember...
                    <div onClick={this.props.removeModal} className={css`
                        position: absolute;
                        right: 10px;
                        top: 5px;
                        color: white;
                        cursor: pointer;
                        &:hover {
                            text-shadow: 2px 2px 1px grey;
                        }
                    `}>
                        x
                    </div>
                </div>
                <div className={css`
                    font-weight: 400;
                    text-align: left;
                    font-size: 1.3rem;
                    padding: 5px;
                    padding-left: 15px;
                    height: calc(100% - 150px);
                `}>
                    <div className={css`margin-bottom: 10px;`}>
                        <strong>Location: </strong> {this.props.location}
                    </div>
                    <div className={css`height: 100%; width: 100%;`}>
                        <textarea type="text" onChange={this.memoryTextChange} className={css`
                            height: 100%;
                            width: 90%;
                            outline: none;
                            text-align: top;
                            font-family: 'Times New Roman', Times, serif;
                        `}>

                        </textarea>
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
