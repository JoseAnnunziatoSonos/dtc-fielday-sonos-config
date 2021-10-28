import React from "react";
import {useSelector} from "react-redux";
import Player from "./Player";

/**
 * Extracts Satellite players from state
 * @param state
 */
const selectSatellitePlayers = (state: any) =>
    state.players.filter((player: any) => player.satellite);

/**
 * Renders Satellite players
 * @constructor
 */
const SatellitePlayerSelector = () => {
    const players = useSelector(selectSatellitePlayers);
    return(
        <div className="mt-5">
            <label>Satellite Players</label>
            <div className="row">
                {
                    players.map((player: any) => {
                        return(
                            <div className="col-3">
                                <Player player={player}/>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default SatellitePlayerSelector;
