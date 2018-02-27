import React from 'react';
import PropTypes from 'prop-types';




export function Color({name, color, setColor, style})
{
  const divStyle = {
    backgroundColor: color,
    ...style,
  };

  return (
    <td style={divStyle} id={`${name}-picker`}>
      <input type="color"
             className="color-picker"
             defaultValue={color}
             style={style}
             onInput={(event) => {
               setColor(event.target.value);
             }}/>
      {name.substr(4)}
    </td>);
}

Color.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  setColor: PropTypes.func.isRequired,
  style: PropTypes.object.isRequired,
};
