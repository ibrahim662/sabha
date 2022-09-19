import React, { useState } from "react";
import "./choice.css";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import Tasbih from "../components/tasbih";
import InfinitTasbih from "./infinitTasbih";

function Choice() {
  const [value, setValue] = useState("نعم");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <div className="choice">
        <h2 style={{textAlign: "center"}}>مرحبا بك في تطبيق سَبِّح</h2>
        <fieldset>
          <legend> هل تريد وضع رقم معين للتسبيح أم لا ؟</legend>
          <FormControl>
            <RadioGroup
              className="check"
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel value="نعم" control={<Radio />} label="نعم" />
              <FormControlLabel value="لا" control={<Radio />} label="لا" />
            </RadioGroup>
          </FormControl>

          {value === "نعم" ? (
            <>
              <Tasbih />
            </>
          ) : (
            <>
              <InfinitTasbih />
            </>
          )}
        </fieldset>
      </div>
      <div className="dev">
        <p>دعواتكم لنا - إ.ج -</p>
      </div>
    </>
  );
}

export default Choice;
