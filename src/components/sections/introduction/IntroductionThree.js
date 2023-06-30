import React from "react";

import SectionTitle from "../../other/SectionTitle";
import Container from "../../other/Container";

const data = [
  {
    title: "Step 1",
    description: "Choose Your Products",
    image: "/assets/images/sections/introduction/three/step-1.png",
  },
  {
    title: "Step 2",
    description: "Fill Essential Details",
    image: "/assets/images/sections/introduction/three/step-2.png",
  },
  {
    title: "Step 3",
    description: "Complete Your Payment",
    image: "/assets/images/sections/introduction/three/step-3.png",
  },
  {
    title: "Step 4",
    description: "Get Contacted by Our Experts",
    image: "/assets/images/sections/introduction/three/step-4.png",
  },
];

function IntroductionThree() {
  return (
    <div className="introduction-three">
      <Container>
        <div className="introduction-three-content">
          <SectionTitle
            title="Working Process"
            className="-center -title-white -coffee"
            style={{ marginBottom: 95 / 16 + "em" }}
          />
          <div className="introduction-three-steps">
            {data.map((item, index) => (
              <div key={index} className="introduction-three-steps-item">
                <img
                  src={item.image}
                  alt="Step image"
                />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default React.memo(IntroductionThree);
