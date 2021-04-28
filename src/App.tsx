import * as React from 'react';
import Header from './header/header/Header';
import Heading from './header/header/Heading';
import Search from './header/search/Search';
import MovieList from './content/MovieList';
import Footer from './footer/footer/Footer';
import SocLinks from './footer/SocLinks';
import Copyright from './footer/copyright/Copyright';
import ErrorBoundary from './ErrorBoundary';
// import HeaderError from './HeaderError';
import withError from './headererror/HeaderError';
import { Datats } from './Datats';

// const WithHeaderError = HeaderError(Header);
const HeaderWithError = withError(Header);
const NameApp = Datats.globalData.nameApp;
const SearchCTA = Datats.globalData.searchCTA;
const SearchPlaceholder = Datats.globalData.searchPlaceholder;
const SearchBtnText = Datats.globalData.searchBtnText;

const App = (): React.ReactElement => {
  return (
    <>
      <HeaderWithError isError={false}>
        <Heading name={NameApp} />
        <Search
          searchCTA={SearchCTA}
          searchPlaceholder={SearchPlaceholder}
          searchBtnText={SearchBtnText}
        />
      </HeaderWithError>
      <ErrorBoundary>
        <MovieList />
      </ErrorBoundary>
      <Footer>
        <SocLinks />
        <Copyright name={NameApp} />
      </Footer>
    </>
  );
};

export default App;
