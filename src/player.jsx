// player.jsx

import React from 'react';

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = { world: "World"};
    }
    static render() {
        return <p>Hello, world!</p>;
    }
}

export default Player;