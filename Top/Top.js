import React from 'react'
import styled from 'styled-components'

const Top = ()=>{
    return (
 <Topwrap>
     <Bigtitle>Reliable,efficient, delivery</Bigtitle>
     <Powered>Powered by Technology</Powered>
     <Artifacts>Our artificial intelligence powered tools uses millions of project data points to ensure that your project is successful</Artifacts>
 </Topwrap>
    )
}


export default Top

const Topwrap = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center
`
const Bigtitle = styled.div`
font-size:1.5rem;
color:#aaa
`
const Powered= styled.div`
font-weight:bold;
font-size:2rem;
margin-bottom:10px
`
const Artifacts = styled.div`
width:500px;
text-align:center;
`