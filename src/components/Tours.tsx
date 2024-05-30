import SectionHeading from "./SectionHeading";
import tour1 from "../assets/images/tour-1.jpeg";
import tour2 from "../assets/images/tour-2.jpeg";
import tour3 from "../assets/images/tour-3.jpeg";
import tour4 from "../assets/images/tour-4.jpeg";
import TourCard from "./TourCard";

const Tours = () => {
  return (
    <section className="">
      <div className="container mx-auto">
        <SectionHeading title="featured" subtitle="tours" />
        <div className="grid gap-5 px-5 md:grid-cols-2 lg:grid-cols-3">
          <TourCard
            imageSrc={tour1}
            date="August 26th, 2020"
            title="Tibet Adventure"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis."
            location="china"
            duration="6 days"
            price="from $2100"
          />
          <TourCard
            imageSrc={tour2}
            date="October 1st, 2020"
            title="Best of Java"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis."
            location="indonesia"
            duration="11 days"
            price="from $1400"
          />
          <TourCard
            imageSrc={tour3}
            date="September 15th, 2020"
            title="Explore Hong Kong"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis."
            location="hong kong"
            duration="8 days"
            price="from $5000"
          />
          <TourCard
            imageSrc={tour4}
            date="December 5th, 2019"
            title="Kenya Highlights"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis."
            location="kenya"
            duration="20 days"
            price="from $3300"
          />
        </div>
      </div>
    </section>
  );
};

export default Tours;
