const client=require('./db.js')


async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      const result=await client.db("sdata").collection("form").insertOne({_id:1236,hi:"hello"})
      console.log(result)
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);