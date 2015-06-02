// player.jsx

import Entity from './entity.jsx';


class Player extends Entity  {
    constructor(props) {
        super(props);
        this.state = { world: "World"};
    }
    render() {
        return super.render();
    }
}

export default Player;