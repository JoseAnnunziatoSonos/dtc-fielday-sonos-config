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
            <div className="container-fluid"
                 style={{fontSize: "1em", fontWeight: "bold"}}>
                <h1 className="text-center">Sonos Configurator</h1>
                <div className="row">
                    <div className="col-11">
                        <LanguageSelector/>
                    </div>
                    <div className="col-1">
                        <button className="btn btn-primary btn-lg">Save</button>
                    </div>
                </div>
                <PlayerSelector/>
            </div>
        </Provider>
    );
};

export default SonosConfigurator;