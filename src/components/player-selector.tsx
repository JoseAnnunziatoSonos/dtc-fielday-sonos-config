import React from "react";
import {connect} from "react-redux";

type PlayerSelectorProps = {
    players: [object],
    selectPlayer: any,
    selectedPlayer: any
};

const PlayerSelector = (
    {
        players,
        selectedPlayer,
        selectPlayer = {}
    }: PlayerSelectorProps) => {
    return(
        <>
            <h2>Players</h2>
            <ul className="list-group shadow mb-5">
                {
                    players.map((player: any) => {
                        return(
                            <li key={player.label}
                                className={`list-group-item ${selectedPlayer && player.label === selectedPlayer.label ? 'active' : ''}`}
                                onClick={() => selectPlayer(player)}>
                                {player.label}
                            </li>
                        );
                    })
                }
            </ul>
        </>
    );
};


const stpm = (state: any) => ({
    players: state.topologyReducer.players,
    selectedPlayer: state.topologyReducer.selectedPlayer,
})

const dtpm = (dispatcher: any) => ({
    selectPlayer: (player: any) => {
        dispatcher({
            type: 'SELECT_PLAYER',
            player
        })
    }
})

export default connect(stpm, dtpm)(PlayerSelector);
