import React from "react";
import styles from "./Categories.module.css";
import foodImg from "../../../assets/CategoryImage/food.jpg";
import healthImg from "../../../assets/CategoryImage/health.jpg";
import travelImg from "../../../assets/CategoryImage/Travel.jpg";
import movieImg from "../../../assets/CategoryImage/movies.jpg";
import educationImg from "../../../assets/CategoryImage/education.jpg";
import allImg from "../../../assets/CategoryImage/all-category.jpeg";

const Categories = ({ handleCategoryClick, categories, selectedCategory }) => {
  const images = {
    FOOD: foodImg,
    HEALTH: healthImg,
    TRAVEL: travelImg,
    MOVIE: movieImg,
    EDUCATION: educationImg,
  };

  return (
    <div className={styles.categories}>
      <div
        className={styles.category}
        onClick={() => handleCategoryClick("All")}
        style={{
          backgroundImage: `linear-gradient(#00000099, #00000099),url(${allImg})`,
          border: "All" === selectedCategory ? "0.3rem solid #73abff" : "none",
        }}
      >
        <h3 className={styles.categoryName}>All</h3>
      </div>

      {categories &&
        categories.map((category, index) => (
          <div
            className={styles.category}
            key={index}
            onClick={() => handleCategoryClick(category)}
            style={{
              backgroundImage: `linear-gradient(#00000099, #00000099),${
                category === "FOOD"
                  ? `url(${images.FOOD})`
                  : category === "TRAVEL"
                  ? `url(${images.TRAVEL})`
                  : category === "MOVIE"
                  ? `url(${images.MOVIE})`
                  : category === "EDUCATION"
                  ? `url(${images.EDUCATION})`
                  : `url(${images.HEALTH})`
              }`,
              border:
                category === selectedCategory ? "0.3rem solid #73abff" : "none",
            }}
          >
            <h3 className={styles.categoryName}>{category}</h3>
          </div>
        ))}
    </div>
  );
};

export default Categories;
