
import React from 'react';

import PropTypes from 'prop-types';


//create function container
function Container({children}){
    return <main>{children}</main>;
}

//check type of prop
Container.propType = {
    children: PropTypes.String.isRequired,
};

//export
export default Container;