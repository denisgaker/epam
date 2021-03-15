import React from 'react'

const HeaderError = (Component) => ({isError, ...props}) => isError ? <h2 className="HeaderError">Шапку потеряли...</h2> : <Component {...props} />;

export default HeaderError