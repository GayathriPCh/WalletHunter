import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import { roadmap } from "../constants";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading tag="Ready to get started" title="Meet our team!" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => (
          <div
            className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
              item.colorful ? "bg-conic-gradient" : "bg-n-6"
            }`}
            key={item.id}
          >
            <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
              <div className="relative z-1">
                <h4 className="h4 mb-4">{item.title}</h4>
                <p className="body-2 text-n-4">{item.text}</p>
              </div>
            </div>
          </div>
        ))}

        <Gradient />
      </div>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="/roadmap">Our roadmap</Button>
      </div>
    </div>
  </Section>
);

export default Roadmap;