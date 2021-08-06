import React from "react";
import {connect} from "react-redux";

type InteractionSelectorProps = {
    interactions: [object],
    selectInteraction: any,
    selectedInteraction: any
};

const InteractionSelector = (
    {
        interactions,
        selectedInteraction = {},
        selectInteraction,
    }: InteractionSelectorProps) => {
    return(
        <>
            <h2>Interaction Method</h2>
            <ul className="list-group shadow mb-5">
                {
                    interactions.map((interaction: any) => {
                        return(
                            <li className={`list-group-item ${selectedInteraction && interaction.label === selectedInteraction.label ? 'active' : ''}`}
                                onClick={() => selectInteraction(interaction)}>
                                {interaction.label}
                            </li>
                        );
                    })
                }
            </ul>
        </>
    );
};


const stpm = (state: any) => ({
    interactions: state.topologyReducer.interactions,
    selectedInteraction: state.topologyReducer.selectedInteraction,
})

const dtpm = (dispatcher: any) => ({
    selectInteraction: (interaction: any) => {
        dispatcher({
            type: 'SELECT_INTERACTION',
            interaction
        })
    }
})

export default connect(stpm, dtpm)(InteractionSelector);
