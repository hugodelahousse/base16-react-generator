import React from 'react';
import PropTypes from 'prop-types';


export function Color({name, color, setColor, style})
{
  const divStyle = {
    backgroundColor: color,
    ...style,
  };

  return (
    <div style={divStyle} id={`${name}-picker`} className="color-picker col col-4 col-md-2">
      <input type="color"
             defaultValue={color}
             style={style}
             onInput={(event) => {
               setColor(event.target.value);
             }}/>
      <div className="color-name">{name.substr(4)}</div>
    </div>);
}

Color.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  setColor: PropTypes.func.isRequired,
  style: PropTypes.object.isRequired,
};
