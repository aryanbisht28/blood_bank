import React from "react";
import "./index.css";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

function index() {
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
            marginTop: "-0.3rem" 
          }}
        >
          Rudhir
    
      </div>
      <div
        className="register-box"
        style={{ height: "70vh", marginTop: "4rem" }}
      >
        <div class="red-box">
          <h5>Refer a Donor</h5>
        </div>
        <div class="white-box">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <Grid
              container
              spacing={2}
              style={{
                margin: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  style={{ width: "90%" }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  style={{ width: "90%" }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              style={{ margin: "1rem", marginLeft: "2rem" }}
            >
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  row
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid
              container
              spacing={2}
              style={{
                margin: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  style={{ width: "90%" }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  style={{ width: "90%" }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              style={{
                margin: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="District"
                  variant="outlined"
                  style={{ width: "90%" }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="State"
                  variant="outlined"
                  fullWidth
                  style={{ width: "90%" }}
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              style={{ marginTop: "1rem", marginLeft: "2rem", width: "10%" }}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
      <footer style={{ marginTop: "7.3rem", zIndex: "1" }}>
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

export default index;
