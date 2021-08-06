import React from "react";
import {connect} from "react-redux";

type FixtureSelectorProps = {
    fixtures: [string],
    selectFixture: any,
    selectedFixture: any
};

const FixtureSelector = (
    {
        fixtures,
        selectFixture,
        selectedFixture = {}
    }: FixtureSelectorProps) => {
    return(
        <>
            <h2>Fixtures</h2>
            <ul className="list-group shadow mb-5">
                {
                    fixtures.map((fixture: any) => {
                        return(
                            <li className={`list-group-item ${fixture.label === selectedFixture.label ? 'active' : ''}`}
                                onClick={() => selectFixture(fixture)}>
                                {fixture.label}
                            </li>
                        );
                    })
                }
            </ul>
        </>
    );
};

const stpm = (state: any) => ({
    fixtures: state.topologyReducer.fixtures,
    selectedFixture: state.topologyReducer.selectedFixture,
})

const dtpm = (dispatcher: any) => ({
    selectFixture: (fixture: any) => {
        dispatcher({
            type: 'SELECT_FIXTURE',
            fixture
        })
    }
})

export default connect(stpm, dtpm)(FixtureSelector);
