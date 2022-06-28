import { storyblokEditable } from "@storyblok/react";

const Title = ({ blok }) => {
  return (
    <div className="py-8 mb-6" {...storyblokEditable(blok)} key={blok._uid}>
      <h1 className="text-5xl font-bold text-center"> {blok.title} </h1>
      <br />
      <h4 className="text-center">{blok.subtitle}</h4>
    </div>
  );
};

export default Title;
