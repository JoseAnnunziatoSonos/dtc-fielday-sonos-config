import React from "react";
import {connect} from "react-redux";
import CountrySelector from "./country-selector";

type LanguageSelectorProps = {
    languages: [string],
    selectLanguage: any,
    selectedLanguage: any
}

const LanguageSelector = (
    {
        languages,
        selectLanguage,
        selectedLanguage = {},
    }: LanguageSelectorProps) => {
    return(
        <>
            <h2>Languages</h2>
            <ul className="list-group shadow mb-5">
                {
                    languages.map((language: any) => {
                        return(
                            <li className={`list-group-item ${language.countries.length === 0 && language.label === selectedLanguage.label ? 'active' : ''}`}
                                onClick={() => selectLanguage(language)}>
                                {language.label}
                                {
                                    language.label === selectedLanguage.label && language.countries.length > 0 &&
                                    <CountrySelector/>
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
}

const stpm = (state: any) => ({
    languages: state.languageReducer.languages,
    selectedLanguage: state.languageReducer.selectedLanguage,
});

const dtpm = (dispatch: any) => ({
    selectLanguage: (language: any) => dispatch({
        type: 'SELECT_LANGUAGE',
        language
    })
});

export default connect(stpm, dtpm)(LanguageSelector);
