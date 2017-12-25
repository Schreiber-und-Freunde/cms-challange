import React from "react";
import PropTypes from "prop-types";
import Stringifier from "../components/Stringifier";

const CMSComponent = ({ type, ...props }) => {
  return (
    // properties are being spread via spread operator ...
    <Stringifier type={type} {...props} />
  );
};

CMSComponent.propTypes = {
  type: PropTypes.string.isRequired
};

export default CMSComponent;
