import React from 'react';
import Search from "react-leaflet-search";


const mapSearch = (props) => {

    return (
        <Search position="topleft"
        provider="OpenStreetMap" providerOptions={{ region: "co" }} />
    )
}

export default mapSearch;