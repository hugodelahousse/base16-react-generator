import React from 'react';
import PropTypes from 'prop-types';




const inputStyle = {
};

export function Color({name, color, setColor, style})
{
  const divStyle = {
    position: 'relative',
    display: 'inline-block',
    width: '64px',
    height: '64px',
    lineHeight: '64px',
    backgroundColor: color,
    ...style,
  };

  console.log(style);
  return (
    <div style={divStyle} id={`${name}-picker`}>
      <input type="color"
             className="color-picker"
             defaultValue={color}
             style={style}
             onInput={(event) => {
               setColor(event.target.value);
             }}/>
      {name.substr(4)}
    </div>);
}

Color.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  setColor: PropTypes.func.isRequired,
  style: PropTypes.string.isRequired,
};
