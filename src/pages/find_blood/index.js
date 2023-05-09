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
              <MenuItem value={10}>A+</MenuItem>
              <MenuItem value={20}>B+</MenuItem>
              <MenuItem value={30}>AB+</MenuItem>
              <MenuItem value={30}>AB-</MenuItem>
              <MenuItem value={30}>B-</MenuItem>
              <MenuItem value={30}>A-</MenuItem>
              <MenuItem value={30}>o+</MenuItem>
              <MenuItem value={30}>o-</MenuItem>
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
              <MenuItem value={10}>Andra Pradesh</MenuItem>
              <MenuItem value={20}>Arunachal Pradesh</MenuItem>
              <MenuItem value={30}>Assam</MenuItem>
              <MenuItem value={30}>Bihar</MenuItem>
              <MenuItem value={30}>Chattisgarh</MenuItem>
              <MenuItem value={30}>Goa</MenuItem>
              <MenuItem value={30}>Gujrat</MenuItem>
              <MenuItem value={30}>Haryana</MenuItem>
              <MenuItem value={30}>Himachal</MenuItem>
              <MenuItem value={30}>Jharkhand</MenuItem>
              <MenuItem value={30}>Karnatka</MenuItem>
              <MenuItem value={30}>Kerala</MenuItem>
              <MenuItem value={30}>Maharastra</MenuItem>
              <MenuItem value={30}>Manipur</MenuItem>
              <MenuItem value={30}>Meghalya</MenuItem>
              <MenuItem value={30}>Mizoram</MenuItem>
              <MenuItem value={30}>Nagaland</MenuItem>
              <MenuItem value={30}>Punjab</MenuItem>
              <MenuItem value={30}>Rajasthan</MenuItem>
              <MenuItem value={30}>Tamil Nadu</MenuItem>
              <MenuItem value={30}>Kerala</MenuItem>
              <MenuItem value={30}>Telangana</MenuItem>
              <MenuItem value={30}>Uttrakahand</MenuItem>
              <MenuItem value={30}>Uttar Pradesh</MenuItem>
              <MenuItem value={30}>WestBengal</MenuItem>
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
              <MenuItem value={10}>Delhi</MenuItem>
              <MenuItem value={10}>Aligarh</MenuItem>
              <MenuItem value={20}>Agra</MenuItem>
              <MenuItem value={30}>Allahbad</MenuItem>
              <MenuItem value={30}>Amethi</MenuItem>
              <MenuItem value={30}>Auraiya</MenuItem>
              <MenuItem value={30}>Badaun</MenuItem>
              <MenuItem value={30}>Banda</MenuItem>
              <MenuItem value={30}>Bareily</MenuItem>
              <MenuItem value={30}>Basti</MenuItem>
              <MenuItem value={30}>Bijnor</MenuItem>
              <MenuItem value={30}>Ghaziabad</MenuItem>
              <MenuItem value={30}>Faridabad</MenuItem>
              <MenuItem value={30}>Deoria</MenuItem>
              <MenuItem value={30}>Ghazipur</MenuItem>
              <MenuItem value={30}>Gonda</MenuItem>
              <MenuItem value={30}>Hamirpur</MenuItem>
              <MenuItem value={30}>Jaunpur</MenuItem>
              <MenuItem value={30}>Jhansi</MenuItem>
              <MenuItem value={30}>Gonda</MenuItem>
              <MenuItem value={30}>Varansi</MenuItem>
            </Select>
          </FormControl>
        </div>
      </Card>
    </div>
  );
}

export default Index;
