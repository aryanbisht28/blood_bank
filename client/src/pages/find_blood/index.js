import React, { useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import "../find_blood/index.css";
import { Link } from "react-router-dom";

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
    <>
      <div style={{ height: "1vh", zIndex: "-1" }}>
        <svg
          width="1700"
          height="870"
          viewBox="0 0 946 968"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          zIndex="-1"
        >
          <g filter="url(#filter0_d_93_102)">
            <path
              d="M897 811.5C731.274 699.342 302.232 960 22.5 960C-257.232 960 -484 733.232 -484 453.5C-484 173.768 -257.232 -53 22.5 -53C302.232 -53 1144.5 979 897 811.5Z"
              fill="url(#paint0_linear_93_102)"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_93_102"
              x="-488"
              y="-53"
              width="1433.96"
              height="1021"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.647059 0 0 0 0 0.643137 0 0 0 0 0.643137 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_93_102"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_93_102"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_93_102"
              x1="-169.5"
              y1="26.9997"
              x2="330.5"
              y2="874.999"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.221679" stop-color="#B32346" />
              <stop offset="0.66922" stop-color="#6A0B37" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.025)",
          height: "4vh",
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          fontSize: "2rem",
          fontFamily: "fantasy",
          fontWeight: "700",
          paddingTop: "0.5rem",
          paddingLeft: "2rem",
          marginTop:'-0.3rem'
        }}
      >
        Rudhir
      </div>
      <div className="register-box" style={{margiTop:'1rem'}}>
        <div className="red-box">
          <h5>Find Blood</h5>
        </div>
        <Card
          className="white-box"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div class="red-pattern" style={{ height: "65vh" }}></div>
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
                <MenuItem value={40}>AB-</MenuItem>
                <MenuItem value={50}>B-</MenuItem>
                <MenuItem value={60}>A-</MenuItem>
                <MenuItem value={70}>o+</MenuItem>
                <MenuItem value={80}>o-</MenuItem>
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
                onChange={handleChange1}
                label="State"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Andra Pradesh</MenuItem>
                <MenuItem value={20}>Arunachal Pradesh</MenuItem>
                <MenuItem value={30}>Assam</MenuItem>
                <MenuItem value={40}>Bihar</MenuItem>
                <MenuItem value={50}>Chattisgarh</MenuItem>
                <MenuItem value={60}>Goa</MenuItem>
                <MenuItem value={70}>Gujrat</MenuItem>
                <MenuItem value={80}>Haryana</MenuItem>
                <MenuItem value={90}>Himachal</MenuItem>
                <MenuItem value={100}>Jharkhand</MenuItem>
                <MenuItem value={110}>Karnatka</MenuItem>
                <MenuItem value={120}>Kerala</MenuItem>
                <MenuItem value={130}>Maharastra</MenuItem>
                <MenuItem value={140}>Manipur</MenuItem>
                <MenuItem value={150}>Meghalya</MenuItem>
                <MenuItem value={160}>Mizoram</MenuItem>
                <MenuItem value={170}>Nagaland</MenuItem>
                <MenuItem value={180}>Punjab</MenuItem>
                <MenuItem value={190}>Rajasthan</MenuItem>
                <MenuItem value={200}>Tamil Nadu</MenuItem>
                <MenuItem value={210}>Kerala</MenuItem>
                <MenuItem value={220}>Telangana</MenuItem>
                <MenuItem value={230}>Uttrakahand</MenuItem>
                <MenuItem value={240}>Uttar Pradesh</MenuItem>
                <MenuItem value={250}>WestBengal</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth style={{ width: "45%", marginTop: "1rem" }}>
              <InputLabel id="demo-simple-select-standard-label">
                District
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={district}
                onChange={handleChange2}
                label="District"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Delhi</MenuItem>
                <MenuItem value={20}>Agra</MenuItem>
                <MenuItem value={30}>Allahbad</MenuItem>
                <MenuItem value={40}>Amethi</MenuItem>
                <MenuItem value={50}>Auraiya</MenuItem>
                <MenuItem value={60}>Badaun</MenuItem>
                <MenuItem value={70}>Banda</MenuItem>
                <MenuItem value={80}>Bareily</MenuItem>
                <MenuItem value={90}>Basti</MenuItem>
                <MenuItem value={100}>Bijnor</MenuItem>
                <MenuItem value={110}>Ghaziabad</MenuItem>
                <MenuItem value={120}>Faridabad</MenuItem>
                <MenuItem value={130}>Deoria</MenuItem>
                <MenuItem value={140}>Ghazipur</MenuItem>
                <MenuItem value={150}>Gonda</MenuItem>
                <MenuItem value={160}>Hamirpur</MenuItem>
                <MenuItem value={170}>Jaunpur</MenuItem>
                <MenuItem value={180}>Jhansi</MenuItem>
                <MenuItem value={190}>Gonda</MenuItem>
                <MenuItem value={200}>Varansi</MenuItem>
                <MenuItem value={210}>Aligarh</MenuItem>
              </Select>
            </FormControl>
            {/* <Link to="/donor"> */}
            <Link to="/refer">
              <p className="refer">Refer a donor</p>
            </Link>
            <Link to="/donor">
              <Button variant="contained" style={{ marginTop: "1rem" }}>
                Submit
              </Button>
            </Link>

            {/* </Link> */}
          </div>
        </Card>
      </div>
      <footer style={{ marginTop: "2rem", zIndex: "1" }}>
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.025)",
            height: "4vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          © 2022 Copyright
        </div>
      </footer>
    </>
  );
}

export default Index;
