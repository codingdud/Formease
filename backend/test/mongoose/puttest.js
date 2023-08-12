
const { ObjectId } = require('mongodb');
const data=require('./dbtest')


/* data.help.once('open',async () => {
    console.log('Connected to MongoDB database');
  
    try {
      // Fetch the list of collections
      const collections = await data.help.db.listCollections().toArray();
      const collectionNames = collections.map((collection) => collection.name);
  
      console.log('Collections:');
      console.log(collectionNames);
    } catch (err) {
      console.error('Error fetching collections:', err);
    }
  }) */

//getdata


  data.sdata.once('open',async()=>{
    try {
        console.log('Connected to MongoDB database2');
        const collection = data.sdata.db.collection('form');
        const queryResult = await collection.find().toArray();

        console.log('Query result:');
        console.log(queryResult);

        queryResult.forEach(element => {
          for(var key in element){
            if(key!='_id'){
            console.log(key,element[key])
            }
          }
        });
    } catch (error) {
      console.error('Error fetching collections:', err);
    }
  })

  //adddata

  /* data.sdata.once('open',async()=>{
    try {
        console.log('Connected to MongoDB database2');
        const collection = await data.sdata.db.collection('form').insertOne({_id:1236,hi:"hello"});
        

        console.log(collection);
    } catch (err) {
      console.error('Error fetching collections:', err);
    }
  })

 */
  //update

  /* data.sdata.once('open',async()=>{
    try {
        console.log('Connected to MongoDB database2');
        const update={
          $set:{
            phone: "2ggg"
          }
        }
        const collection = data.sdata.db.collection('form');
        const queryResult = await collection.updateOne({_id: new ObjectId('64b7e1d25d972a7eecfe8ce7')},update)

        console.log('Query result:');
        console.log(queryResult);

    } catch (err) {
      console.error('Error fetching collections:', err);

    }
  }) */



/*   data.sdata.once('open',async()=>{
    try {
        console.log('Connected to MongoDB database2');
        const update={
          $set:{
            phone: "22222"
          }
        }
        const collection = data.sdata.db.collection('form');
        const queryResult = await collection.deleteOne({_id:"abcd"})

        console.log('Query result:');
        console.log(queryResult);

    } catch (err) {
      console.error('Error fetching collections:', err);

    }
  })
   */
