import Image from "next/image";
import { Hero, SearchBar, CustomFilter, CarCard } from "@/components";
import { fetchCars } from "@/utils";
import { HomeProps } from "@/types";
import { fuels, yearsOfProduction } from "@/constants";
export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="">
      <Hero />
      <div className="max-width padding-x padding-y mt-12" id="discover">
        <div className="home__text-container">
          <h1 className="font-extrabold text-4xl">Car catalogue</h1>
          <p>Explore Cars You might Like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </div>
        {!isDataEmpty ? (
          <section className="home__cars-wrapper">
            {allCars.map((car) => (
              <CarCard car={car}/>
            ))}
          </section>
        ) : (
          <div className="home__error-container">{allCars?.message}</div>
        )}
      </div>
    </main>
  );
}
