import React, { useState } from 'react'
import SkillsCard from "./SkillsCard";
const RoleCard = ({ userId }) => {
  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Java Developer",
    "Python Developer",
    "Data Analyst",
    "AI / ML Engineer",
    "DevOps Engineer",
    "Cloud Engineer",
    "QA Engineer",
    "Android Developer",
    "UI/UX Designer",
  ];

  const [selectedRoles, setSelectedRoles] = useState([]);
  const [searchRole, setSearchRole] = useState("");
  const [showSkillsCard, setShowSkillsCard] = useState(false);
  console.log("RoleCard User ID:", userId);
  
  if (showSkillsCard) {
    return <SkillsCard />;
  }

  return (
    <div className="role-container">
      <h2>Choose your preferred roles</h2>

        {selectedRoles.map((role) => (
          <button
              key={role}
              type="button"
              className="selected-role-btn"
          >
              {role}

              <span
                  className="remove-role"
                  onClick={(e) => {
                      setSelectedRoles(
                          selectedRoles.filter(
                              (selectedRole) => selectedRole !== role
                          )
                      );
                  }}
              >
                  ✕
              </span>
          </button>
      ))}

      {/* Search Box */}
      
      <input
          type="text"
          placeholder="Search roles..."
          value={searchRole}
          onChange={(e) => setSearchRole(e.target.value)}
      />

      <p>You can select multiple roles</p>
      {/* Popular Roles */}
      <div className="popular-roles">
        {roles
          .filter((role) => !selectedRoles.includes(role))
          .filter((role) =>
            role.toLowerCase().includes(searchRole.toLowerCase())
          )
          .map((role) => (
            <button 
              key={role} 
              onClick={
                ()=> {
                  if(!selectedRoles.includes(role)){
                    setSelectedRoles([...selectedRoles, role]);
                  }
                }
              }
              >
              {role}
            </button>
        ))}
      </div>

      {/* Next Button */}
      <button
          disabled={selectedRoles.length === 0}
          onClick={() => setShowSkillsCard(true)}
      >
          Next
      </button>
    </div>
  )
}

export default RoleCard
