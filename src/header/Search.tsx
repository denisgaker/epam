import * as React from 'react'

interface SaerchProps {
    searchCTA: string
    searchPlaceholder: string
    searchBtnText: string
}

const Search: React.FC<SaerchProps> = ({searchCTA, searchPlaceholder, searchBtnText}) => {
    return (
        <div className="search">
            <h2>{searchCTA}</h2>
            <input type="text" id="headerSearch" className="headerSearch" placeholder={searchPlaceholder} />
            <div className="searchControl">
                <div className="searchBy">
                    <span>Search by</span>
                    <label htmlFor="searchByTitle">
                        <input type="radio" name="searchBy_ctrl" id="searchByTitle"/>
                        <span>Title</span>
                    </label>
                    <label htmlFor="searchByGenre">
                        <input type="radio" name="searchBy_ctrl" id="searchByGenre" />
                        <span>Genre</span>
                    </label>
                </div>
                <button type="button" id="headerSearchBtn">{searchBtnText}</button>
            </div>
        </div>
    )
}

export default Search