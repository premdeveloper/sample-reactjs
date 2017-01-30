import Datastore from 'nedb';

var db=new Datastore();
db.insert({email:'admin@admin.com',password:'admin'})
export default db;