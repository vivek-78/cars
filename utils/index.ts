export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "32050e994bmshb8f062abc0d59b3p1cafb1jsnb36fad12d732",
    "X-RapidAPI-Host": "car-api2.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: {
        "X-RapidAPI-Key": "32050e994bmshb8f062abc0d59b3p1cafb1jsnb36fad12d732",
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
      },
    }
  );
  return response.json();
}
export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
