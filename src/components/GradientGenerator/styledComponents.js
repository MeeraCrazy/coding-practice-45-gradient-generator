// Style your elements here
import styled from 'styled-components/macro'

export const GradientGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 550px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1140px;
  }
`
export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
export const DirectironDiscription = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
`

export const GradientDirectionList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0px;
  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 425px;
  }
`
export const ColorPicksDiscription = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
`

export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 320px;
`
export const CustomInputAndColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CustomValue = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
`
export const CustomInput = styled.input`
  width: 118px;
  height: 48px;
  background-color: transparent;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: ponter;
`
export const GenerateButton = styled.button`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  min-width: 25px;
  background-color: #00c9b7;
  borde-radius: 6px;
  padding-top: 12px;
  padding-left: 24px;
  padding-bottom: 12px;
  padding-right: 24px;
  margin-top: 25px;
  margin-left: 15px;
  margin-bottom: 10px;
  margin-right: 15px;
  border: none;
  outline: none;
  cursor: pointer;
`
