import languages from '../data/languages.json';

/**
 * Reducer for Languages - implements finite state machine keeping track
 * of current state of selected language and country
 * @param {object} state Current state
 * @param {object} action Event causing state transition
 */
const languageReducer = (state = languages, action: any) => {
    switch (action.type) {
        case 'select-language':
            return state.map((language) =>
                language.label === action.language ?
                    {...language, selected: true} :
                    {...language, selected: false}
            )
            break;
        default:
            return state;
    }
};

export default languageReducer;
