export const weatherRequest = async coords => {
  let [lat, lon] = coords;
  let url =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=d0a10211ea3d36b0a6423a104782130e";
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

export const geoLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        resolve([position.coords.latitude, position.coords.longitude]);
      });
    } else {
      reject([51.476852, -0.0005]);
    }
  });
};
