import axios from 'axios';

/*performing the "fetch comments" server request using axios*/
export default () => {
    return axios({
        method: 'GET',
        url: `/fetchComments`,
        json: true
    })
}