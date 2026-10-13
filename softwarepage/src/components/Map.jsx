import style from "../styles/Location.module.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

const position = [19.48266, -70.661591];

function Map() {
  return (
    <div className={style.Container_Map_Info} aria-label="Mapa de ubicación de SPS Software">
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        <Marker position={position} />
      </MapContainer>
    </div>
  );
}

export default Map;
