import React from "react";
import {useSelector} from "react-redux";
import Player from "./Player";

/**
 * Extracts AIO players from state
 * @param state
 */
const selectAIOPlayers = (state: any) =>
    state.players.filter((player: any) =>
        player.interaction === 'AIO');

/**
 * Renders AIO players
 * @constructor
 */
const AIOPlayerSelector = () => {
    const players = useSelector(selectAIOPlayers);
    return(
        <div className="mt-5">
            <label>AIO Players</label>
            <div className="row">
            {
                players.map((player: any) => {
                    return(
                        <div className="col-2">
                            <Player player={player}/>
                        </div>
                    );
                })
            }
            </div>
        </div>
    );
};

export default AIOPlayerSelector;
