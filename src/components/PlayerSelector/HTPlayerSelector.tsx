import React from "react";
import {useSelector} from "react-redux";
import Player from "./Player";

/**
 * Extracts HT players from state
 * @param state
 */
const selectHTPlayers = (state: any) =>
    state.players.filter((player: any) =>
        player.interaction === 'HT');

/**
 * Renders HT players
 * @constructor
 */
const HTPlayerSelector = () => {
    const players = useSelector(selectHTPlayers);
    return(
        <div className="mt-5">
            <label>HT Players</label>
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

export default HTPlayerSelector;
