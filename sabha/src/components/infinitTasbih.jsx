import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Button } from "@mui/material";
import "./tasbih.css";
function InfinitTasbih() {
  const [count, setCount] = useState(1);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div className="group">
      <div className="infinit">
        <CircularProgressbar
          className="rounds"
          value={count}
          text={count}
          maxValue={count}
        />
        <Button variant="outlined" onClick={increment}>
          سبح
        </Button>
      </div>
    </div>
  );
}

export default InfinitTasbih;
