import React from 'react'
import styled from 'styled-components'
import { skills } from '../../data/constants'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
margin-bottom:100px;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;
 export const Biome = styled.div `
 padding:5px 50px;
 font-size: 18px;
 text-align: justify;
 max-width: 800px;
 color: ${({ theme }) => theme.text_secondary};
 @media (max-width: 768px) {
     font-size: 16px;
 }
`;
export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }


`

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`


const Skills = () => {
  return (
    <Container >
      <Wrapper id="skills">
        <Title>Bio</Title>
        <Biome><p>M. Amlila Mohammed Amine is an accomplished Electrical Design Engineer at ONEE (National Office of Electricity and Water). With a passion for innovation and a keen eye for detail, he excels in designing and implementing electrical systems that power critical infrastructure.</p> 
        <br /><p>Throughout his career, M. Amlila has demonstrated expertise in creating efficient and reliable electrical designs for a wide range of projects, from power distribution networks to renewable energy installations.</p> 
        <br /> <p>Notably, M. Amlila played a pivotal role in the design and implementation of a groundbreaking solar power plant, contributing to the expansion of sustainable energy solutions in the region.</p> 
        <br />  <p>His proficiency in electrical engineering principles and dedication to project success have earned him recognition and respect among peers and stakeholders.</p>
        <br /> <p>Driven by a passion for continuous improvement, Amlila actively seeks opportunities to advance his skills and stay updated with the latest technologies in the electrical engineering field. As an advocate for sustainable energy practices, he aspires to drive positive change in the energy sector, fostering a greener and more sustainable future.</p>
              <br /> <p>With a track record of impressive achievements and a commitment to making a difference, Amlila Mohammed Amine is poised to continue making significant contributions in the field of electrical engineering, leaving a lasting impact on critical infrastructure and sustainable energy solutions</p>
                        
        </Biome>
       
      </Wrapper>
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Here are some of my skills on which I have been working on.
        </Desc>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem>
                    <SkillImage src={item.image}/>
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}

        </SkillsContainer>
      </Wrapper>
      <Wrapper id="elevator-pitch">
        <Title>Elevator Pitch</Title>
        <Biome>
         <p>Greetings, I'm Mohammed Amine Amlila, an aspiring data scientist with a fervor for harnessing data-driven insights to tackle real-world complexities. My skill set spans across machine learning, statistical analysis, and data visualization, and I take great pleasure in navigating through extensive datasets to unveil meaningful patterns.</p>  
        <br /><p>I'm eager to become part of a dynamic team where I can apply my data science acumen to address intricate challenges and make substantial contributions to impactful projects, particularly within sectors such as healthcare or sustainability.</p> 

        <br /><p>Let's connect and delve into the possibilities of how I can contribute data-driven solutions to elevate your organization's success.</p> 

        </Biome>
       
      </Wrapper>
    </Container>
  )
}

export default Skills