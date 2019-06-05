import React from "react";
import { connect } from "react-redux";
import { css } from "emotion";
import MemoryModal from "./MemoryModal";
import { Map, TileLayer, Marker, Popup, ImageOverlay } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { config } from "../../config";
import { setLocation } from "../../actions";

export const mapIcon = new L.Icon({
    iconUrl: require("../../assets/pawprint.png"),
    iconRetinaUrl: require("../../assets/pawprint.png"),
    iconAnchor: [20, 40],
    popupAnchor: [0, -35],
    iconSize: [25, 25],
    shadowSize: [29, 40],
    shadowAnchor: [7, 40]
});

class MyMap extends React.Component {
    constructor(props) {
        super(props);
        this.refmarker = React.createRef();
        this.state = {
            lat: 34.069156,
            lng: -118.44418,
            zoom: 17,
            marker: {
                lat: 34.069156,
                lng: -118.44418
            }
        };
        this.updatePosition = this.updatePosition.bind(this);
        this.removeModal = this.removeModal.bind(this);
        this.markerOnClick = this.markerOnClick.bind(this);
    }

    updatePosition() {
        const marker = this.refmarker.current;
        console.log(marker.leafletElement.getLatLng());
        if (marker != null) {
            this.setState({
                marker: marker.leafletElement.getLatLng()
            });
        }
    }

    markerOnClick(setLocation, locName) {
        setLocation(locName);
        this.setState({ displayModal: true });
    }

    removeModal() {
        this.setState({ displayModal: false });
    }

    render() {
        const position = [this.state.lat, this.state.lng];
        const markerPosition = [this.state.marker.lat, this.state.marker.lng];
        return (
            <div
                className={css`
                    height: 100%;
                    width: 100%;
                    position: relative;
                `}
            >
                <Map
                    center={position}
                    zoom={this.state.zoom}
                    minZoom={16}
                    maxBounds={[[34.07925, -118.45774], [34.06278, -118.4362]]}
                >
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <ImageOverlay
                        url={require("../../assets/map.png")}
                        bounds={[[34.07925, -118.45774], [34.06278, -118.4362]]}
                    />
                    {config.locations.map(loc => (
                        <Marker
                            key={loc.name}
                            position={[loc.lat, loc.long]}
                            icon={mapIcon}
                            onClick={() =>
                                this.markerOnClick(
                                    this.props.setLocation,
                                    loc.name
                                )
                            }
                        >
                            <Popup>
                                {loc.nickname ? loc.nickname : loc.name}
                            </Popup>
                        </Marker>
                    ))}
                    <Marker
                        draggable={true}
                        ref={this.refmarker}
                        position={markerPosition}
                        icon={mapIcon}
                        onDragend={this.updatePosition}
                    >
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </Map>
                {this.state.displayModal && (
                    <MemoryModal removeModal={this.removeModal} />
                )}
            </div>
        );
    }
}

const mapDispatchToProps = {
    setLocation
};

export default connect(
    null,
    mapDispatchToProps
)(MyMap);
