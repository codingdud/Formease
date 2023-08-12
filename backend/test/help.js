mongoose.help.on('connected', async() => {
    console.log('connected to mongodb');
    const collections =await mongoose.listCollections().toArray();
          console.log("help",collections)
  });
  mongoose.help.once('open', () => {
    console.log('Connected to MongoDB database');
  });
  
  mongoose.help.on('disconnected', () => {
    console.log('connection disconnected');
  }); 