import React from "react";

const Loader = props => {
  const showSpinner = props.active ? 'active' : 'inactive';
  return (
      <div className={`ui inverted dimmer ${showSpinner}`}>
        <div className="ui big text loader">Loading</div>
      </div>
  )
};

export default Loader;
