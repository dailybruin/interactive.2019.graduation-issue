import React from "react";
import { connect } from "react-redux";
import { Card } from "./Card";

class Memories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: []
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.location != prevProps.location) {
            fetch(
                `https://gradissue2019.backend.dailybruin.com/${
                    this.props.location
                }`
            )
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        loading: false,
                        data
                    });
                })
                .catch(err => {
                    this.setState({
                        loading: false
                    });
                });
        }
    }

    render() {
        if (this.state.loading) {
            return null;
        }
        return this.state.data.map(x => <Card text={x.text} />);
    }
}

const mapStateToProps = state => ({
    location: state.location
});

export default connect(mapStateToProps)(Memories);
