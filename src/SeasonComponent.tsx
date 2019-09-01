import React from 'react';
import './SeasonComponent.css'
import LoadingComponent from './LoadingComponent';

interface SeasonConfigType {
    summer: { text: string, iconName: string },
    winter: { text: string, iconName: string },
    [key: string]: SeasonConfigValueType
}

interface SeasonConfigValueType {
    text: string
    iconName: string
}

const SeasonConfig: SeasonConfigType = {
    summer: {
        text: "Let's hit the beach",
        iconName: "sun",
    },
    winter: {
        text: "Burr, it's chilly",
        iconName: "snowflake",
    },
}
interface SeasonProps {
    latitude?: number
}

interface SeasonState {
    month?: number
}

class SeasonComponent extends React.Component<SeasonProps, SeasonState> {
    state = { month: undefined }

    getSeason(latitude?: number, month?: number): string | undefined {
        if (month === undefined || latitude === undefined) { return undefined; }

        if (latitude > 0) {
            return 3 <= month && month <= 8 ? "summer" : "winter"
        } else {
            return 3 <= month && month <= 8 ? "winter" : "summer"
        }
    }

    componentDidMount() {
        this.setState({ month: new Date().getMonth() })
    }

    render() {
        const season = this.getSeason(this.props.latitude, this.state.month)
        if (season === undefined) {
            return <LoadingComponent message="Please accept location permission request" />
        }
        const weatherMessage = SeasonConfig[season].text
        const weatherIcon = SeasonConfig[season].iconName

        return (
            <div className={`season-display ${season}`}>
                <i className={ `icon icon-left ${weatherIcon} massive` } />
                <h1>{ weatherMessage }</h1>
                <i className={ `icon icon-right ${weatherIcon} massive` } />
            </div>
        )
    }
};

export default SeasonComponent;
