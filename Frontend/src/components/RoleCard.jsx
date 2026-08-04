import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardCard from "./DashboardCard";

const RoleCard = ({ userId }) => {
    const [allRoles, setAllRoles] = useState([]);
    const [selectedRoles, setSelectedRoles] = useState([]);
    const [recommendedRoles, setRecommendedRoles] = useState([]);
    const [searchRole, setSearchRole] = useState("");
    const [Dashboard, setDashboard] = useState("");

    // Fetch recommended roles based on selected skills
    useEffect(() => {
        axios
            .get(`http://localhost:8080/roles/recommended/${userId}`)
            .then((response) => {
                setRecommendedRoles(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [userId]);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/roles`)
            .then((response) => {
                setAllRoles(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleNext = () => {
    
        const request = {
            candidateId: userId,
            roleIds: selectedRoles.map(role => role.roleId)
        };

        axios.post("http://localhost:8080/candidate-roles", request)
            .then(() => {
                setDashboard(true);
            })
            .catch(error => {
                console.error(error);
            });

    };
    const handleRoleSelect = (role) => {
        setSelectedRoles([...selectedRoles, role]);
    };

     // Remove selected role
    const handleRemoveRole = (roleId) => {
        setSelectedRoles(
            selectedRoles.filter(
                (role) => role.roleId !== roleId
            )
        );
    };

    // Search in recommended roles
    const filteredRecommendedRoles = recommendedRoles.filter((role) =>
        role.roleName
            .toLowerCase()
            .includes(searchRole.toLowerCase())
    );

    // Search in popular roles (all roles except recommended)
    const filteredPopularRoles = allRoles
        .filter(
            (role) =>
                !recommendedRoles.some(
                    (recommendedRole) =>
                        recommendedRole.roleId === role.roleId
                )
        )
        .filter((role) =>
            role.roleName
                .toLowerCase()
                .includes(searchRole.toLowerCase())
        );

    if (Dashboard) {
        return <DashboardCard userId={userId} />;
      }

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

        {filteredRecommendedRoles.length > 0 && (
            <>
                <h3>⭐ Recommended for You</h3>

                <div className="recommended-roles">
                {filteredRecommendedRoles
                    .filter(
                        (role) =>
                            !selectedRoles.some(
                                (selectedRole) =>
                                    selectedRole.roleId === role.roleId
                            )
                    )
                    .map((role) => (
                        <button
                            key={role.roleId}
                            onClick={() => handleRoleSelect(role)}
                        >
                            {role.roleName}
                        </button>
                    ))}
                </div>
            </>
        )}       

        {filteredPopularRoles.length > 0 && (
            <>
                <h3>🔥 Popular Roles</h3>

                <div className="popular-roles">
                    {filteredPopularRoles
                        .filter(
                            (role) =>
                                !selectedRoles.some(
                                    (selectedRole) =>
                                        selectedRole.roleId === role.roleId
                                )
                        )
                        .map((role) => (
                            <button
                                key={role.roleId}
                                onClick={() => handleRoleSelect(role)}
                            >
                                {role.roleName}
                            </button>
                        ))}
                </div>
            </>
        )}

        <button 
            disabled={selectedRoles.length === 0}
            onClick={handleNext}
        >
            Next
        </button>
        
    </div>
  )
}

export default RoleCard
