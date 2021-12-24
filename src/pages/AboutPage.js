import React from 'react'
import Title from '../components/Title'
import ImageSection from '../components/ImageSection'
import SkillSection from '../components/SkillSection'

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={'About me'} span={'About Me'}/>
    
            <ImageSection />
            
            <Title title={'My Skills'} span={'My Skills'}/>
            <div className="skillsContainer">
            <SkillSection skill={'HTML'} progress={'89%'}/>
            <SkillSection skill={'CSS'} progress={'70%'}/>
            <SkillSection skill={'JavaScript'} progress={'70%'}/>
            <SkillSection skill={'Bootstrap'} progress={'85%'}/>
            <SkillSection skill={'React JS'} progress={'75%'}/>
            <SkillSection skill={'Express JS'} progress={'60%'}/>
            <SkillSection skill={'Node JS'} progress={'60%'}/>
            <SkillSection skill={'Material-UI'} progress={'75%'}/>

           
            </div>

        </div>
    )
}

export default AboutPage
