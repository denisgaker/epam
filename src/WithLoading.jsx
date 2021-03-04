import React from 'react'

function WithLoading(Component) {
    const LoadingIndicator = () => <span className="inf">Терпение, господа!</span>

    return function WithLoadingComponent({ isLoading, ...props }) {
        if (!isLoading) return <Component { ...props } />
        return <><LoadingIndicator /></>
    }
}

export default WithLoading