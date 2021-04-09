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
import DataAll       from './data.json5'


const WithHeaderError = HeaderError(Header)
const NameApp               = DataAll.globalData.nameApp
const SearchCTA             = DataAll.globalData.searchCTA
const SearchPlaceholder     = DataAll.globalData.searchPlaceholder
const SearchBtnText         = DataAll.globalData.searchBtnText

export default function App() {
    return (
        <>
            <WithHeaderError isError = { false } >
                <Heading nameApp = { NameApp } />
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