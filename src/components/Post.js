import React, { 
    Component, 
    // Suspense 
} from 'react';
import { connect } from 'react-redux';
import PostContainer from './PostContainer';
import { postComment, readPost } from '../store/actions';

function mapStateToProps(state) {
    return {
        readPost: state.readingPost,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    return {
        readPostDispatch: id => { dispatch(readPost(id)) }
    }
}

// const PostC = React.lazy(() => import('./PostContainer'));

class Post extends Component {

    constructor(props) {
        super(props);
        this.state = { commentBody: {
            postId: this.props.readPost.id,
            body: ""
        }}
        
        this.valueHandler = this.valueHandler.bind(this);
        this.buttonHandler = this.buttonHandler.bind(this);
    }

    valueHandler(e) {
        this.setState({valueError: false});
        this.setState({
            commentBody: {
                ...this.state.commentBody,
                postId: this.props.readPost.id,
                body: e.target.value
            },
            value: e.target.value
        });
    }

    buttonHandler() {
        if (this.state.value) {
            postComment(this.state.commentBody, this.props.readPostDispatch(this.state.commentBody.postId));
            this.props.readPostDispatch(this.state.commentBody.postId);
            this.setState({
                commentBody: {
                    ...this.state.commentBody,
                    body: ""
                },
                value: ''
            })
        } else {
            this.setState({valueError: true});
        }
    }

    render() {
        return (
            // <Suspense fallback={<div>Loading, please wait!</div>}>
            //     <PostC
            //         error={this.state.valueError}
            //         value={this.state.value}
            //         buttonHandler={this.buttonHandler}
            //         valueHandler={this.valueHandler}
            //         comments={this.props.comments} 
            //         data={this.props.readPost} />
            // </Suspense>
                <PostContainer
                    error={this.state.valueError}
                    value={this.state.value}
                    buttonHandler={this.buttonHandler}
                    valueHandler={this.valueHandler}
                    comments={this.props.comments} 
                    data={this.props.readPost} />
        )
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Post);