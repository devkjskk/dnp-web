"use client";

import { useState } from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

import { search } from "@/lib/longdo-map";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";

type MapProps = {
  position: [number, number];
  zoom?: number;
  onSelect?: (place: any) => void;
  searchable?: boolean;
};
export function Map({ position, zoom = 16, onSelect, searchable }: MapProps) {
  const [places, setPlaces] = useState([]);
  const [loadingPlaces, setLoadingPlaces] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSearch = async (searchText: string) => {
    setSearchText(searchText);
    setLoadingPlaces(true);

    try {
      const response = await search(searchText);
      const { data } = await response.json();

      const places = data.filter((place: any) => place.lat && place.lon);

      setPlaces(places);
      setLoadingPlaces(false);
    } catch (error) {
      console.error("Error while search the places:", error);
    }
  };

  const handleSelect = (place: any) => {
    setSearchText(place.name);

    if (onSelect) {
      onSelect(place);
    }
  };

  return (
    <div className="w-full h-full">
      <MapContainer
        center={position}
        zoom={zoom}
        scrollWheelZoom={true}
        className="w-full h-full"
        style={{
          zIndex: 10,
        }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>
            ตำแหน่งที่ตั้ง
            <br />
            ละติจูด: {position[0]}
            <br />
            ลองจิจูด: {position[1]}
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
          <Input
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch(searchText);
              }
            }}
            className="bg-white"
            placeholder="ค้นหาสถานที่..."
            value={searchText}
          />
          <ScrollArea className="bg-white rounded-lg mt-1 max-h-48 h-auto">
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
