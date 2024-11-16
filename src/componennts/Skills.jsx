import React from "react";
import { FaGithub } from "react-icons/fa";

const Skills = ({ skill }) => {
    const icon = {
        Github: <FaGithub />,
    }

    return (
        <div title={skill} className="SkillBox">
            {icon[skill]}
        </div>
    )
}

export default Skills
