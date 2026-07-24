import React, { useEffect, useState } from "react";
import axios from "axios";
const SkillsCard = ({ userId }) => {
  const [skills, setSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [searchSkill, setSearchSkill] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:8080/skills")
      .then((response) => {
        setSkills(response.data);
      })
      .catch((error) => {
        console.error("Error fetching skills:", error);
      });
  }, []);

  return (
    <div className="role-container">
        <h2>Choose Your Skills</h2>
         {selectedSkills.map((skill) => (
        <button
          key={skill.skillId}
          type="button"
          className="selected-role-btn"
        >
          {skill.skillName}

          <span
            className="remove-role"
            onClick={() => {
              setSelectedSkills(
                selectedSkills.filter(
                  (selectedSkill) =>
                    selectedSkill.skillId !== skill.skillId
                )
              );
            }}
          >
            ✕
          </span>
        </button>
      ))}

      <input
        type="text"
        placeholder="Search skills..."
        value={searchSkill}
        onChange={(e) => setSearchSkill(e.target.value)}
      />

       <p>You can select multiple skills</p>

      <div className="popular-roles">
        {skills
          .filter(
            (skill) =>
              !selectedSkills.some(
                (selectedSkill) =>
                  selectedSkill.skillId === skill.skillId
              )
          )
          .filter((skill) =>
            skill.skillName
              .toLowerCase()
              .includes(searchSkill.toLowerCase())
          )
          .map((skill) => (
            <button
              key={skill.skillId}
              onClick={() => {
                setSelectedSkills([...selectedSkills, skill]);
              }}
            >
              {skill.skillName}
            </button>
          ))}
      </div>

       <button disabled={selectedSkills.length === 0}>
        Next
      </button>
      
    </div>
  )
}

export default SkillsCard


