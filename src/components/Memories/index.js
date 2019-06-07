import React from "react";
import { connect } from "react-redux";

class Memories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: []
        };
    }

    componentWillMount() {
        fetch(
            `https://gradissue2019.backend.dailybruin.com/${
                this.props.location
            }`
        )
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    loading: false,
                    data
                });
            });
    }

    render() {
        if (this.state.loading) {
            return null;
        }
        return <div />;
    }
}

const mapStateToProps = state => ({
    location: state.location
});

export default connect(mapStateToProps)(Memories);
