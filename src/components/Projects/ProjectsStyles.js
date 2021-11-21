import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height: 20rem;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
display: grid;

padding: 3rem;
column-gap: 2rem;
row-gap: 3rem;
flex: 1;

  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
@media screen and (max-width: 640px) {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 15px;
  text-align: center;
  width: 400px;
  background:  #0F1624;

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: Space Grotesk, sans-serif;
`;

export const Hr = styled.hr`
  width: 80px;
  height: 3px;
  margin: 15px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #fff;
  font-style: 2rem;
  font-size: 17px;
  
  text-align: inherit;
  @media screen and (max-width: 640px){
    padding:.3rem
  
}
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 2rem;
padding:1rem 2rem;
background:#7b4397;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #80018f;

}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
`