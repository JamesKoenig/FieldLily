export const RECEIVE_WINDOW_SIZE = "RECEIVE_WINDOW_SIZE";

export const receiveWindowSize = (height,width) => ({
  type: RECEIVE_WINDOW_SIZE,
  dimensions: { height, width },
});

export const handleWindowResize = () => dispatch => {
  const {
    innerHeight: height,
    innerWidth: width,
  } = window;

  return dispatch(receiveWindowSize(height,width));
}
