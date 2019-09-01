import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import SeasonComponent from "./SeasonComponent";

interface AppProps {
}

interface AppState {
    lat?: number;
    error?: string;
}

class App extends React.Component<AppProps, AppState> {
    // state: AppState;
    state = { lat: undefined, error: undefined}

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                this.setState({ lat: position.coords.latitude })
            },
            (error) => {
                console.log(error);
                this.setState({ error: error.message });
            }
        );
    }

    render() {
        if (this.state.error === undefined) {
            return (
                <div>
                    <SeasonComponent latitude={this.state.lat } />
                </div>
            );
        } 

        return (
            <div>
                <h1>Error is {this.state.error}</h1>
            </div>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('root'));
