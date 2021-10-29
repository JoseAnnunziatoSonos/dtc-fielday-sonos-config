import React from "react";
import {useSelector} from "react-redux";
import Player from "./Player";

/**
 * Renders AIO players
 * @constructor
 */
const PlayerSelectorList = (
    {
        players=[],
        title = ''
    }) => {
    return(
        <div className="">
            <hr/>
            { title && <label className="fs-4">{title}</label>}
            <div className="row">
            {
                players.map((player: any, idx) => {
                    return(
                        <div className="col-2" key={idx}>
                            <Player player={player}/>
                        </div>
                    );
                })
            }
            </div>
        </div>
    );
};

export default PlayerSelectorList;
