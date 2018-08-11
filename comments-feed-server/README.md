Installation and Run

Prerequisites:
- install MongoDB to some local folder (MONGO_FOLDER) (if not installed yet)
- create some folder to contain the data base (DB_FOLDER)

1. Put the files into a folder (APP_FOLDER)

2. Install dependencies:
cd APP_FOLDER
npm install

3. Run local Mongo DB instance

cd MONGO_FOLDER
mongod.exe --dbpath DB_FOLDER

4. Run the server
npm start


