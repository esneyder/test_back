const express = require("express");
const axios = require("axios");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/getvalue/:value", async (req, res) => {
  await getValue();

  res.send("ok");
});

const getValue = async () => {
  const PARAM = [
    "AAPL",
    "GOOGL",
    "AMZN",
    "TSLA",
    "FB",
    "TWTR",
    "UBER",
    "LYFT",
    "SNAP",
    "SHOP",
  ];
  let AAPL =
    "https://financialmodelingprep.com/api/v3/quote-short/" +
    PARAM[0] +
    "?apikey=c13a5d2ecf7cc6b8c50c06d7e1dfce22";
  let GOOGL =
    "https://financialmodelingprep.com/api/v3/quote-short/" +
    PARAM[1] +
    "?apikey=c13a5d2ecf7cc6b8c50c06d7e1dfce22";
  let AMZN =
    "https://financialmodelingprep.com/api/v3/quote-short/" +
    PARAM[2] +
    "?apikey=c13a5d2ecf7cc6b8c50c06d7e1dfce22";
  let TSLA =
    "https://financialmodelingprep.com/api/v3/quote-short/" +
    PARAM[3] +
    "?apikey=c13a5d2ecf7cc6b8c50c06d7e1dfce22";
  let FB =
    "https://financialmodelingprep.com/api/v3/quote-short/" +
    PARAM[4] +
    "?apikey=c13a5d2ecf7cc6b8c50c06d7e1dfce22";
  let TWTR =
    "https://financialmodelingprep.com/api/v3/quote-short/" +
    PARAM[5] +
    "?apikey=c13a5d2ecf7cc6b8c50c06d7e1dfce22";
  let UBER =
    "https://financialmodelingprep.com/api/v3/quote-short/" +
    PARAM[6] +
    "?apikey=c13a5d2ecf7cc6b8c50c06d7e1dfce22";
  let LYFT =
    "https://financialmodelingprep.com/api/v3/quote-short/" +
    PARAM[7] +
    "?apikey=c13a5d2ecf7cc6b8c50c06d7e1dfce22";
  let SNAP =
    "https://financialmodelingprep.com/api/v3/quote-short/" +
    PARAM[8] +
    "?apikey=c13a5d2ecf7cc6b8c50c06d7e1dfce22";
  let SHOP =
    "https://financialmodelingprep.com/api/v3/quote-short/" +
    PARAM[9] +
    "?apikey=c13a5d2ecf7cc6b8c50c06d7e1dfce22";

  const requestOne = axios.get(AAPL);
  const requestTwo = axios.get(GOOGL);
  const requestThree = axios.get(AMZN);
  const requestFour = axios.get(TSLA);
  const requestFive = axios.get(FB);
  const requestSix = axios.get(TWTR);
  const requestSeven = axios.get(UBER);
  const requestEigth = axios.get(LYFT);
  const requestNine = axios.get(SNAP);
  const requestTen = axios.get(SHOP);

  axios
    .all([
      requestOne,
      requestTwo,
      requestThree,
      requestFour,
      requestFive,
      requestSix,
      requestSeven,
      requestEigth,
      requestNine,
      requestTen,
    ])
    .then(
      axios.spread((...responses) => {
        const responseOne = responses[0];
        const responseTwo = responses[1];
        const responesThree = responses[2];
        const responesFour = responses[3];
        const responesSix = responses[4];
        const responesSeven = responses[5];
        const responesEigth = responses[6];
        const responesNine = responses[7];
        const responesTen = responses[8];

        console.log(responseOne.data);
        console.log(responseTwo.data);
        console.log(responesThree.data);
        console.log(responesFour.data);
        console.log(responesSix.data);
        console.log(responesSeven.data);
        console.log(responesEigth.data);
        console.log(responesNine.data);
        console.log(responesTen.data);
      })
    )
    .catch((errors) => {
      // react on errors.
      console.error(errors);
    });
};

app.listen(8000, () => {
  console.log("Example app listening on port 8000!");
});
