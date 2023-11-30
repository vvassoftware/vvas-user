import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";

export default function Location({ school }) {
  return (
    <div className="mt-7 px-5">
      <h3 className="text-[26px] font-bold text-darkBlue">
        Location
      </h3>

      <div className="mt-3 overflow-hidden relative z-10">
        <MapContainer
          center={[
            school.data.coords[0].latitude,
            school.data.coords[0].longitude,
          ]}
          zoom={14}
          scrollWheelZoom={false}
          style={{ height: 300 }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[
              school.data.coords[0].latitude,
              school.data.coords[0].longitude,
            ]}
          >
            <Popup>{/* <FaMarker /> */}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
