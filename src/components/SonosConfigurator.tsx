import React from "react";
import LanguageSelector from "./LanguageSelector";
import PlayerSelector from "./PlayerSelector/PlayerSelector";
import store from "../reducers/store";
import {Provider} from "react-redux";

/**
 * Entry point of Sonos configuration application.
 * Consists of components for selecting language, country
 * and player
 * @constructor
 */
const SonosConfigurator = () => {
    return(
        <Provider store={store}>
            <div className="container-fluid" style={{fontSize: "1em", fontWeight: "bold"}}>
                <h1>Sonos Configurator</h1>
                <LanguageSelector/>
                <PlayerSelector/>
            </div>
        </Provider>
    );
};

export default SonosConfigurator;