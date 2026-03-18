import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { useState } from "react";
import "leaflet/dist/leaflet.css";

const styles = {
  CONTAINER: "overflow-hidden rounded-xl border bg-white",
  BODY: "flex h-[500px]",
  LEFT: "w-1/2 overflow-y-auto border-r p-4",
  RIGHT: "w-1/2",
  MAP: "h-full w-full",
};

function MapClickHandler({ onMapClick }) {
  useMapEvents({
    click: () => onMapClick(),
  });

  return null;
}

export default function ParkPlaces({ parkCoordinates, places }) {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const markers = places
    .map((place) => ({
      geocode: [Number(place.latitude), Number(place.longitude)],
      place,
    }))
    .filter(({ geocode }) => geocode.every(Number.isFinite));

  return (
    <section className={styles.CONTAINER}>
      <div className={styles.BODY}>
        <div className={styles.LEFT}>
          {selectedPlace ? (
            <div>
              <h2 className="mb-3 text-xl font-semibold">
                {selectedPlace.title}
              </h2>


              {selectedPlace.bodyText && (
                <div
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: selectedPlace.bodyText }}
                />)
              }
            </div>
          ) : (
            <div className="flex h-full items-center justify-center text-center text-gray-500">
              <p>Click a marker to view place details.</p>
            </div>
          )}
        </div>

        <div className={styles.RIGHT}>
          {markers.length === 0 ? (
            <div className="flex h-full items-center justify-center text-center text-gray-500">
              <p>No mapped places available.</p>
            </div>
          ) : (
            <MapContainer
              className={styles.MAP}
              center={parkCoordinates}
              zoom={12}
            >
              <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <MapClickHandler onMapClick={() => setSelectedPlace(null)} />

              {markers.map((marker) => (
                <Marker
                  key={
                    marker.place.id ||
                    `${marker.geocode[0]}-${marker.geocode[1]}`
                  }
                  position={marker.geocode}
                  eventHandlers={{
                    click: () => setSelectedPlace(marker.place),
                  }}
                >
                  <Popup>{marker.place.title}</Popup>
                </Marker>
              ))}
            </MapContainer>
          )}
        </div>
      </div>
    </section>
  );
}
