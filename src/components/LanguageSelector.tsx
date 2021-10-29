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
        <div className="row fs-4">
            <div className="col-1">
                <label className="float-end">
                    Language:
                </label>
            </div>
            <div className="col-5">
                <select
                    value={languages.find((language: any) => language.selected) || null}
                    onChange={(event) =>
                        selectLanguage((event: any) => event.target.value)
                    }
                    className="form-control form-select-lg">
                    <option>Select a language</option>
                    {
                        languages.map((language: any, idx: number) => {
                            return(
                                <option selected={language.selected} key={idx}>
                                    {language.label}
                                </option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="col-1">
                <label className="float-end">
                    Country:
                </label>
            </div>
            <div className="col-5">
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
