import Doctor from "./doctor.png";
import Person from "./person.png";
import Special from "./special.png";
import Phone from "./phone.png";
import search from "./search.png";

const Doctors = () => {
  return (
    <div className="doctors-container">
      <h1>DOCTORS NEAR YOU </h1>
      <div className="search">
        <img className="searchIcon" src={search} alt="search" />
        <h2>Search by Location </h2>
      </div>
      <div className="doctorContent">
        <div className="doctorCard">
          <h2>DUMMY HOSPITAL</h2>
          <img
            className="doctorPhoto"
            src={Doctor}
            width="105"
            height="120"
            alt="Doctor"
          />
          <div className="detail">
            <img
              className="detail-img"
              width="45"
              height="40"
              src={Person}
              alt="person"
            />
            <p className="detail-p">NAME</p>
          </div>
          <div className="detail">
            <img
              className="detail-img"
              width="45"
              height="45"
              src={Special}
              alt="person"
            />
            <p className="detail-p">VETERANIAN</p>
          </div>
          <div className="detail">
            <img className="detail-img" src={Phone} alt="person" />
            <p className="detail-p">+91 0000000000 </p>
          </div>
          <hr></hr>
          <div>
            <h2>BOOK APOINTMENT</h2>
          </div>
        </div>
        <div className="doctorCard">
          <h2>DUMMY HOSPITAL</h2>
          <img
            className="doctorPhoto"
            src={Doctor}
            width="105"
            height="120"
            alt="Doctor"
          />
          <div className="detail">
            <img
              className="detail-img"
              width="45"
              height="40"
              src={Person}
              alt="person"
            />
            <p className="detail-p">NAME</p>
          </div>
          <div className="detail">
            <img
              className="detail-img"
              width="45"
              height="45"
              src={Special}
              alt="person"
            />
            <p className="detail-p">VETERANIAN</p>
          </div>
          <div className="detail">
            <img className="detail-img" src={Phone} alt="person" />
            <p className="detail-p">+91 0000000000 </p>
          </div>
          <hr></hr>
          <div>
            <h2>BOOK APOINTMENT</h2>
          </div>
        </div>
        <div className="doctorCard">
          <h2>DUMMY HOSPITAL</h2>
          <img
            className="doctorPhoto"
            src={Doctor}
            width="105"
            height="120"
            alt="Doctor"
          />
          <div className="detail">
            <img
              className="detail-img"
              width="45"
              height="40"
              src={Person}
              alt="person"
            />
            <p className="detail-p">NAME</p>
          </div>
          <div className="detail">
            <img
              className="detail-img"
              width="45"
              height="45"
              src={Special}
              alt="person"
            />
            <p className="detail-p">VETERANIAN</p>
          </div>
          <div className="detail">
            <img className="detail-img" src={Phone} alt="person" />
            <p className="detail-p">+91 0000000000 </p>
          </div>
          <hr></hr>
          <div>
            <h2>BOOK APOINTMENT</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
