import React from "react";
import {useSelector} from "react-redux";
import {selectAIOPlayers, selectHTPlayers, selectSatellitePlayers} from "../../selectors/playerSelectors"
import PlayerSelectorList from "./PlayerSelectorList";

/**
 * Component for selecting players.
 * Groups several other components for
 * selecting different types of players
 * @constructor
 */
const PlayerSelector = () => {
    const aioPlayers = useSelector(selectAIOPlayers);
    const htPlayers = useSelector(selectHTPlayers);
    const satellitePlayers = useSelector(selectSatellitePlayers);

    return(
        <div className="">
            <PlayerSelectorList players={aioPlayers} title="AIO Players"/>
            <PlayerSelectorList players={htPlayers} title="HT Players"/>
            <PlayerSelectorList players={satellitePlayers} title="Satellite Players"/>
        </div>
    );
};

export default PlayerSelector;
