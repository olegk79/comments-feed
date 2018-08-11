import React from "react";
import RaisedButton from "material-ui/RaisedButton";
//import TextField from "material-ui/TextField";
import CircularProgress from 'material-ui/CircularProgress';

export default ({
    message,
    email,
    onMessageChange,
    onEmailChange,
    onSubmitClick,
    commentIsBeingPosted,
errorMessage
}) => {
    
    const style = {
    outerDiv: {
        backgroundColor:"rgb(239, 234, 234)",
        width: 400, 
        height: 220
        },
        txtEmail: {
        marginTop: 20, 
            marginLeft: 20, 
            borderColor: "grey", 
            height: 35, 
            width: 350
        },
        txtMessage: {
        marginTop: 10,
            marginLeft: 20, 
            borderColor: "grey", 
            height: 60, 
            width: 350
        },
        btnSubmit: {
        height: 35, 
            width: 60,
            marginRight: 25,
            marginTop:10,
            fontWeight:"bold"
        }
    }


    return <div style={style.outerDiv}>
        
        
        <textarea style={style.txtEmail} value={email} onChange={onEmailChange} placeholder="Email"/><br />
        <textarea style={style.txtMessage} value={message} onChange={onMessageChange} placeholder="Message"/> <br />
        <div style={{float:"right"}}>
            {
            commentIsBeingPosted === false ? <RaisedButton style={style.btnSubmit} label="Submit" onClick={onSubmitClick} primary={true} /> :
                <CircularProgress />
        }
            </div>
        
        {
            errorMessage !== "" ? <div><label style={{ color: "red" }}>{errorMessage}</label></div> : null
        }
        
    </div>;
}