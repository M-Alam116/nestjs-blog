import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src='/images/site/image.png' alt="An image showing alam" width={250} height={250}/>
      </div>
      <h1>Hi, I'm Muhammad Alam</h1>
      <p>I blog about web development.</p>
    </section>
  );
}

export default Hero;
