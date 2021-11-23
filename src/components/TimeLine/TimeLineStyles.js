
import styled from 'styled-components'

export const CarouselContainer = styled.ul`
  max-width: 1040px;
  padding: 0rem;
  list-style:none;
  display: flex;
  justify-content: space-between; 
  /* overflow-x: hidden; */

  margin-left: 32px;
  &:first-of-type{
    margin-left: 0px;
  }

  margin-bottom: 80px;

  //remove scrollbar
  scrollbar-width: none;  
   &::-webkit-scrollbar {
     display: none;
   }

  @media screen and (max-width: 640px) {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
  }
`

export const CardImg = styled.div`
  display: flex;
  padding: 25px  25px;
  margin-top: 5px;
  margin-bottom: 30px;

  @media screen and (max-width: 640px) {
    width: 100%;
    display: none;
  }
  @media screen and (max-width: 640px) {
    width: 100%;
    display: none;
  }
`;

export const Card = styled.div`
  display: flex;
  border-radius: 10px;
  text-align: center;
  width: 100%;
  background-color: rgba(25, 2, 47, 0.2);
  margin-bottom: 30px;

  @media screen and (max-width: 640px) {
    width: 100%;
    
  }
`;

export const SectionTextCard = styled.p`
  display: flex;
  max-width: 900px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  text-align: left;
  padding-bottom: 3.6rem;
  padding: 20px 5px;
  color: rgba(255, 255, 255, 0.7);

  @media screen and (max-width: 768px) {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media screen and (max-width: 640px) {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`

export const CarouselMobileScrollNode = styled.div`
  @media screen and (max-width: 640px) {
    display: flex;
    min-width: ${({ final }) => final ? `120%;` : `min-content`}
  }
`

export const CarouselItem = styled.div`
  border-radius: 3px;
  max-width: 196px;

  @media screen and (max-width: 768px) {
    max-width: 124px;
  }
  
  @media screen and (max-width: 640px) {
    margin-left: 32px;
    min-width: 120px;
    background: #0E131F;
    padding: 4px;
    align-content: start;
    scroll-snap-align: start;
    border-radius: 3px;
    overflow: visible;
    position: relative;
    height: fit-content;
    
    ${(props) => props.active === props.index ? `opacity: 1` : `opacity: 0.5`}; 
  }
`

export const CarouselItemTitle = styled.h4`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  /* This gradient is different due to the size of the Title container, it must transition sooner to be visible on the text */
  background: linear-gradient(121.57deg, #FFFFFF 10%, rgba(255, 255, 255, 0.66) 30.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 4px;
  }
  
  @media screen and (max-width: 640px) {
    font-size: 16px;
    line-height: 24px;
  }
`
export const CarouselItemImg = styled.svg`
  margin-left: 21px;
  -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0));
  width: 100%;

  @media screen and (max-width: 640px) {
    -webkit-mask-image: none;
    margin-left: 16px;
    overflow: visible;
  }
`

export const CarouselItemText = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: #fff;
  padding-right: 16px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 18px;
    padding-right: 32px;
  }
  @media screen and (max-width: 640px) {
    font-size: 10px;
    line-height: 16px;
    padding-right: 0;
  }
`
export const CarouselButtons = styled.div`
  width: 288px;

  display: none;
  visibility: hidden;

  @media screen and (max-width: 640px) {
    display: flex;
    visibility: visible;
    margin-bottom: 48px;
  }
`

export const CarouselButton = styled.button`
  box-sizing: border-box;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: ${(props) => props.active === props.index ? `1` : `.33`};
  transform: ${(props) => props.active === props.index ? `scale(1.6)` : `scale(1)`};

  &:focus {
    outline: none;
  }
`

export const CarouselButtonDot = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: auto;
  width: 3px;
  height: 3px;
`
