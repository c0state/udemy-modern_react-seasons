import React from 'react';

interface LoadingComponentProps {
    message: string;
}

class LoadingComponent extends React.Component<LoadingComponentProps> {
    render() {
        return (
            <div className="ui active dimmer">
                <div className="ui big text loader">{ this.props.message }</div>
            </div>
        )
    }
};

LoadingComponent.defaultProps = {
    this.message = "Loading...";
};

export default LoadingComponent;
