import CardService from "../components/CardService";

const Services = () => {
  return (
    <section className="features">
    <h2 className="sr-only">Features</h2>
    
    <CardService data= {{
      src: "./img/icon-chat-min.png",
      alt: "Chat Icon",
      title: "You are our #1 priority",
      content: `Need to talk to a representative? You can get in touch through our
      24/7 chat or through a phone call in less than 5 minutes.`
    }}/>
    <CardService data= {{
      src: "./img/icon-money-min.png",
      alt: "Money",
      title: "More savings means higher rates",
      content: `The more you save with us, the higher your interest rate will be!`
    }}/>
    <CardService data= {{
      src: "./img/icon-security-min.png",
      alt: "Shield",
      title: "Security you can trust",
      content: `We use top of the line encryption to make sure your data and money
      is always safe.`
    }}/>
    
  </section>
  );
};

export default Services;
