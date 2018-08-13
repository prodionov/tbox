export const apiRequest = async url => {
  const res = await fetch(url);
  const json = await res.json();
  return json;
};
