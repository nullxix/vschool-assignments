import React from "react";
import PropTypes from "prop-types"

function Box(props){

    return (
        <>
            <div onClick={props.handleClick}> I have returned with {props.value} {props.fruit}{props.value !== 1 && "s"}  </div>
        </>
    )
}

Box.defaultProps = {
    fruit: "banana",
    value: 1,
}

Box.propTypes = {
    fruit: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    handleClick: function(props, propName, componentName) {
        console.log(props[propName])
        if (!/setFruit/.test(props[propName])) {
          return new Error(
            'Invalid prop `' + propName + '` supplied to' +
            ' `' + componentName + '`. Validation failed.'
          );
        }
      },
}


export default Box;