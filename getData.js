const axios = require("axios");
const fs = require("fs");

const API_URL =
  "https://res.cloudinary.com/drjttrnae/raw/upload/v1696592942/input_data.json";

const getData = async () => {
  try {
    let response = await axios.get(API_URL);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const writeDataToFile = async () => {
  const response = getData();

  response.then((data) => {
    const jsonData = JSON.stringify(data, null, 2);
    const file = "input_data.json";

    fs.writeFile(file, jsonData, "utf8", (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Success!");
      }
    });
  });
};

writeDataToFile();
