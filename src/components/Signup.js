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
    padding: 0px 8px 0px 8px;
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

export default function SingupPage() {

    return (
        <Container>
            <Title>{'Signup Page'}</Title>
            <Subtitle>{'Please signup with email & password.'}</Subtitle>
            <Input 
                type={'email'} 
                placeholder={'Enter email'} 
            />

            <Input 
                type={'password'} 
                placeholder={'Enter password'} 
            />
            <PrimaryButton>{'Sign up'}</PrimaryButton>
        </Container>
    )
}
