import React from "react";

const titleStyle = {
  width: 'fit-content',
  fontVariant: 'small-caps',
  position: 'relavite',
  display: 'grid',
  placeItems: 'center'
};

const Title = ({text}) => {
  return (
  <div style={titleStyle}>
    <h4> {text || 'titolo'}</h4>
    <div className="underline"></div>
  </div>
  );
};

export default Title;