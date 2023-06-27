// Import the functions to be tested
const { filterData, countChildren } = require('./app');

describe('filterData', () => {
  const data = [
    {
      name: 'Country A',
      people: [
        {
          name: 'Person A',
          animals: [
            { name: 'Cat' },
            { name: 'Dog' },
            { name: 'Fish' }
          ]
        },
        {
          name: 'Person B',
          animals: [
            { name: 'Cat' },
            { name: 'Bird' }
          ]
        }
      ]
    },
    // Add more sample data for testing
  ];

  test('should filter data based on the pattern', () => {
    const pattern = 'Cat';
    const filteredData = filterData(pattern, data);

    const expectedData = [
      {
        name: 'Country A',
        people: [
          {
            name: 'Person A',
            animals: [
              { name: 'Cat' }
            ]
          },
          {
            name: 'Person B',
            animals: [
              { name: 'Cat' }
            ]
          }
        ]
      }
    ];

    expect(filteredData).toEqual(expectedData);
  });

  test('should return nothing in case no item matches the pattern', () => {
    const pattern = 'ab';
    const filteredData = filterData(pattern, data);

    expect(filteredData).toEqual(undefined);
  });

  // Add more test cases for different patterns and data scenarios
});

describe('countChildren', () => {
  const data = [
    {
      name: 'Country A',
      people: [
        {
          name: 'Person A',
          animals: [
            { name: 'Cat' },
            { name: 'Dog' },
            { name: 'Fish' }
          ]
        },
        {
          name: 'Person B',
          animals: [
            { name: 'Cat' },
            { name: 'Bird' }
          ]
        }
      ]
    },
    // Add more sample data for testing
  ];

  test('should count the number of children', () => {
    const countedData = countChildren(data);

    const expectedData = [
      {
        name: 'Country A [2]',
        people: [
          {
            name: 'Person A [3]',
            animals: [
              { name: 'Cat' },
              { name: 'Dog' },
              { name: 'Fish' }
            ]
          },
          {
            name: 'Person B [2]',
            animals: [
              { name: 'Cat' },
              { name: 'Bird' }
            ]
          }
        ]
      }
    ];

    expect(countedData).toEqual(expectedData);
  });

  test('should count the number of children (case person with no animals)', () => {
    const countedData = countChildren([{
        name: 'Test',
        people: [
          {
            name: 'Test person',
            animals: []
          }
        ]
    }]);

    const expectedData = [
      {
        name: 'Test [1]',
        people: [
          { name: 'Test person [0]', animals: [] },
        ]
      }
    ];

    expect(countedData).toEqual(expectedData);
  });
});
