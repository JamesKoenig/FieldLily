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

module.exports = {
  resFromArr,
  resFromObj,
}
