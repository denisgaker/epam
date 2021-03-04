import React         from 'react'
import Header        from './header/Header.jsx'
import Heading       from './header/Heading.jsx'
import Search        from './header/Search.jsx'
import MovieList     from './content/MovieList.jsx'
import Footer        from './footer/Footer.jsx'
import SocLinks      from './footer/SocLinks.jsx'
import Copyright     from './footer/Copyright.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'
import WithHeaderError   from './WithHeaderError.jsx'
import DataAll       from './data.json5'


const HeaderWithHeaderError = WithHeaderError(Header)
const NameApp               = DataAll.globalData.nameApp
const SearchCTA             = DataAll.globalData.searchCTA
const SearchPlaceholder     = DataAll.globalData.searchPlaceholder
const SearchBtnText         = DataAll.globalData.searchBtnText

export default function App() {
    return (
        <>
            <HeaderWithHeaderError isHeaderError = { false } >
                <Heading nameApp = { NameApp } />
                <Search
                    searchCTA         = { SearchCTA }
                    searchPlaceholder = { SearchPlaceholder }
                    searchBtnText     = { SearchBtnText }
                 />
            </HeaderWithHeaderError>
            <ErrorBoundary>
                <MovieList/>
            </ErrorBoundary>
            <Footer>
                <SocLinks/>
                <Copyright name = { NameApp }/>
            </Footer>
        </>
    )
}