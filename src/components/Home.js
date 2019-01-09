import React, { Component } from 'react';
import HomeContainer from './HomeContainer';
import { connect } from 'react-redux';
import { getItems, addPost } from '../store/actions';

function mapStateToProps(state) {
    return {
        data: state.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getItems: () => { dispatch(getItems()) }
    }
}

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            errorValue: false,
            titleValue: '',
            bodyValue: '',
            postBody: {
                title: '',
                body: ''
            }
        }

        this.bodyHandler = this.bodyHandler.bind(this);
        this.titleHandler = this.titleHandler.bind(this);
        this.buttonHandler = this.buttonHandler.bind(this);
    }

    titleHandler(e) {
        this.setState({
            valueError: false,
            titleValue: e.target.value,
            postBody: {
                ...this.state.postBody,
                title: e.target.value
            }
        });
    }

    bodyHandler(e) {
        this.setState({
            valueError: false,
            bodyValue: e.target.value,
            postBody: {
                ...this.state.postBody,
                body: e.target.value
            }
        });
    }

    buttonHandler() {
        if (this.state.postBody.title && this.state.postBody.body) {
            addPost(this.state.postBody, this.props.getItems());
            this.props.getItems();
            this.setState({
                postBody: {
                    ...this.state.commentBody,
                    body: ""
                },
                titleValue: '',
                bodyValue: ''
            })
        } else {
            this.setState({valueError: true});
        }
    }

    componentWillMount() { this.props.getItems() }

    render() {
        return <HomeContainer
                    titleValue={this.state.titleValue}
                    bodyValue={this.state.bodyValue}
                    error={this.state.valueError}
                    buttonHandler={this.buttonHandler}
                    titleHandler={this.titleHandler}
                    bodyHandler={this.bodyHandler}
                    data={this.props.data} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);