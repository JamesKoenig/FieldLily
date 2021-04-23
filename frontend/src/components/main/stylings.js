export const container = {
  height: "100vh",
  width: "100vw",
  position: "fixed",
}

const _common = {
  transition: ".75s ease-in-out",
  position: "absolute",
}

export const dormant = (windowHeight, windowWidth) => {
  //max height leaves margins
  const height = (windowHeight - 80);
  const width  = (windowWidth - (.4*windowWidth));
  const top = (windowHeight - height)/2;
  const left = (windowWidth - width)/2;

  return {
    ..._common,
    height,
    width,
    top,
    left,
  }
}

export const active = (windowHeight, windowWidth) => {
  const width = windowWidth/3;
  const height = windowHeight-80;
  const top = (windowHeight - height)/2;
  const left = (windowWidth - width)/2;
  console.log([width,height,top,left]);
  return {
    ..._common,
    width,
    height,
    top,
    left,
    transform: `translateX(-${windowWidth/(3.25)}px)`,
  }
}

export const detatched = () => {
  return {
    ..._common,
    opacity: .75,
    transform: "translateX(-75vw)",
  }
}
