export const convertLatLngStrToArray = (latLng: string): [number, number] => {
  return latLng.split(",").map((item) => parseFloat(item)) as [number, number];
};
