// const fetch = require('node-fetch');

// const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
// const options = {
//   method: 'GET',
//   headers: {
//     'x-rapidapi-key': 'e052c32d88msh0f6492d5681461ap1366c0jsn275959365fe0',
//     'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
//   },
// };

// try {
//   const response = await fetch(url, options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }

// Let's create a function in order to use this API.

export async function fetchCars() {
  const headers = {
    'x-rapidapi-key': 'e052c32d88msh0f6492d5681461ap1366c0jsn275959365fe0',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera',
    {
      headers: headers,
    }
  );

  const result = await response.json();
  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars;
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on the mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
