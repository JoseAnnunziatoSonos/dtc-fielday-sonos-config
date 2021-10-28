import React from "react";
import AIOPlayerSelector from "./AIOPlayerSelector";
import HTPlayerSelector from "./HTPlayerSelector";
import SatellitePlayerSelector from "./SatellitePlayerSelector";

/**
 * Component for selecting players.
 * Groups several other components for
 * selecting different types of players
 * @constructor
 */
const PlayerSelector = () => {
    return(
        <div className="mt-5">
            <AIOPlayerSelector/>
            <HTPlayerSelector/>
            <SatellitePlayerSelector/>
        </div>
    );
};

export default PlayerSelector;
