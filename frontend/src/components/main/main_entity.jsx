import React, {
  useState,
  useEffect,
} from 'react';
import HabitShow from '../habits/habit_show_container';

const MainEntity = ({
  windowHeight,
  windowWidth,
  habitId,
  habit,
}) => {
  if(!habit) return null;
  const [{ top, left, height, width, transform },setDimensions ] = useState(
    Object.assign(
      {},
      document.getElementById(habitId)
        .getBoundingClientRect()
        .toJSON(),
      { transform: undefined }
    )
  );

  const [ transitionEnabled, enableTransition ] = useState(false);

  function setActiveDimensionsAfterDelay() {
    setTimeout(() => {
      const width   = windowWidth*(2/3)-180;
      const height  = windowHeight-80;
      const left    = 0;
      const top     = 40;
      setDimensions({
        width,
        height,
        top,
        left,
        transform: `translateX(${(120+windowWidth/3)}px)`,
      })
    }, 100);
  }

  useEffect(() => {
    const element = document.getElementById(habitId);
    let dimensions = element.getBoundingClientRect().toJSON();

    enableTransition(false);
    setDimensions(
      Object.assign(dimensions, {
        width: dimensions.width-60,
        left:  dimensions.left+30,
        transform: undefined,
      })
    );
    setTimeout(() => {
      enableTransition(true);
    },10);
    setActiveDimensionsAfterDelay();
  }, [habitId]);

  useEffect(() => {
    setActiveDimensionsAfterDelay();
  }, [windowHeight,windowWidth]);

  const _style = {
    position: "absolute",
    top,
    left,
    height,
    width,
    transform,
    overflow: "hidden",
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    transition: transitionEnabled ? ".75s ease-in-out" : "none",
  }
  return (
    <div id="main-entity"
         style={_style}
         onClick={e => e.stopPropagation() }>
      <HabitShow match={{params: { habitId }} } />
    </div>
   );
}

export default MainEntity;
