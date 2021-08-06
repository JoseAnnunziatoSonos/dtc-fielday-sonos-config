
const initialState = {
    languages: [
        {label: 'Chinese', countries: []},
        {label: 'Czech', countries: []},
        {label: 'Danish', countries: []},
        {label: 'Dutch', countries: [
                {label: 'Belgium'},
                {label: 'Netherlands'}
            ]},
    ]
};

export const countryReducer = (state = initialState, action: any) => {
    return state;
};
