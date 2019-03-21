import React, {Component} from 'react';

class Map extends Component {

    constructor(props) {
        super(props);

        this.platform = null;
        this.map = null;

        this.state = {
            app_id: props.app_id,
            app_code: props.app_code,
            center: props.center,
            zoom: props.zoom,
        }
    }

    componentDidMount() {
        this.platform = new window.H.service.Platform(this.state);

        var layer = this.platform.createDefaultLayers();
        var container = document.getElementById('map');



        this.map = new window.H.Map(container, layer.normal.map, {
            zoom: this.state.zoom,
            center: this.state.center,
        });

        var events = new window.H.mapevents.MapEvents(this.map);
        // eslint-disable-next-line
        var behavior = new window.H.mapevents.Behavior(events);
        // eslint-disable-next-line
        var ui = new window.H.ui.UI.createDefault(this.map, layer);
        this.addMarker();
    }

    addMarker() {
        var icon = new window.H.map.Icon('pin.png'),
            coords = {lat: this.state.center.lat, lng: this.state.center.lng},
            marker = new window.H.map.Marker(coords, {icon: icon});

        this.map.addObject(marker);
    }

    render() {
        return (
            <div id="map" style={{width: '100%', height: '400px', background: 'grey' }}>
            </div>
        );
    }
}

export default Map;