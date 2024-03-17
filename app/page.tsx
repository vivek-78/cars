import Image from "next/image";
import { Hero, SearchBar, CustomFilter, CarCard } from "@/components";
import { fetchCars } from "@/utils";
export default async function Home() {
  const allCars = await fetchCars();
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
          <div className="home__filter-container">
            <CustomFilter />
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
