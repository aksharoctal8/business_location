import express from 'express'
import db from './App/Database/db.js'
import router from './App/controllers/_router.js'
import CollectionModels from './App/models/EloquentCollection.js'
const app = express();
// app.use(express.urlencoded())
app.use(express.json());
db();
router(app);
CollectionModels();


app.listen(3000, () => {
    console.log('connected');
})