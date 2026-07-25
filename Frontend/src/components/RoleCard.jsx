import React, { useEffect, useState } from "react";
import axios from "axios";

const RoleCard = ({ userId }) => {
    const [recommendedRoles, setRecommendedRoles] = useState([]);

    useEffect(() => {
    axios
        .get(`http://localhost:8080/roles/recommended/${userId}`)
        .then((response) => {
            setRecommendedRoles(response.data);
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
    }, [userId]);

  return (
    <div>
      <h2>Role Card</h2>
    </div>
  )
}

export default RoleCard
