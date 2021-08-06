import React from "react";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import {languageReducer} from "../reducers/language-reducer";
import {countryReducer} from "../reducers/country-reducer";
import {topologyReducer} from "../reducers/topology-reducer";
import LanguageSelector from "./language-selector";
import TopologySelector from "./topology-selector";

const reducers = combineReducers({
    languageReducer, countryReducer, topologyReducer,
})
const store = createStore(reducers);

const SonosConfigurator = () => {
    return(
        <Provider store={store}>
            <div className="container-fluid">
                <h1>Sonos Configurator</h1>
                <div className="row">
                    <div className="col-3">
                        <LanguageSelector/>
                    </div>
                    <div className="col-9">
                        <TopologySelector/>
                    </div>
                </div>
            </div>
        </Provider>
    );
};

export default SonosConfigurator;