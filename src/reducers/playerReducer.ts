import players from '../data/players.json';

/**
 * Reducer for Players - implements finite state machine keeping track
 * of current state of selected players
 * @param {object} state Current state
 * @param {object} action Event causing state transition
 */
const playerReducer = (state = players, action: any) => {
    switch (action.type) {
        case 'update-player':
            const newState = state.map((player) =>
                player.key === action.player.key ?
                    action.player :
                    player
            );
            return newState;
        default:
            return state;
    }
};

export default playerReducer;
