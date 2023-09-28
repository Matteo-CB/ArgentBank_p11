import Hero from "../components/Hero";

const HeaderHome = () => {
  return (
    <div className="hero">
      <Hero data={{
        title: 'Promoted Content',
        content: [
          ['No fees.', 'subtitle'],
          ['No minimum deposit.', 'subtitle'],
          ['High interest rates.', 'subtitle'],
          ['Open a savings account with Argent Bank today!', 'text'],
        ]
      }}/>
    </div>
  );
};

export default HeaderHome;
