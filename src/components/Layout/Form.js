import React from 'react';
import {useForm} from 'react-hook-form';
import content from '../static';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from 'styled-components';
import { Grid } from './Grid';
import Checkbox1 from '../CheckBox';
import Sliders from '../Sliders';

const schema = yup.object().shape({
    Email: yup.string().required().email(),
    Username: yup.string().required(),
    companyname: yup.string().required(),
   
   });

const FormGridContainer = styled.div`
display: flex;
flex-direction: column;
position: relative;
min-width: 1px;
max-width: 100%;
flex: 1;
justify-content: flex-start;
align-items: stretch;
flex-direction: row;
    flex-wrap: wrap;
`;

const FormContainer = styled.div`
display: flex;
flex-direction: row;
position: relative;
min-width: 1px;
max-width: 100%;
flex: 1;
justify-content:flex-start;
align-items:stretch;
@media (max-width: 768px) {
    flex-direction: column;
  }
`;
const FormContainer1 = styled.div`
    display: flex;
    flex-direction: column;
    margin-right:6px;
    flex: 20%;
    padding-bottom: 30px;
`;
const FieldSet = styled.div`
    width:491px;
    border: none;
    box-shadow: 0 30px 60px rgba(0,0,0,0.12);
    background: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border: 1px solid #eaeaea;
    position: relative;
    display: flex;
    padding: 24px;
    flex-wrap: wrap;
    @media (max-width: 768px) {
        width: auto;
      }
`;
const Input = styled.input`
  font-size: 1rem;
  padding: 10px;
  border: 1px solid #eaeaea;
  outline: none;
  border-radius: 5px;
  
`;
const Label = styled.label`
    color: #666;
    font-size: .75rem;
    font-weight: 500;
    margin-bottom: 8px;
    text-transform: uppercase;
`;
const Label1 = styled.div`
    color: #666;
    font-size: .75rem;
    font-weight: 500;
    margin-bottom: 8px;
    text-transform: uppercase;
    margin-bottom: 8px;
`;
const SelectContainer = styled.div`
position: relative;
display: flex;
align-items: center;
color: #000;
`;
const SelectSelect = styled.select`
    cursor: pointer;
    font-size: 100%;
    font: inherit;
    outline: none;
    appearance: none;
    font-size: 0.875rem;
    height: 40px;
    line-height: 1.25rem;
    text-rendering: auto;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #eaeaea;
    background: #fff;
    color: #000;
    padding: 0 12px;
    padding-right: calc(1.5 * 24px);
    transition: border-color .15s ease;
`;
const SelectSuffix = styled.span`
    display: inline-flex;
    position: absolute;
    pointer-events: none;
    color: #666;
    transition: color .15s ease;
    right: 12px;
`;

const Error = styled.p`
color: red;
font-size:0.875rem;
margin: 0;
`;
const Border = styled.div`
    border-bottom : 1px solid #eaeaea;
    width: 100%;
`;
const Product = styled.p`
display: flex;
    font-size:0.75rem;
    font-weight: 500;
    line-height: 1.6;
    color: #666;
    text-transform: uppercase;
    width: 100%;
`;
const Check = styled.div`
display: flex;
flex-wrap: wrap;
`;
const LabelText = styled.label`
  width: 100%;
  color: #666;
  font-size: .75rem;
  font-weight: 500;
  margin-top: 30px;
  margin-bottom: 8px;
  text-transform: uppercase;
`;
const TextInput = styled.textarea`
    width: 100%;
    resize: none;
    padding: 10px 12px;
    height: 84px;
    borderRadius: 5px; 
    outline: none;
    border: 1px solid #eaeaea;
`;
const Footer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
color: #fff!important;
background-color: #7928ca;
padding: 24px;
border-bottom-left-radius: 5px;
border-bottom-right-radius:5px;
height: 38px;
margin-bottom: 50px;
@media (max-width:767px){
  flex-direction: column;
  height: 85px;
}

`;
const Small = styled.small`
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.6;

`;
const CompanyMail = styled.a `
    cursor: pointer;
    color: inherit;
    text-decoration: none;
    padding-left: 5px;
@media (max-width:767px){
  display: flex;
  align-items: center;
  justify-content: center;
}

`;
const Button = styled.button `
background-color: #fff;
    padding: .7rem 2.5rem;
    border: none;
    border-radius: 0.25rem;
    color: white;
    font-weight: bold;
    display: block;
    text-align: center;
    cursor: pointer;
`;
const FooterDesc = styled.div`
   display: flex;
`;
const FooterButton = styled.div`
   display: flex;
`;
const Xsmall = styled.small`
  display: flex;
  color:#666;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.05rem;
  margin: 40px 0;
`;
export function Form() {
  const{register, handleSubmit, formState: { errors } } = useForm(
    {
      resolver: yupResolver(schema),
    });

  const onSubmit = (data) => console.log(data);

  return (
    <div>
        <FormGridContainer>
            <FormContainer>
      <form onSubmit ={handleSubmit(onSubmit)}>
          <FieldSet>
                  {content.inputs.map((input, key) => {
          return (
            <FormContainer1 key={key}>
                <Label>{input.label}</Label>
                <Input 
                name={input.name} 
                className="input" 
                type={input.type}
                {...register( input.name )}
                />
              {errors[input.name] && <Error>{errors[input.name]?.message}</Error>}
            </FormContainer1>
            
          );
        }
        )}
           <FormContainer1>
           <Label1 for="select-4">
                   Company Size
                   </Label1>
                <SelectContainer>
                    <SelectSelect>
                        <option value="1-100">1-100</option>
                        <option value="100-500">100-500</option>
                        <option value="500-1000">500-1000</option>
                        <option value="1000+">1000+</option>
                    </SelectSelect>
                    <SelectSuffix>
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none">
                            <path d="M6 9l6 6 6-6">

                            </path>
                        </svg>
                    </SelectSuffix>
                </SelectContainer>
           </FormContainer1>
           <Border></Border>
           <Product>
           Product(s) of Interest
           </Product>
           <p> </p>
           <Check>
              <Checkbox1 />
           </Check>
           <Border></Border>
           <LabelText> How can we Help you</LabelText>
           <TextInput></TextInput>
          </FieldSet>
          <Footer>
            <FooterDesc>
            <Small>
            You can also email us directly at
            <CompanyMail>
             sales@vercel.com
            </CompanyMail>
            </Small>
            </FooterDesc>
            <FooterButton>
            <Button type="submit" ><span style={{color:"blueviolet"}}>Contact Sales</span></Button>
            </FooterButton>
</Footer>
<Xsmall>
      By submitting this form, I confirm that I have read and understood the
      <br></br>
      Vercel Privacy Statement
      </Xsmall>
      </form>
      <Grid />
      <Sliders/>
      </FormContainer>
      </FormGridContainer>
    </div>
    
  );
}
