import React from 'react';

interface LoadingComponentProps {
    message: string;
}

class LoadingComponent extends React.Component<LoadingComponentProps> {
    public static defaultProps = {
        message: "Loading..."
    }

    render() {
        return (
            <div className="ui active dimmer">
                <div className="ui big text loader">{ this.props.message }</div>
            </div>
        )
    }
};

export default LoadingComponent;
