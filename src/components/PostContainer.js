import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;`

const Post = styled.div`
width: 60%;
padding: 20px;
margin-top: 2%;
border: 1px solid lightgray;
border-radius: 10px;`

const Title = styled.p`
font-weight: bold;
margin-top: 3px;`

const TextField = styled.textarea`
border: 1px solid gray;
border-radius: 10px;
padding: 10px;
outline:0;
width: 40%;
margin-top: 10px;`

const Button = styled.button`
border-radius: 10px;
font-weight: bold;
margin-top: 10px;`

export default props => (
    <Container>
        <Post>
            <Title>{props.data.title}</Title>
            <div>{props.data.body}</div>
        </Post>
        {
            props.comments.map((item, id) => (
                <Post key={id}>
                    <div>{item.body}</div>
                </Post>
            ))
        }
        {props.error ? <p>Field is empty!</p> : null}
        <TextField value={props.value} onChange={props.valueHandler} />
        <Button onClick={props.buttonHandler} >Send</Button>
    </Container>
)