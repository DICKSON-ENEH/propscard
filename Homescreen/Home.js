import React from 'react'
import styled from "styled-components"






const Home = ({bigtext,description, picture,colors, spacing }) => {
 
 
  return (
    <div>
    {/* <Mesg> Reliable, efficient, delivery </Mesg> */}
<Container colors ={colors} spacing ={spacing}>
  <Wrapper>
    <Tittle>
  {bigtext}

  </Tittle>
    <Content>
{description}
    </Content>
    <Icon>
   <img src={picture} alt=""/>
    </Icon>
  </Wrapper>
</Container>
</div>
  )
}

export default Home

const Container= styled.div`
width:300px;
height:200px;
background:white;
margin-top:${({spacing})=>spacing} ;
border-top:${({colors})=>colors};
box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
border-radius:10px

`
const Wrapper= styled.div`
width:250px;
margin-left:20px;
margin-top:20px
`


const Content= styled.div`
color:#ddd
`
const Icon= styled.div`
img{
  width:50px
}
margin-top:45px;
display:flex;
justify-content:flex-end
`
const Tittle = styled.div`
font-weight:bold;
font-size:20px
`




