export const RECEIVE_DISPLAY_UPDATE = "RECEIVE_DISPLAY_UPDATE";

export const receiveDisplayUpdate = stateUpdate => ({
  type: RECEIVE_DISPLAY_UPDATE,
  newState: stateUpdate,
})

export const receiveWindowSize = (height,width) =>
  receiveDisplayUpdate({height, width});

export const detatchMain = () =>
  receiveDisplayUpdate({
    mainStatus: "detatched",
    activeElement: undefined,
  });

export const putMainToSleep = () =>
  receiveDisplayUpdate({
    mainStatus: "dormant",
    activeElement: undefined,
  });

export const receiveActiveElement = activeElement =>
  receiveDisplayUpdate({
    mainStatus: "active",
    activeElement,
  });

export const handleWindowResize = () => dispatch => {
  const {
    innerHeight: height,
    innerWidth: width,
  } = window;

  return dispatch(receiveWindowSize(height,width));
}
