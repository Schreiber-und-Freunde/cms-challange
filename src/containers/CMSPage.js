import React from "react";
import PropTypes from "prop-types";

import Stringifier from "../components/Stringifier";

const CMSPage = ({ seo, components }) => {
  return (
    <div className="page">
      {components.map((component, index) => {
        const { type, ...props } = component;
        // props are all properties of component except type
      return (<Stringifier key={`component${index}`} type={type} {...props} />);
      })}
    </div>
  );
};

CMSPage.propTypes = {
  seo: PropTypes.object,
  components: PropTypes.array.isRequired
};

export default CMSPage;
