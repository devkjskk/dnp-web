export const search = async (keyword: string) => {
  const params = new URLSearchParams({
    keyword,
    area: "10",
    span: "100km",
    limit: "20",
    key: `${process.env.NEXT_PUBLIC_LONGDO_MAP_KEY}`,
  }).toString();

  return fetch(`https://search.longdo.com/mapsearch/json/search?${params}`);
};

export const getAddressByLatLng = async (lat: number, lng: number) => {
  const params = new URLSearchParams({
    lat: lat.toString(),
    lon: lng.toString(),
    key: `${process.env.NEXT_PUBLIC_LONGDO_MAP_KEY}`,
  }).toString();

  return fetch(`https://api.longdo.com/map/services/address?${params}`);
};
