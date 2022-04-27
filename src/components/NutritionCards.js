import React, { useEffect, useState } from "react";
import AppleIcon from "./icon/AppleIcon";
import BurgerIcon from "./icon/BurgerIcon";
import ChickenIcon from "./icon/ChickenIcon";
import FireIcon from "./icon/FireIcon";
import PropTypes from "prop-types";

/**
 * Component for the showing the nutrition cards
 * @param {Object} params
 * @param {Array} params.keyData
 * @return {JSX}
 */

const NutritionCards = ({ keyData }) => {
  const [nutritionData, setNutritionData] = useState(keyData);

  useEffect(() => {
    setNutritionData(keyData);
  }, [keyData]);

  return (
    <div className="nutrition-cards">
      <div className="card">
        <div className="background-icon "></div>
        <div className="container-icon">
          <FireIcon />
        </div>
        <div className="container-unit">
          <p className="unit">{nutritionData?.calorieCount}kCal</p>
          <p className="name-unit">Calories</p>
        </div>
      </div>

      <div className="card">
        <div className="background-icon "></div>
        <div className="container-icon">
          <ChickenIcon />
        </div>
        <div className="container-unit">
          <p className="unit">{nutritionData?.proteinCount}g</p>
          <p className="name-unit">Protéines</p>
        </div>
      </div>

      <div className="card">
        <div className="background-icon "></div>
        <div className="container-icon">
          <AppleIcon />
        </div>
        <div className="container-unit">
          <p className="unit">{nutritionData?.carbohydrateCount}g</p>
          <p className="name-unit">Glucides</p>
        </div>
      </div>

      <div className="card">
        <div className="background-icon "></div>
        <div className="container-icon">
          <BurgerIcon />
        </div>
        <div className="container-unit">
          <p className="unit">{nutritionData?.lipidCount}g</p>
          <p className="name-unit">Lipides</p>
        </div>
      </div>
    </div>
  );
};

export default NutritionCards;

// Props types
NutritionCards.propTypes = {
  keyData: PropTypes.object,
};
