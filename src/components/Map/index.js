import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export const mapIcon = new L.Icon({
    iconUrl: require("../../assets/pawprint.png"),
    iconRetinaUrl: require("../../assets/pawprint.png"),
    iconAnchor: [20, 40],
    popupAnchor: [0, -35],
    iconSize: [60, 60],
    shadowSize: [29, 40],
    shadowAnchor: [7, 40],
})

export class MyMap extends React.Component {
    constructor(props) {
        super(props);
        this.refmarker = React.createRef();
        this.state = {
            lat: 34.069156,
            lng: -118.444180,
            zoom: 16,
            marker: {
                lat: 34.069156,
                lng: -118.444180,
            },
        };
        this.updatePosition = this.updatePosition.bind(this);
    }

    updatePosition() {
        const marker = this.refmarker.current;
        if (marker != null) {
            this.setState({
                marker: marker.leafletElement.getLatLng(),
            })
        }
    }

    render() {
        const position = [this.state.lat, this.state.lng];
        const markerPosition = [this.state.marker.lat, this.state.marker.lng]
        return (
            <Map center={position} zoom={this.state.zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker draggable={true} ref={this.refmarker} position={markerPosition} icon={mapIcon} onDragend={this.updatePosition}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </Map>
        );
    }
}
