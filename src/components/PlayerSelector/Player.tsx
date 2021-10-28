import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

const Player = (
    {
        player = {
            label: '',
            pairable: false,
            paired: true,
            image: '',
            selected: false
        }
    }) => {
    const dispatch = useDispatch();
    const updatePlayer = (player: any) => {
        dispatch({
            type: 'update-player',
            player
        });
    }
    return(
        <div>
            <div className="card">
                <div onClick={() => updatePlayer({...player, selected: !player.selected || false})}
                    className={`card-header ${player.selected ? 'text-white bg-secondary': ''}`}>
                    <input className="form-check-input me-3"
                           onChange={(event) =>
                           {
                               updatePlayer({...player, selected: event.target.checked})
                           }}
                           type="checkbox"
                           id={`${player.label}-1`}
                           checked={player.selected}/>
                    {player.label}
                    <button className="btn btn-primary">Select</button>
                </div>
                <ul className="list-group list-group-flush">
                    <li onClick={() => updatePlayer({...player, selected: !player.selected || false})}
                        className="list-group-item"  style={{textAlign: 'center'}}>
                        <img src={player.image} height={100}/>
                    </li>
                    <li onClick={() => updatePlayer({...player, paired: !player.paired || false})}
                        className="list-group-item">
                        {
                            player.pairable &&
                            <div>
                                <label className="form-check-label float-start"
                                       htmlFor={player.label}>Paired</label>
                                <div className="form-check form-switch">
                                    <input className="form-check-input float-end"
                                           onChange={(event) =>
                                           {
                                               updatePlayer({...player, paired: event.target.checked})
                                           }}
                                           type="checkbox"
                                           id={player.label}
                                           checked={player.paired}/>
                                </div>
                            </div>
                        }
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Player;
