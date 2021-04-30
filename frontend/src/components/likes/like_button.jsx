import React, {
  useEffect,
}from 'react';

const LikeButton = ({
  liked,
  fetchEntityLikeStatus,
  likeEntity,
  unLikeEntity,
}) => {
  useEffect(() => {
    fetchEntityLikeStatus();
  }, []);

  /* this function is recreated when its parent function (the render method
    * is called) */
  const onlyOnce = callback => {
    let blocked = false;
    const wrapped = (...args) => {
      if(!blocked) {
        blocked = true;
        return callback(...args);
      }
    }
    return wrapped;
  }

  const onClick = onlyOnce( () => {
    if(liked) {
      unLikeEntity();
    } else {
      likeEntity();
    }
  });

  return (
    <button onClick={onClick}>
      { liked ? "unlike" : "like" }
    </button>
  )
}

export default LikeButton;
