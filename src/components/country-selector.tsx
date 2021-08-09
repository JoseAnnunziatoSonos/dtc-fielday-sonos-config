import React from "react";
import {connect} from "react-redux";

type CountrySelectorProps = {
    countries: [string],
    selectCountry: any,
    selectedCountry: any
};

const CountrySelector = (
    {
        countries,
        selectCountry,
        selectedCountry = {},
    }: CountrySelectorProps) => {
    return(
        <>
            <ul className="list-group shadow mb-5">
                {
                    countries.map((country: any) => {
                        return(
                            <li key={country.label}
                                className={`list-group-item ${country.label === selectedCountry.label ? 'active' : ''}`}
                                onClick={() => selectCountry(country)}>
                                {country.label}
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
}

const stpm = (state: any) => ({
    countries: state.languageReducer.selectedLanguage.countries,
    selectedCountry: state.languageReducer.selectedCountry,
});

const dtpm = (dispatch: any) => ({
    selectCountry: (country: any) => {
        dispatch({type: 'SELECT_COUNTRY', country})
    }
});

export default connect(stpm, dtpm)(CountrySelector);
