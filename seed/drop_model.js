function dropModelCollection( { modelName, collection} ) {
  return collection.countDocuments().then( count => {
    console.log(`dropping ${modelName}'s existing collection`);
    if(count > 0) {
      return collection.drop();
    } else {
      console.log(`${modelName}'s collection is empty, no need to drop`);
      return Promise.resolve();
    }
  })
}

module.exports = dropModelCollection;
