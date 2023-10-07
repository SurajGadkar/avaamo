const fs = require("fs");

// custom function to sort the data in alphabetical order
const alphabticalSort = (a, b) => {
  const personA = a.name.toLowerCase();
  const personB = b.name.toLowerCase();

  if (personA < personB) return -1;
  if (personA > personB) return 1;
  return 0;
};

// Read input JSON file
fs.readFile("input_data.json", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  try {
    const inputData = JSON.parse(data);

    // Calculate total age and average age
    const totalAge = inputData.reduce((total, person) => total + person.age, 0);
    const averageAge = totalAge / inputData.length;
    //console.log(averageAge)

    // Filter people who are 30 years old or older
    const filteredData = inputData.filter((person) => person.age >= 30);

    // Sort the filtered data by alphabtical order
    filteredData.sort(alphabticalSort);

    // Updated data to be written to the file
    const updatedData = {
      averageAge,
      filteredData,
    };

    // Write the updated data to output_data.json file
    fs.writeFile(
      "output_data.json",
      JSON.stringify(updatedData, null, 2),
      "utf8",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Sucessfully written to output_file.json");
        }
      }
    );
  } catch (error) {
    console.error(error);
  }
});
