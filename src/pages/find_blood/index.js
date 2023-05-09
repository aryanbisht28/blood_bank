import React, { useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "../find_blood/index.css";

function Index() {
  const [blood, setBlood] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const handleChange = (event) => {
    setBlood(event.target.value);
  };
  const handleChange1 = (event) => {
    setState(event.target.value);
  };
  const handleChange2 = (event) => {
    setDistrict(event.target.value);
  };
  return (
    <div className="register-box">
      <div className="red-box">
        <h5>Find Blood</h5>
      </div>
      <Card className="white-box">
        <div class="red-pattern"></div>
        <div class="find-form">
          <h3 style={{ marginBottom: "2rem" }}>Recipient Details</h3>
          <FormControl fullWidth style={{ width: "45%" }}>
            <InputLabel id="demo-simple-select-standard-label">
              Blood Group
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={blood}
              onChange={handleChange}
              label="Blood Group"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth style={{ width: "45%", marginTop: "1rem" }}>
            <InputLabel id="demo-simple-select-standard-label">
              State
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={state}
              onChange={handleChange}
              label="State"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth style={{ width: "45%", marginTop: "1rem" }}>
            <InputLabel id="demo-simple-select-standard-label">
              District
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={state}
              onChange={handleChange}
              label="District"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </Card>
    </div>
  );
}

export default Index;
