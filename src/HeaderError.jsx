import React from 'react'

const HeaderError = (Component) => ({isError, ...props}) => isError ? <h2 className="HeaderError">Шапку потеряли...</h2> : <Component {...props} />;

{/* function WithHeaderError(Component) {
    const Message = () => <h2 className="HeaderError">Шапку потеряли...</h2>

    return function HeaderErrorComponent({ isHeaderError, ...props }) {
        if (!isHeaderError) return <Component { ...props }/>
        return <><Message /></>
    }
} */}

export default HeaderError