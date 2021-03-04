import React from 'react'

function WithHeaderError(Component) {
    const HeaderErrorMes = () => <h2 className="HeaderError">Шапку потеряли...</h2>

    return function HeaderErrorComponent({ isHeaderError, ...props }) {
        if (!isHeaderError) return <Component { ...props }/>
        return <><HeaderErrorMes /></>
    }
}

export default WithHeaderError