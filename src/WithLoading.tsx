import * as React from 'react'

function WithLoading(Component: any) {
    const LoadingIndicator = () => <span className="inf">Терпение, господа!</span>

    return function WithLoadingComponent({ isLoading, ...props }: any) {
        if (!isLoading) return <Component { ...props } />
        return <><LoadingIndicator /></>
    }
}

export default WithLoading