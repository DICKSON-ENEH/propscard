import React from 'react'
import styled from 'styled-components' 
import Home from '../src/components/Homescreen/Home'
import pics from '../src/components/images/icon-tutor.svg'
import pics1 from '../src/components/images/fff (1).jpeg'
import pics2 from '../src/components/images/fff (1).webp'
import pics3 from '../src/components/images/fff (2).webp'
import Top from '../src/components/Top/Top'


const App = ()=>{
  return (
  <Cover>
    <Top/>
  <Upp>
    <Home bigtext="Supervisor" description="Monitors activity to identify project roadblocks" picture = {pics}  colors ="green 2px solid"/>
    <Wrap>
    <Divider>
    <Home  bigtext="Team Builder" description="Scans our talent to create the optimal team for your project"  colors ="pink 2px solid" picture = {pics3} spacing='0px'/>
    </Divider>
    <Home  bigtext="Karma " description="Regularly evaluates our talents to ensure quality"  colors ="red 2px solid"  colors ="purple 2px solid" picture = {pics2}/>
    </Wrap>

    <Home  bigtext="Calculator " description="Uses data  from projects to provide better delivery estimates " colors ="red 2px solid" picture = {pics1}/>
    </Upp>
    </Cover>
    
  );
}

export default App;
const Cover= styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column
`
const Wrap = styled.div`

margin:20px
`

const Upp = styled.div`
display:flex;
align-items:center;
justify-content:space-around;


`
const Divider= styled.div`
margin-bottom:20px
`
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   