const { data } = require('./data');

// Function to filter the data based on the pattern
const filterData = (pattern, data) => {
  const filteredData = [];

  for (const country of data) {
    const filteredCountry = { ...country, people: [] };

    for (const person of country.people) {
      const filteredPerson = { ...person, animals: [] };

      for (const animal of person.animals) {
        if (animal.name.includes(pattern)) {
          filteredPerson.animals.push(animal);
        }
      }

      if (filteredPerson.animals.length > 0) {
        filteredCountry.people.push(filteredPerson);
      }
    }

    if (filteredCountry.people.length > 0) {
      filteredData.push(filteredCountry);
    }
  }

  if (filteredData.length > 0) return filteredData;
};

// Function to count the number of children
const countChildren = (data) => {
  const countedData = [];

  for (const country of data) {
    const countedCountry = { ...country, people: [] };

    for (const person of country.people) {
      const countedPerson = { ...person, animals: [] };

      for (const animal of person.animals) {
        countedPerson.animals.push(animal);
      }

      countedPerson.name += ` [${countedPerson.animals.length}]`;
      countedCountry.people.push(countedPerson);
    }

    countedCountry.name += ` [${countedCountry.people.length}]`;
    countedData.push(countedCountry);
  }

  return countedData;
};

// Pretty print a json
const prettyPrint = (item) => {
  if (!item) return;
  console.log(JSON.stringify(item, null, 2))
}

// Command-line interface
const args = process.argv.slice(2);
const command = args[0];

if (command.startsWith('--filter=')) {
  const pattern = command.split('=')[1];
  const filteredData = filterData(pattern, data);
  prettyPrint(filteredData);
} else if (command === '--count') {
  const countedData = countChildren(data);
  prettyPrint(countedData);
} else {
  console.log('Invalid command');
}

module.exports = {
  countChildren,
  filterData
}