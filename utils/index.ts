export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "32050e994bmshb8f062abc0d59b3p1cafb1jsnb36fad12d732",
    "X-RapidAPI-Host": "car-api2.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
        headers: {
            'X-RapidAPI-Key': '32050e994bmshb8f062abc0d59b3p1cafb1jsnb36fad12d732',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
          }
    }
  );
   return response.json();
}
