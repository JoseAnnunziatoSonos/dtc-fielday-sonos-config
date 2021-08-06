
const initialState = {
    languages: [
        {label: 'Chinese', countries: []},
        {label: 'Czech', countries: []},
        {label: 'Danish', countries: []},
        {
            label: 'Dutch',
            countries: [
                {label: 'Belgium'},
                {label: 'Netherlands'},
            ]
        },
        {
            label: 'English',
            countries: [
                {label: 'Australia'},
                {label: 'Canada'},
                {label: 'Hungary'},
                {label: 'New Zealand'},
                {label: 'Romania'},
                {label: 'Slovakia'},
                {label: 'UK'},
                {label: 'USA'},
            ]},
        {label: 'Finnish', countries: []},
        {
            label: 'French',
            countries: [
                {label: 'Belgium'},
                {label: 'Canada'},
                {label: 'France'},
                {label: 'Luxembourg'},
                {label: 'Switzerland'},
            ]
        },
        {
            label: 'German',
            countries: [
                {label: 'Germany'},
                {label: 'Luxembourg'},
                {label: 'Switzerland'},
            ]
        },
        {
            label: 'Italian',
            countries: [
                {label: 'Italy'},
                {label: 'Switzerland'},
            ]
        },
        {label: 'Japanese', countries: []},
        {label: 'Norwegian', countries: []},
        {label: 'Polish', countries: []},
        {
            label: 'Spanish',
            countries: [
                {label: 'Colombia'},
                {label: 'Mexico'},
                {label: 'Spain'},
            ]
        },
        {label: 'Swedish', countries: []},
    ]
};

export const languageReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SELECT_LANGUAGE':
            return {
                ...state,
                selectedLanguage: state.languages
                    .find((language: any) => language.label === action.language.label)
            };
        case 'SELECT_COUNTRY':
            return {
                ...state,
                selectedCountry: action.country
            };
        default:
            return state;
    }
};
