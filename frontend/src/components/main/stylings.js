export const container = {
  height: "100vh",
  width: "100vw",
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const _common = {
  transition: ".75s ease-in-out",
}

export const dormant = (windowHeight, windowWidth) => {
  //max height leaves margins
  const height = (windowHeight - 80);
  const width  = (windowWidth - (.4*windowWidth));

  return {
    ..._common,
    position: "absolute",
    height,
    width,
  }
}

export const active = (windowHeight, windowWidth) => {
  console.log(windowHeight, windowWidth);

  return {
    ..._common,
    transform: `translateX(-${windowHeight/3}px)`,
    height: windowHeight-80,
    width: windowWidth/3,
  }
}

export const detatched = () => {
  return {
    ..._common,
    opacity: .75,
    transform: "translateX(-75vw)",
  }
}
