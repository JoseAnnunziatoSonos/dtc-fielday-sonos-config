import React from "react";
import {useDispatch} from "react-redux";
import './players.scss';

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
            <div onClick={() => updatePlayer({...player, selected: !player.selected || false})}
                 className={`sns-player shadow p-2 rounded-3 fs-4 ${player.selected ? 'sns-selected':''}`}>
                {player.label}
                <br/>
                <img src={player.image} height={90}/>
                {
                    player.pairable &&
                    <div>
                        <label className="form-check-label"
                               htmlFor={player.label}>Paired</label>
                        <div className="form-check form-switch d-inline-block">
                            <input className="form-check-input position-relative"
                                   style={{top: '5px', left: '5px'}}
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
            </div>
        </div>
    );
};

export default Player;
