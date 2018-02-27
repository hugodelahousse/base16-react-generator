import React from 'react';
import PropTypes from 'prop-types';




const inputStyle = {
  position: 'absolute',
  display: 'block',
  width: '100%',
  height: '100%',
  opacity: 0,
};

export function Color({name, color, setColor})
{
  const style = {
    position: 'relative',
    display: 'inline-block',
    width: '64px',
    height: '64px',
    lineHeight: '64px',
    backgroundColor: color,
  };

  return (
    <div style={style} id={`${name}-picker`}>
      <input type="color"
             defaultValue={color}
             style={inputStyle}
             onInput={(event) => {
               setColor(event.target.value);
             }}/>
      {name.substr(4)}
    </div>);
}

Color.propTypes = {
  name: PropTypes.string.isRequired,
  setColor: PropTypes.func.isRequired,
};
