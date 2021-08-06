
const initialState = {
    fixtures: [
        {
            label: 'AIO',
            interactions: [
                {
                    label: 'Touchscreen',
                    players: [
                        {label: 'Roam'},
                        {label: 'Five,One'},
                        {label: 'Pair:OneSL'},
                        {label: 'Roam,Move'},
                        {label: 'Roam,Roam'},
                        {label: 'One,Five,OneSL'},
                        {label: 'One(sp),OneSL(sp),Five'},
                        {label: 'Pair:One+OneSL,Five'},
                        {label: 'Roam,Move,One'},
                        {label: 'Roam,Roam,Move'},
                        {label: 'Five,One,Pair:OneSL'},
                        {label: 'Roam,Five,One,OneSL'},
                        {label: 'Roam,Move,One,Five'},
                        {label: 'Roam,Move,One,OneSL'},
                        {label: 'Roam,Roam,Move,Move'},
                        {label: 'Roam,Move,One,OneSL,Five'},
                        {label: 'Roam,Move,Pair:One+OneSL,Five'},
                    ]
                },
                {
                    label: 'Player Operated',
                    players: [
                        {label: 'Roam'},
                        {label: 'Roam,Move'},
                        {label: 'Roam,Roam'},
                        {label: 'One,Five,Move'},
                        {label: 'One,Five,OneSL'},
                        {label: 'Roam,Move,One'},
                        {label: 'Roam,Roam,Move'},
                        {label: 'Roam,Move,One,Five'},
                        {label: 'Roam,Roam,Move,Move'},
                        {label: 'FastFlex AIO/HT'},
                        {label: 'FastFlex AIO/HT/SUB'},
                        {label: 'Any Single AIO'},
                    ]
                },
                {
                    label: 'Button Operated',
                    players: [
                        {label: 'One'},
                        {label: 'Roam'},
                        {label: 'Roam,Roam'},
                        {label: 'Roam,Move'},
                        {label: 'Roam,Move,One'},
                        {label: 'Roam,Roam,Move'},
                        {label: 'Any Single AIO'},
                    ]
                },
            ]
        },
        {
            label: 'HT',
            interactions: [
                {
                    label: 'Touchscreen',
                    players: [
                        {label: 'Arc'},
                        {label: 'Fury'},
                        {label: 'Beam'},
                        {label: 'Arc,Beam'},
                        {label: 'Arc,Sub'},
                        {label: 'Beam,Sub'},
                        {label: 'Arc,Beam,Sub'},
                        {label: 'Arc,Beam,Pair:OneSL'},
                        {label: 'One,Five,Beam,Sub'},
                        {label: 'Pair:OneSL,Beam,Sub'},
                        {label: 'Arc,Beam,Pair:OneSL,Sub'},
                        {label: 'Pair:One+OneSL,Five,Arc,Beam,Sub'},
                        {label: 'Beam,Arc,Sub,Five,One,OneSL,Move'},
                        {label: 'Roam,Move,Pair:One+SL,Five,Beam,Arc,Sub'},
                    ]
                },
                {
                    label: 'Touchscreen,with TV',
                    players: [
                        {label: 'Beam'},
                        {label: 'Arc,Beam,Sub'},
                        {label: 'Arc,Beam,Pair:OneSL'},
                        {label: 'Arc,Beam,Pair:OneSL,Sub'},
                        {label: 'Beam,Arc,Sub,Rear:OneSL'},
                        {label: 'Pair:One+OneSL,Five,Arc,Beam,Sub'},
                        {label: 'Roam,Move,Pair:One+SL,Five,Beam,Arc,Sub'},
                    ]
                },
                {
                    label: 'Player Operated',
                    players: [
                        {label: 'Arc'},
                        {label: 'Beam'},
                        {label: 'Beam,Arc'},
                        {label: 'FastFlex AIO/HT'},
                        {label: 'FastFlex AIO/HT/SUB'},
                    ]
                },
                {
                    label: 'Button Operated',
                    players: [
                        {label: 'Any Single HT'},
                        {label: 'Any Single HT+SUB'},
                    ]
                },
                
            ]
        },
        {
            label: 'Additional Forms',
            interactions: [
                {
                    label: 'Touchscreen',
                    players: [
                        {label: 'Beam,One'},
                        {label: 'Move,Move'},
                        {label: 'Pair:Move'},
                        {label: 'One,Five,Move'},
                        {label: 'Arc,Rear:One/OneSL'},
                        {label: 'Beam,One,Move'},
                        {label: 'Beam,OneSL,Move'},
                        {label: 'Beam,Rear:One/OneSL'},
                        {label: 'Arc,Sub,Rear:One/OneSL'},
                        {label: 'Beam,Sub,Rear:One/OneSL'},
                        {label: 'One,Five,Move,OneSL'},
                        {label: 'One,OneSL,Move,Move'},
                        {label: 'One,OneSL,Pair:Move'},
                        {label: 'Pair:Five,One,OneSL,Move'},
                        {label: 'Arc,Sub,Rear:One/OneSL,Pair:Five'},
                        {label: 'Beam,Sub,Rear:One/OneSL,Pair:Five'},
                    ]
                },
                {
                    label: 'Touchscreen, with TV',
                    players: [
                        {label: 'Arc,Rear:One/OneSL'},
                        {label: 'Beam,Rear:One/OneSL'},
                        {label: 'Arc,Sub,Rear:One/OneSL'},
                        {label: 'Beam,Sub,Rear:One/OneSL'},
                        {label: 'One,Five,Beam,Sub'},
                        {label: 'Beam,Arc,Sub,Pair:One/OneSL'},
                        {label: 'Beam,Sub,Five,One,Move'},
                        {label: 'Arc,Sub,Rear:One/OneSL,Pair:Five'},
                        {label: 'Beam,Sub,Rear:One/OneSL,Pair:Five'},
                        {label: 'Beam,Arc,Sub,Five,One,Move,Pair:OneSL'},
                    ]
                },
                {
                    label: 'Player Operated',
                    players: [
                        {label: 'Beam,One'},
                        {label: 'One,Move'},
                        {label: 'Beam,(Arc+Sub)'},
                        {label: 'Beam,Arc,Sub'},
                        {label: 'Beam,Five,One'},
                        {label: 'Beam,One,Move'},
                        {label: 'Arc,Sub,Five,One'},
                        {label: 'Beam,Five,One,Move'},
                        {label: 'Beam,Sub,Five,One'},
                        {label: 'Beam,Arc,OneSL,Move,Pair:Five,Pair:One'},
                        {label: 'Beam,Arc,OneSL,Move,Roam,Pair:Five,Pair:One'},
                        {label: 'Any Single HT'},
                        {label: 'Any Single HT plus a SUB'},
                        {label: 'FastFlex AIO/HT'},
                        {label: 'FastFlex AIO/HT/SUB'},
                    ]
                },
                {
                    label: 'Button Operated',
                    players: [
                        {label: 'Arc,Sub\n'},
                    ]
                },
            ]
        },
        {
            label: 'Experimental',
            interactions: [
                {
                    label:'Touchscreen',
                    players: [
                        {label: 'Beam,Arc,Sub,Move'}
                    ]
                },
                {
                    label:'Touchscreen, with TV',
                    players: [
                        {label: 'Beam,Arc,Sub,Move'}
                    ]
                },
            ]
        },
    ],
    interactions: [],
    players: [],
};

export const topologyReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'SELECT_FIXTURE':
            const selectedFixture = action.fixture;
            const interactions = selectedFixture.interactions;
            return {
                ...state,
                selectedFixture,
                selectedInteraction: null,
                selectedPlayer: null,
                interactions,
                players: [],
            };
        case 'SELECT_INTERACTION':
            const selectedInteraction = action.interaction
            const players = selectedInteraction.players;
            return {
                ...state,
                selectedInteraction,
                players
            }
        case 'SELECT_PLAYER':
            const selectedPlayer = action.player
            return {
                ...state,
                selectedPlayer,
            }
        default:
            return state;
    }
};
