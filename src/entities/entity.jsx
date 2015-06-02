//entity.jsx

import React from 'react';

class Entity extends React.Component  {
    constructor(props) {
        super(props);
    }
    render() {
        return <p className="foo">Hello, world!</p>;
    }
}

export default Entity;