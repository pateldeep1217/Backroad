import SectionHeading from "./SectionHeading";
import TourCard from "./TourCard";

const Tours = () => {
  return (
    <section className="">
      <div className="container mx-auto">
        <SectionHeading title="featured" subtitle="tours" />
        <div className="grid gap-5 px-5 md:grid-cols-2 lg:grid-cols-3">
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </div>
      </div>
    </section>
  );
};

export default Tours;
