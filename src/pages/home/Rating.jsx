import styles from "./style.module.css";

const Rating = ({ ratingData, rating, setRating }) => {
  return (
    <>
      {ratingData?.map((item, index) => (
        <li
          key={index}
          className={`d-flex align-items-center justify-content-center rounded-circle ${
            rating >= item.value ? styles.active : null
          }`}
          onClick={() => setRating(item.value)}
        >
          {item.value}
        </li>
      ))}
    </>
  );
};

export default Rating;
