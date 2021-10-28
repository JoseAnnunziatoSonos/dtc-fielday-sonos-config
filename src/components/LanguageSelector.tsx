import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

/**
 * Extracts languages from current state for rendering as a dropdown
 * @param state
 */
const selectLanguages = (state: any) => state.languages;

/**
 * Component for selecting language and country
 * @constructor
 */
const LanguageSelector = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const languages = useSelector(selectLanguages);
    const dispath = useDispatch();
    const selectLanguage = (language: any) => {
        dispath({
            type: 'select-language',
            language
        });
        setSelectedLanguage(language);
    }
    return(
        <div className="row">
            <div className="col-2">
                <label>
                    Language:
                </label>
            </div>
            <div className="col">
                <select
                    value={languages.find((language: any) => language.selected) || null}
                    onChange={(event) =>
                        selectLanguage((event: any) => event.target.value)
                    }
                    className="form-control form-select-lg">
                    <option>Select a language</option>
                    {
                        languages.map((language: any) => {
                            return(
                                <option selected={language.selected}>{language.label}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="col-2">
                <label>
                    Country:
                </label>
            </div>
            <div className="col">
                <select className="form-control form-select-lg">
                    <option>Select a country</option>
                    {
                        selectedLanguage &&
                            <>
                            {
                                languages.find((language: any) => language.label === selectedLanguage)
                                    .countries.map((country: any) => {
                                    return(
                                        <option>{country.label}</option>
                                    )
                                })
                            }
                            </>
                    }
                </select>
            </div>
        </div>
    );
};

export default LanguageSelector;
