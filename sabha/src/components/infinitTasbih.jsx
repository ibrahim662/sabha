import React, {useState} from 'react'
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Button } from "@mui/material";

function InfinitTasbih() {
    const [count, setCount] = useState(1);
const increment = () => {
    setCount(count + 1)
}
  return (
    <div className="infinit">
    <CircularProgressbar
    className="rounds"
      value={count}
      text={count}
      maxValue={count}
    />
    <Button variant="outlined" onClick={increment} >إبدأ التسبيح</Button>
  </div>
  )
}

export default InfinitTasbih