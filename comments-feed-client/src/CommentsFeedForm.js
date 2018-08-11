import React, { Component } from 'react';
import { connect } from "react-redux";
import validator from "validator";

// my components
import SubmitForm from "./SubmitForm";
import CommentsList from "./CommentsList";
import Filter from "./Filter";
import CircularProgress from 'material-ui/CircularProgress';


// actions
import * as commentsFeedActions from "./actions/commentsFeedActions";
import * as commentActions from "./actions/commentActions";


//State Selectors
import {
    getComments,
    getCommentsIsFetching,
    getPostingNewCommentState
} from "./reducers";

class CommentsFeedForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "",
            email: "",
            filterText: "",
            errorMessage: ""
        };
    }

    componentDidMount() {
        //console.log("fetching comments");
        this.props.fetchComments();
    }

    componentWillUnmount() {
        this.props.clearComments();
    }

    onTextFieldChange(event, stateProp) {
        this.setState({
            [stateProp]: event.target.value,
            errorMessage: ""
        });
    }



    // handler of Submit click
    onSubmitClick() {
        //console.log("SUBMIT!");

        const { email, message } = this.state;

        if (email === "" && message === "") {
            this.setState({
                errorMessage: "Please input email and message"
            });
            return;
        }
        if (email === "") {
            this.setState({
                errorMessage: "Please input email"
            });
            return;
        }
        if (message === "") {
            this.setState({
                errorMessage: "Please input message"
            });
            return;
        }
        //validate email
        let emailIsValid = validator.isEmail(email);
        if (emailIsValid === false) {
            this.setState({
                errorMessage: "Email is invalid"
            });
            return;
        }

        // input is OK! submit
        this.setState({
            errorMessage: ""
        });


        let comment = {
            email: this.state.email,
            message: this.state.message
        };
        //console.log("submit comment", comment);

        //*******
        //return;
        //**********

        this.props.postNewComment(comment);
    }




    render() {

        const { message, email, filterText, errorMessage } = this.state;
        const {
            commentsIsFetching,
            commentsList,
            commentIsBeingPosted
        } = this.props;

        // filter the comments list if filter text box is not empty
        let filteredCommentsList = commentsList;
        if (filterText !== "") {
            let loweredFilterText = filterText.trim().toLowerCase();
            filteredCommentsList = filteredCommentsList.filter(comment => comment.email.toLowerCase().includes(loweredFilterText));
        }


        return (


            commentsIsFetching === false ?
                <div style={{ marginLeft: 20, marginTop: 20 }}>
                    <SubmitForm message={message}
                        email={email}
                        onMessageChange={(event) => this.onTextFieldChange(event, "message")}
                        onEmailChange={(event) => this.onTextFieldChange(event, "email")}
                        onSubmitClick={() => this.onSubmitClick()}
                        commentIsBeingPosted={commentIsBeingPosted}
                        errorMessage={errorMessage}

                    />
                    <Filter filterText={filterText} onFilterTextChange={(event) => this.onTextFieldChange(event, "filterText")} />
                    <CommentsList commentsList={filteredCommentsList} />


                </div> :
                <div><CircularProgress /></div>

        );
    }
}


const mapStateToProps = state => ({
    commentsList: getComments(state),
    commentsIsFetching: getCommentsIsFetching(state),
    commentIsBeingPosted: getPostingNewCommentState(state)
});

export default connect(mapStateToProps, {
    ...commentsFeedActions,
    ...commentActions
})(CommentsFeedForm);
