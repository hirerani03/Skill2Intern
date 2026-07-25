import React, { useEffect, useState } from "react";
import axios from "axios";

const RoleCard = ({ userId }) => {
    const [recommendedRoles, setRecommendedRoles] = useState([]);
    const [allRoles, setAllRoles] = useState([]);
    const [selectedRoles, setSelectedRoles] = useState([]);
    const [searchRole, setSearchRole] = useState("");

    // Fetch recommended roles based on selected skills
    useEffect(() => {
    axios
        .get(`http://localhost:8080/roles/recommended/${userId}`)
        .then((response) => {
            setRecommendedRoles(response.data);
            setAllRoles(response.data);
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
    }, [userId]);

    // Select role
    const handleRoleSelect = (role) => {

        setSelectedRoles([...selectedRoles, role]);

        setRecommendedRoles(
            recommendedRoles.filter(
                (recommendedRole) =>
                    recommendedRole.roleId !== role.roleId
            )
        );
    };

     // Remove selected role
    const handleRemoveRole = (roleId) => {

        const removedRole = selectedRoles.find(
            (role) => role.roleId === roleId
        );


        setSelectedRoles(
            selectedRoles.filter(
                (role) => role.roleId !== roleId
            )
        );


        setRecommendedRoles([
            ...recommendedRoles,
            removedRole
        ]);
    };

    // Search all roles
    const filteredRoles = allRoles.filter((role) =>
        role.roleName
            .toLowerCase()
            .includes(searchRole.toLowerCase())
    );

  return (
    <div className="role-container">
       <h2>Choose Your Preferred Roles</h2>

        {/* Selected Roles */}

            {selectedRoles.map((role) => (

                <button
                    key={role.roleId}
                    className="selected-role-btn"
                >

                    {role.roleName}


                    <span
                        className="remove-role"
                        onClick={() =>
                            handleRemoveRole(role.roleId)
                        }
                    >
                        ✕
                    </span>

                </button>

            ))}



            {/* Search */}

            <input
                type="text"
                placeholder="Search roles..."
                value={searchRole}
                onChange={(e) =>
                    setSearchRole(e.target.value)
                }
            />
            <p>You can select multiple roles</p>
             {/* Recommended Roles */}

            <div className="popular-roles">

                {
                    filteredRoles
                    .filter(
                        (role) =>
                            !selectedRoles.some(
                                (selectedRole) =>
                                    selectedRole.roleId === role.roleId
                            )
                    )
                    .map((role)=>(

                        <button
                            key={role.roleId}
                            onClick={() =>
                                handleRoleSelect(role)
                            }
                        >
                            {role.roleName}

                        </button>

                    ))
                }

            </div>

    </div>
  )
}

export default RoleCard
