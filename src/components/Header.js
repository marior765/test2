import React from 'react';
import LinkBtn from './LinkBtn/LinkBtn';
import styled from 'styled-components'

const Div = styled.div`
width: 100%;
height: 10%;
background-color: blue;
padding-top: 1%;
padding-bottom: 1%;
`

const Label = styled.p`
font-weight: bold;
color: white;
text-align: center;
text-transform: uppercase;
text-decoration: none;
`

export default () => 
    <Div>
        <LinkBtn to="/">
            <Label>Blog</Label>
        </LinkBtn>
    </Div>