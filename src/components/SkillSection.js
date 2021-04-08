import React from 'react'

function SkillSection(props) {
    return (
        <div className="SkillSection">
            <div className="skills-containers">
                <h5 className="skill-title">{props.skill}</h5>
                <div className="skill-bar">
                    <p className="skill-text">{props.progress}</p>
                    <div className="skill-progress">
                        <div className="progress">
                            <div className="inner-progress" style={{width:props.progress}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillSection
