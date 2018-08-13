const fetch = require("node-fetch");
const url =
  "https://therapy-box.co.uk/hackathon/clothing-api.php?username=swapnil";

const dataReq = async (req, res, next) => {
  try {
    let result = await fetch(url);
    let json = await result.json();
    res.send(json);
  } catch (err) {
    console.log("data request error", err);
  }
  next();
};

module.exports = dataReq;
