import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/map.js';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            center: {
                lat: '',
                lng: '',
            },
            app_id: process.env.REACT_APP_HERE_APP_ID,
            app_code: process.env.REACT_APP_HERE_APP_CODE,
            latitude: '',
            longitude: '',
        };

    }

    componentDidMount() {
        this.showMap();
    }

    showMap = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.setState({
                        center: {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        },
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                },
                (error) => this.setState(
                    {error: error.message}
                )
            );
        } else {
            return ("Please allow to us to know your location");

        }
    };

    render() {

        return (
            <div className="App" id="mapplace">
                <Map
                    app_id={this.state.app_id}
                    app_code={this.state.app_code}
                    lat={this.state.latitude}
                    lng={this.state.longitude}
                    center={this.state.center}
                    onLoad={this.state.showMap}
                    zoom="12"
                />
            </div>
        );
    }
}

export default App;