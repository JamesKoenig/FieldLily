import React, {
  useState,
} from 'react';

const MainEntity = ({
  habit,
}) => {
  if(!habit) return null;
  const [{ top, left, height, width}] = useState(
    document.getElementById(habit._id)
      .getBoundingClientRect()
      .toJSON()
  );

  const _style = {
    position: "absolute",
    top,
    left,
    height,
    width,
    backgroundColor: "blue",
    transition: ".75s ease-in-out",
  }
  console.log(_style);
  return (
    <div style={_style}>
      <p>{habit.title}</p>
    </div>
   );
}

export default MainEntity;
