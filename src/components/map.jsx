import React, {Component} from 'react';

class Map extends Component {

    constructor(props) {
        super(props);

        this.platform = null;
        this.map = null;

        this.state = {
            app_id: props.app_id,
            app_code: props.app_code,
            center: {
                lat: props.latitude,
                lng: props.longitude,
            },
            zoom: props.zoom,
        }
    }

    componentDidMount() {
        this.platform = new window.H.service.Platform(this.state);

        var layer = this.platform.createDefaultLayers();
        var container = document.getElementById("map");

        this.map = new window.H.Map(container, layer.normal.map, {
            center: this.state.center,
            zoom: this.state.zoom,
        })

        var events = new window.H.mapevents.MapEvents(this.map);
        var behavior = new window.H.mapevents.Behavior(events);
        var ui = new window.H.ui.UI.createDefault(this.map, layer);
    }

    render() {
        return (
            <div id="map" style={{width: '100%', height: '300px', background: 'grey'}}>
            </div>
        );
    }
}

export default Map;