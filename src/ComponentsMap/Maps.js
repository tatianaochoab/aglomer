import React from 'react';
import L from 'leaflet'
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { FiMapPin } from 'react-icons/fi';
import MapSearch from './MapSearch';

var myIcon = L.icon({
    iconUrl: 'https://cdn2.iconfinder.com/data/icons/vehicle-18/100/transport-08-512.png', 	
    iconSize: [25, 41],
    inconAnchor: [12.5, 41],
    popupAnchor: [0, -41]
});


const Maps = ({bool, lat, lng, zn, typeClass}) => {
	

    return (
        <div className={typeClass} >
            {bool&&<div className='title-map'><h2>Busca el lugar de tu interés!!</h2></div>}
            <Map center={[lat, lng]} zoom={zn} className='map'>
                {bool&&<MapSearch />}
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Marker position={[lat, lng]} icon={myIcon}>
                    <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                </Marker>
            </Map>
        </div>
    )
}

export default Maps;
