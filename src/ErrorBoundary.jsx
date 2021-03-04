import React from 'react'
import './style.css'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <div>
                    <h2>Произошла ошибка</h2>
                    <p>Это конец. Всё пропало.</p>
                    <p>Рыдайте, рвите волосы на голове, или попробуйте повторить запрос позже.</p>
                    <hr />
                    <div style={{ color: '#aaa' }}>
                        <p>Виновник скрыт в подробностях.</p>
                        <details style={{ whiteSpace: 'pre-wrap' }}>
                            <p>{this.state.error && this.state.error.toString()}</p>
                            <p>{this.state.errorInfo.componentStack}</p>
                        </details>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary