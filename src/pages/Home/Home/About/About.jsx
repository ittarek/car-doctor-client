import React from "react";
import person from "../../../../assets/images/about_us/person.jpg";
import perst from "../../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen  bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row gap-24">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-full rounded-lg shadow-2xl" />
          <img
            src={perst}
            className="w-1/2 absolute border-8  border-sky-200 -right-10 top-1/2 rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold text-[#FF3811]">About Us</h1>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn bg-[#FF3811]">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
