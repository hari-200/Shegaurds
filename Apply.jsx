import React from "react";
import Slider from "react-slick";
import { Container, Card, Button } from "react-bootstrap";
import { MortarboardFill, BriefcaseFill, PeopleFill, JournalBookmarkFill } from "react-bootstrap-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Apply.css"; // Ensure CSS is properly imported

const applicants = [
  { title: "Students", description: "Undergraduate and postgraduate students looking to build cybersecurity skills.", icon: <MortarboardFill size={50} className="text-primary" /> },
  { title: "Academicians", description: "Professors, researchers, and educators eager to integrate cybersecurity into their curriculum.", icon: <JournalBookmarkFill size={50} className="text-success" /> },
  { title: "Job Seekers", description: "Aspiring professionals seeking opportunities in the cybersecurity industry.", icon: <BriefcaseFill size={50} className="text-warning" /> },
  { title: "Professionals", description: "Working professionals who want to upgrade their cybersecurity knowledge.", icon: <PeopleFill size={50} className="text-danger" /> },
  { title: "Women in Career Break", description: "Women looking to re-enter the workforce with cybersecurity expertise.", icon: <PeopleFill size={50} className="text-info" /> },
];

const CustomPrevArrow = ({ onClick }) => (
  <Button className="slick-prev-btn" onClick={onClick}>{"❮"}</Button>
);

const CustomNextArrow = ({ onClick }) => (
  <Button className="slick-next-btn" onClick={onClick}>{"❯"}</Button>
);

const WhoCanApply = () => {
  const settings = {
    dots: true, infinite: true, speed: 500, slidesToShow: 2, slidesToScroll: 1, autoplay: true, autoplaySpeed: 3000,
    responsive: [{ breakpoint: 992, settings: { slidesToShow: 1 } }],
    prevArrow: <CustomPrevArrow />, nextArrow: <CustomNextArrow />,
  };

  return (
    <Container fluid className="text-black d-flex flex-column justify-content-center align-items-center py-5 bg-black">
      <h1 className="text-center apply">Who Can Apply?</h1>
      <div className="carousel-container">
        <Slider {...settings}>
          {applicants.map((applicant, index) => (
            <div key={index} className="d-flex justify-content-center">
              <Card className="apply-box text-center p-4">
                <div className="icon">{applicant.icon}</div>
                <Card.Title className="mt-2">{applicant.title}</Card.Title>
                <Card.Text className="mt-2 change">{applicant.description}</Card.Text>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default WhoCanApply;




