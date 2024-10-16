import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./css/home.css"

const Home = () => {
  return (
    <div className="background">
      <div className="overlay">
        <Typography sx={{ margin: "5%" }} variant="h3" align="center">
          Get Hired or Hire people for free!
        </Typography>
        <div>
          <ul className="ul">
            <li>
              <button class="button-52" role="button"><Link to="/employer/createpost">
                Hire talent
              </Link></button>
            </li>
            <li>
              <button class="button-52" role="button"> <Link to="/employee/feed">
                Get Job Now
              </Link></button>
              {/* 
              <Button sx={{ margin: "2% 3%" }} variant="outlined">

              </Button> */}
            </li>
          </ul>
        </div>
      </div>
    </div >


  );

};

export default Home;
