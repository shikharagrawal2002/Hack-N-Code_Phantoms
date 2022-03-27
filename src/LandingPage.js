import lottie from "lottie-web";
import { useEffect, useRef } from "react";

const LandingPage = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./Creative3.json"),
    });
  }, []);

  return (
    <div className="landing-container">
      <div className="lottie" ref={container}></div>
      <div className="left-content">
        <h1 className="landing-heading">PAWnion</h1>
        <p>
          We here at PAWnion aim to provide the Pet Owners,<br></br>a
          destination to their long pet care journey! <br></br>
          Pets are an integral part of our livelihood and for many a part of
          their life. <br></br>
          <br></br>They just require our attention and care to <br></br>keep
          them up and active. <br></br>
          <br></br>
          For this the people need the right direction and We aim to help them
          in it!!
        </p>
        <div></div>
      </div>
    </div>
  );
};

export default LandingPage;
