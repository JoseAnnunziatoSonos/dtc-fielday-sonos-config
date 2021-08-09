import React from "react";
import {connect} from "react-redux";
import FixtureSelector from "./fixture-selector";
import InteractionSelector from "./interaction-selector";
import PlayerSelector from "./player-selector";
import ListSelector from "./list-selector";

type TopologySelectorProps = {
    selectedLanguage: any,
    fixtures: [object],
}

const TopologySelector = (
    {
        selectedLanguage,
        fixtures,
    }: TopologySelectorProps) => {
    if (!selectedLanguage) {
        return null;
    }
    return(
        <>
            <div className="row">
                <div className="col-4">
                    <FixtureSelector/>
                    {/*<ListSelector*/}
                    {/*    title="Fixtures"*/}
                    {/*    listItems={fixtures}*/}
                    {/*    selectItem={selectFixture}*/}
                    {/*    selectedItem={{}}/>*/}
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
    fixtures: state.topologyReducer.fixtures,
});

const dtpm = (dispatcher: any) => ({
    
})

export default connect(stpm)(TopologySelector);
