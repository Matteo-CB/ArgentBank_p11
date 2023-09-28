const Hero = ({data}: any) => {
    
    
    return (
        <section className="hero-content">
        <h2 className="sr-only">{data.title}</h2>
        {data.content.map((paragraph: string[], key: string) => {
            return <p key={key} className={paragraph[1]}>{paragraph[0]}</p>
        })}
      </section>
    );
};

export default Hero;