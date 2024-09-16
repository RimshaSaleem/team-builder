import React from 'react';
  import styled from 'styled-components';
  import { Container } from 'semantic-ui-react'


 const Result = styled.input`
 
 width:25%;
 height:6vh;
 margin-left:1%;
 `
 const Results = styled.select`
 border:2px solid grey;
 width:25%;
 height:6vh;
 margin-left:1%;
 `
 const Styles = styled.h1`
 color:red;
 margin-left:1%;`
 
 const Styless = styled.button`
 color:grey;
 margin:1%;
 width:10%;
 height:5vh;
 color:black;
 background-color:lightgreen;
 border-radius:5%
 `

export default function FormInput(props) {
    
    const { values, update, submit } = props;
    

    const onChange = evt => {
        const { name, value } = evt.target
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit()
    }

    return (
        <form onSubmit={onSubmit}>
            <Container>
            <div>
                <Styles>Name</Styles>
                    <Result
                    onChange={onChange}
                    value={values.name}
                    name='name'
                    type='text'
                    placeholder='Name'
                    maxLength='60'
                    />
            </div>
            <div>
                <Styles>Email</Styles>
                    <Result
                    onChange={onChange}
                    value={values.email}
                    name='email'
                    type='text'
                    placeholder='Email'
                    maxLength='60'
                    />
            </div>
            <div>
                <Styles>Role</Styles>
                
                <Results
                
                    onChange={onChange}
                    name='role'
                    value={values.role}>
                    <option></option>
                    <option>Backend Engineer</option>
                    <option>Frontend Engineer</option>
                    <option>Designer</option>
                </Results>
                
               
            </div>
            <div>
                <Styless>submit</Styless>
            </div>
            </Container>

        </form>
        
    )
    
}