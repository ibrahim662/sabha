import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Input, Button } from "@mui/material";

import "./tasbih.css";
function Tasbih() {
  const [count, setCount] = useState();
  const [numberOfTasbih, setNumberOfTasbih] = useState();

  useEffect(() => {
    setCount(numberOfTasbih);
  }, [numberOfTasbih]);

  const increment = () => {
    setCount(count - 1);
    if (numberOfTasbih === undefined) {
      alert("يرجى إدخال رقم صحيح");
    }
    if (count <= 1) {
      alert("لقد أنهيت التسبيح.. تقبل الله منك");
      window.location.reload(true);
    }
  };
  const handleChange = (event) => {
    event.preventDefault();
    setNumberOfTasbih(event.target.value);
  };

  return (
    <>
      <div className="tasbih-container">
        <Input
          className="input"
          type="number"
          value={numberOfTasbih}
          onChange={handleChange}
          placeholder="أدخل الرقم الذي تريده"
        />
        <div className="round">
          <CircularProgressbar
            value={count}
            text={count}
            maxValue={numberOfTasbih}
          />
        </div>
        <Button variant="outlined" onClick={increment}>
          سبح
        </Button>
      </div>
    </>
  );
}

export default Tasbih;
