"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

import { search } from "@/lib/longdo-map";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";

type MapProps = {
  position: [number, number];
  zoom?: number;
  onSelect?: (place: any) => void;
  searchable?: boolean;
};
export function Map({ position, zoom = 16, onSelect, searchable }: MapProps) {
  const [pos, setPos] = useState(position);
  const [places, setPlaces] = useState([]);
  const [loadingPlaces, setLoadingPlaces] = useState(false);
  const [tmpSearchText, setTmpSearchText] = useState("");
  const [selectedPlace, setSelectedPlace] = useState<any>(null);
  const markerRef = useRef<any>(null);

  useEffect(() => {
    setPos(position);
  }, [position]);

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPos(marker.getLatLng());

          setSelectedPlace({
            lat: marker.getLatLng().lat,
            lon: marker.getLatLng().lng,
          });
        }
      },
    }),
    []
  );

  const onChange = (e: any) => {
    setTmpSearchText(e.target.value);
  };

  const handleSearch = async () => {
    setLoadingPlaces(true);

    try {
      const response = await search(tmpSearchText);
      const { data } = await response.json();

      const places = data.filter((place: any) => place.lat && place.lon);

      setPlaces(places);
      setLoadingPlaces(false);
    } catch (error) {
      console.error("Error while search the places:", error);
    }
  };

  const handleSelect = (place: any) => {
    setTmpSearchText(place.name);
    setSelectedPlace(place);
  };

  const handleConfirm = () => {
    if (onSelect && selectedPlace) {
      onSelect(selectedPlace);
      setSelectedPlace(null);
    }
  };

  return (
    <div className="w-full h-full">
      <MapContainer
        center={pos}
        zoom={zoom}
        scrollWheelZoom={true}
        className="w-full h-full"
        style={{
          zIndex: 10,
        }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker
          position={pos}
          draggable
          eventHandlers={eventHandlers}
          ref={markerRef}
        >
          <Popup minWidth={90}>
            <span>ตำแหน่งปัจจุบัน</span>
          </Popup>
        </Marker>
      </MapContainer>
      {searchable ? (
        <div
          className="absolute top-36 w-full px-10 "
          style={{
            zIndex: 1000,
          }}
        >
          <div className="flex items-center space-x-2">
            <Input
              onChange={onChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              className="bg-white"
              placeholder="ค้นหาสถานที่..."
              value={tmpSearchText}
            />
            <Button onClick={handleConfirm} disabled={!selectedPlace}>
              เลือกตำแหน่งนี้
            </Button>
          </div>
          <ScrollArea className="bg-white rounded-lg mt-1 max-h-48 h-auto bg-opacity-70">
            <ul>
              {loadingPlaces ? (
                <li className="text-sm text-gray-200 flex justify-center">
                  Loading...
                </li>
              ) : (
                places.map((place: any) => (
                  <li
                    key={place.id}
                    onClick={() => handleSelect(place)}
                    className="p-2 cursor-pointer  hover:bg-gray-50 text-sm flex space-x-1 w-full"
                  >
                    <div>{place.name}</div>
                    <div className="font-light text-gray-500">
                      {place.address.length > 32 ? (
                        <span>{place.address.slice(0, 32)}...</span>
                      ) : (
                        <span>{place.address}</span>
                      )}
                    </div>
                  </li>
                ))
              )}
            </ul>
          </ScrollArea>
        </div>
      ) : null}
    </div>
  );
}

export default Map;
