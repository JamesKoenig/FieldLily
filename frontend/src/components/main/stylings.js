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
  const top = 40;
  const left = windowWidth*(2/10);

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
  const top = 40;
  const left = windowWidth*1/3
  return {
    ..._common,
    width,
    height,
    top,
    left,
    transform: `translateX(-${(windowWidth/3)-60}px)`,
  }
}

export const detatched = () => {
  return {
    ..._common,
    opacity: .75,
    transform: "translateX(-75vw)",
  }
}
