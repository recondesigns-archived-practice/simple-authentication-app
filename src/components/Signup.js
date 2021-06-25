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

export default function SingupPage() {

    return (
        <Container>
            <Title>{'Signup Page'}</Title>
            <Subtitle>{'Please signup with email & password.'}</Subtitle>
        </Container>
    )
}
