const resFromArr = arr =>
  Object.assign(
    {},
    ...arr.map(
      obj => ({
        [obj._id]: obj
      })
    )
  );

const resFromObj = obj => ({
  [obj._id]: obj
});

const promiseMap = (arr, promiseFn) => {
  return new Promise( (resolve, reject) => {
    res = [];

    Promise.all(arr.map( (ele,idx) => {
      return promiseFn(ele).then(result => res[idx] = result);
    }))
      .then(resolve(res))
      .catch(err => reject(err));
  })
}

module.exports = {
  resFromArr,
  resFromObj,
  promiseMap,
}
