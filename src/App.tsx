import  * as React         from 'react'
import Header        from './header/Header'
import Heading       from './header/Heading'
import Search        from './header/Search'
import MovieList     from './content/MovieList'
import Footer        from './footer/Footer'
import SocLinks      from './footer/SocLinks'
import Copyright     from './footer/Copyright'
import ErrorBoundary from './ErrorBoundary'
import HeaderError   from './HeaderError'
// import DataAll       from './data.json5'
import {Datats}      from './Datats'

const WithHeaderError       = HeaderError(Header)
const NameApp               = Datats.globalData.nameApp
const SearchCTA             = Datats.globalData.searchCTA
const SearchPlaceholder     = Datats.globalData.searchPlaceholder
const SearchBtnText         = Datats.globalData.searchBtnText

export default function App() {
    return (
        <>
            <WithHeaderError isError = { false } >
                <Heading name = { NameApp } />
                <Search
                    searchCTA         = { SearchCTA }
                    searchPlaceholder = { SearchPlaceholder }
                    searchBtnText     = { SearchBtnText }
                 />
            </WithHeaderError>
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