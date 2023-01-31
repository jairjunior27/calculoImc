import styled from 'styled-components'

export const main = styled.div`
padding:10px;
`

export const header = styled.div`

`
export const headerContainer = styled.div`
max-width: 900px;
margin: 40px auto;
`
export const container = styled.div`
display: flex;
margin: auto;
max-width: 900px;

@media(max-width: 800px){
    flex-direction: column;

}
`
export const sideLeft = styled.div`
flex: 1;
margin-right:40px;

@media(max-width: 800px){
    margin: 0;
    
}
`
export const sideRight = styled.div`
flex: 1;
margin-left:40px;
display: flex;

@media(max-width: 800px){
    margin: 0;
    margin-top: 40px ;
    
}

`
export const h1 = styled.h1`
margin:0;
font-size:40px;
color: #232452;
`
export const p = styled.p`
font-size: 16px;
color: #74757C;
margin-bottom: 40px;
`
export const input = styled.input`
width:100%;
margin-bottom:20px;
border: 0;
border-bottom: 1px solid #74757C;
outline:0;
padding: 10px 2px;

&:disable{
    opacity:.5;
}
`
export const button = styled.button`
width: 100%;
padding:10px 0;
border-radius: 10px;
border: 0;
margin-top: 40px;
cursor: pointer;
background-color:#4464C8;
color: #fff;
font-size: 16px;
transition: all ease .3s;


&:hover{
    opacity:.8;
}
&:disabled{
    opacity:.3;
}
`
export const Grid = styled.div`
flex: 1;
display: grid;
grid-template-columns: repeat(3,1fr);
gap: 20px;

@media(max-width: 644px){
    grid-template-columns: repeat(2,1fr);
}
@media(max-width: 450px){
    grid-template-columns: repeat(1,1fr);
}
` 
export const rightBig = styled.div`
display: flex;

`
export const rightArrow = styled.div`
position: absolute;
width: 70px;
height: 70px;
background-color: #4A93BC ;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
margin-top:145px;
margin-left: -35px;
 transition: all ease .3s;

 &:hover{
    opacity: .8;
 }

 @media(max-width: 800px){
    margin-top 0;
    margin-left:0;
    border-radius: 10px;
    width:60px;
    height: 60px;

}

@media(max-width: 644px){
   width:45px;
   height: 45px;
}
` 


export const footer = styled.div`
margin-top: 50px;
text-align: center;
color:#74757C;
`