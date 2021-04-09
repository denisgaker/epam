import * as React from 'react'

const HeaderError = (Component: any) => ({isError, ...props}: any) => isError ? <h2 className="HeaderError">Шапку потеряли...</h2> : <Component {...props} />;

export default HeaderError