import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Star from "../../utils/svgs/Star";
import ThankYou from "../../utils/svgs/ThankYou";
import Rating from "./Rating";
import styles from "./style.module.css";

const ratingData = [
  {
    value: 1,
  },
  {
    value: 2,
  },
  {
    value: 3,
  },
  {
    value: 4,
  },
  {
    value: 5,
  },
];
const Home = () => {
  const [step, setStep] = useState(true);
  const [rating, setRating] = useState(0);

  const handleStep = () => {
    rating > 0 ? setStep(false) : alert("Please Rate to Submit");
  };

  return (
    <>
      <section className={`${styles.wrapper} d-flex align-items-center`}>
        <Container>
          <Row>
            <Col
              xs={12}
              md={{ span: 6, offset: 3 }}
              lg={{ span: 4, offset: 4 }}
            >
              <div className={`${styles.cardWrapper} py-5 px-4`}>
                {step ? (
                  <div>
                    <span
                      className={`${styles.iconWrapper} rounded-circle d-flex align-items-center justify-content-center`}
                    >
                      <Star />
                    </span>
                    <article className={`${styles.StateOne} mt-4`}>
                      <h1 className={`text-white mb-0`}>How did we do?</h1>
                      <p className="mb-0 mt-2">
                        Please let us know how we did with your support request.
                        All feedback is appreciated to help us improve our
                        offering!
                      </p>
                    </article>
                    <div className="mt-3">
                      <ul
                        className={`list-unstyled d-flex justify-content-between ${styles.ratingWrapper}`}
                      >
                        <Rating
                          ratingData={ratingData}
                          rating={rating}
                          setRating={setRating}
                        />
                      </ul>
                    </div>
                    <button
                      className={`rounded-pill outline-0 border-0 w-100 text-uppercase shadow-lg p-1 mt-2 ${styles.button}`}
                      onClick={handleStep}
                    >
                      Submit
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="text-center">
                      <div className="text-center">
                        <ThankYou />
                      </div>
                      <span
                        className={`${styles.ratingStatus} mt-4 rounded-pill px-3 py-1`}
                      >
                        You selected {rating} out of 5
                      </span>
                      <article className={`${styles.StateTwo}`}>
                        <h2 className={`text-white mt-4 mb-0`}>Thank You!</h2>
                        <p className="mt-2 mb-0">
                          We appreciate you taking the time to give a rating. If
                          you ever need more support, don't hesitate to get in
                          touch!
                        </p>
                      </article>
                    </div>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
