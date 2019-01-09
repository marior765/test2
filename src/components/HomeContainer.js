import React from 'react';
import styled from 'styled-components';
import LinkBtn from './LinkBtn/LinkBtn';
import { readPost } from '../store/actions';
import { connect } from 'react-redux';

const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;`

const Post = styled.div`
width: 40%;
padding: 10px;
margin-top: 2%;
border: 1px solid lightgray;
border-radius: 10px;
display: flex;
flex-direction: column;
margin-left: 30%;`

//align-self: center; hm

const Title = styled.p`
font-weight: bold;
margin-top: 3px;`

const TextField = styled.textarea`
border: 1px solid gray;
border-radius: 10px;
padding: 10px;
outline:0;
width: 30%;
margin-top: 10px;
margin-left: 35%;`

//align-self: center; hm

const Input = styled.input`
border: 1px solid gray;
border-radius: 10px;
padding: 10px;
outline:0;
width: 30%;
margin-top: 10px;
margin-left: 35%;`

const Button = styled.button`
width: 5%;
align-self: center;
border-radius: 10px;
font-weight: bold;
align-self: center;
margin-bottom: 10px;
margin-top: 10px;`

export default connect(null, mapDispatchToProps)(props => {
    return (
        <Container>
        {
            props.data.map((item, id) => (
                <LinkBtn key={id} click={() => props.readPost(item.id)} to={`/posts/${item.id}`}>
                    <Post>
                        <Title>{item.title}</Title>
                        <div>{item.body}</div>
                    </Post>
                </LinkBtn>
            ))
        }
        <Input value={props.titleValue} onChange={props.titleHandler} />
        <TextField value={props.bodyValue} onChange={props.bodyHandler} />
        {props.error ? <p style={{alignSelf: 'center'}}>Some field is empty!</p> : null}
        <Button onClick={props.buttonHandler} >Send</Button>
        </Container>
    )
})

function mapDispatchToProps(dispatch) {
    return {
        readPost: id => { dispatch(readPost(id)) }
    }
}