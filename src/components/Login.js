import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    box-sizing: border-box;
    padding: 40px 0px 40px 0px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    // border: 2px solid lightcoral;
`

const Title = styled.h1`
    margin-bottom: 4px;
    width: 280px;
    // border: 1px dashed green;
`

const Subtitle = styled.p`
    margin-bottom: 40px;
    width: 280px;
    // border: 1px dashed green;
`

const Input = styled.input`
    margin-bottom: 12px;
    padding-left: 12px;
    padding-right: 12px;
    box-sizing: border-box;
    width: 280px;
    height: 40px;
    font-size: 20px;
    border-radius: 4px;
    border: 1px solid #414141;
`

const PrimaryButton = styled.button`
    margin-top: 8px;
    width: 280px;
    height: 40px;
    border: none;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: bold;
    border-radius: 4px;
    text-transform: uppercase;
    background: #414141;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`

const HomeLink = styled.p`
    margin-top: 40px;
    width: 100%;
    color: dodgerblue;
    text-align: center;
    cursor: pointer;
    // border: 1px dashed green;

    &:hover {
        color: #002D62;
    }
`


export default function LoginPage() {

    return (
        <Container>
            <Title>{'Login Page'}</Title>
            <Subtitle>{'Please log in with email & password.'}</Subtitle>
            <Input 
                type={'email'} 
                placeholder={'Enter email'} 
            />

            <Input 
                type={'password'} 
                placeholder={'Enter password'} 
            />
            <PrimaryButton>{'Log in'}</PrimaryButton>
            <HomeLink>{'Back to Home'}</HomeLink>   
        </Container>
    )
}
