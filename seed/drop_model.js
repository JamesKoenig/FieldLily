function dropModelCollection(Model) {
  const { modelName } = Model;
  return Model.find().then( results => {
    console.log(`dropping ${modelName}'s existing collection`);
    if(results.length > 0) {
      return Model.collection.drop();
    } else {
      console.log(`${modelName}'s collection is empty, no need to drop`);
      return Promise.resolve();
    }
  })
}

module.exports = dropModelCollection;
