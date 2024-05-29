import { IconBed, IconTrekking, IconWallet } from "@tabler/icons-react";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section className="bg-grey-10 ">
      <div className="container mx-auto">
        <SectionHeading title="our" subtitle="services" />

        <div className="grid grid-cols-3 gap-5">
          <ServiceCard
            icon={<IconWallet size={45} />}
            title="Saving Money"
            text="Our cost-effective solutions help you save money without compromising on quality. Whether it’s budget-friendly accommodations, discounted travel packages, or smart spending tips, we’ve got your back."
          />

          <ServiceCard
            icon={<IconTrekking size={45} />}
            title="Endless Hiking"
            text="Embark on exhilarating hiking adventures that seem to stretch forever. Explore rugged trails, lush forests, and breathtaking vistas. Our experienced guides will lead you to hidden gems and unforgettable views."
          />

          <ServiceCard
            icon={<IconBed size={45} />}
            title="Amazing Comfort"
            text="Indulge in luxurious comfort during your travels. From cozy accommodations to pampering amenities, we prioritize your relaxation. After a day of exploration, unwind in style and recharge for the next adventure"
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
