const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = "mongodb://localhost:27017/";

// Database Name
const dbName = "commentsfeedapp";

const commentsCollection = "comments";

module.exports = class MongoAdapter {

    constructor() {
        this._client = null;
    }

    _getMongoClient() {
        return MongoClient.connect(url)
            .then(client => {
                this._client = client;
            });
    }

   
    _closeMongoClient() {
        if (this._client) {
            this._client.close();
        }
    }

    // insert new comment into DB
    insertComment(comment) {
        let result = {
            success: true
        };
        return this._getMongoClient()
            .then(() => this._client.db(dbName))
            .then(db => db.collection(commentsCollection))
            .then(coll => coll.insertOne(comment))
            .then(() => {
                this._closeMongoClient();
                return result;
                
            })
            .catch(e => {
                result.e = e;
                result.success = false;
                this._closeMongoClient();
                return result;
            })    
    }

    // fetch all comments from DB
    fetchAllComments() {
        let result = {
            success: true,
            comments: null
        };
        return this._getMongoClient()
            .then(() => this._client.db(dbName))
            .then(db => db.collection(commentsCollection))
            .then(coll => coll.find({}).toArray())
            .then(comments => {
                result.comments = comments;
                this._closeMongoClient();
                return result;

            })
            .catch(e => {
                result.e = e;
                result.success = false;
                this._closeMongoClient();
                return result;
            })  
    }

}