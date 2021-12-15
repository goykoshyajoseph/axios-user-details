import React, { useState, useEffect } from "react";
import axios from "axios";
import { usersURL } from "../API/APIservice";
import Card from "@mui/material/Card";
import "./Goykoshya.css";

function Goykoshya() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get(usersURL).then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
    console.log("...", users);
  });
  return (
    <div>
      {users.map((data, index) => {
        return (
          <div>
            <Card className="card" style={{ backgroundColor: "lightgreen" }}>
              <h1>{data.id}</h1>
              <h1>{data.name}</h1>
              <h1>{data.phone}</h1>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default Goykoshya;
