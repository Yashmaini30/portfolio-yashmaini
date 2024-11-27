import React from "react";
import { FaGithub, FaJava, FaAws } from "react-icons/fa";

const Skills = ({ skill }) => {
    const icon = {
        Github: <FaGithub />,
        Java: <FaJava />,
        AWS: <FaAws />
    }

    return (
        <div title={skill} className="SkillBox">
            {icon[skill] }
        </div>
    )
}

export default Skills;
