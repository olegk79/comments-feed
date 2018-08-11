import axios from 'axios';

/*performing the "post comment" server request using axios*/
export default (comment) => {
    console.log("post-comment", comment);

    return axios({
        method: 'POST',
        url: `/postComment`,
        json: true,
        data: comment
    })
}