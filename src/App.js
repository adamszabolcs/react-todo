import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/map';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            app_id: process.env.HERE_MAPS_APP_ID,
            app_code: process.env.HERE_MAPS_APP_CODE,
            longitude: '',
            latitude: '',
        }
    }

    render() {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.setState({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                },
                (error) => this.setState(
                    {error: error.message}
                )
            );
        }

        return (
            <div className="App">
                <Map
                    app_code={this.state.app_code}
                    app_id={this.state.app_id}
                    longitude={this.state.longitude}
                    latitude={this.state.latitude}

                />
            </div>
        );
    }
}

export default App;
