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
