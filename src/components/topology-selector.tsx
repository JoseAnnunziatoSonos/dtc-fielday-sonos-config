import React from "react";
import {connect} from "react-redux";
import FixtureSelector from "./fixture-selector";
import InteractionSelector from "./interaction-selector";
import PlayerSelector from "./player-selector";

type TopologySelectorProps = {
    selectedLanguage: any,
}

const TopologySelector = (
    {
        selectedLanguage
    }: TopologySelectorProps) => {
    if (!selectedLanguage) {
        return null;
    }
    return(
        <>
            <div className="row">
                <div className="col-4">
                    <FixtureSelector/>
                </div>
                <div className="col-4">
                    <InteractionSelector/>
                </div>
                <div className="col-4">
                    <PlayerSelector/>
                </div>
            </div>
        </>
    )
}

const stpm = (state: any) => ({
    selectedLanguage: state.languageReducer.selectedLanguage,
});

export default connect(stpm)(TopologySelector);
