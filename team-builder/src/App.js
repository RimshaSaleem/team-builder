import './App.css';
import React, { useState } from 'react';
import Member from './member';
import FormInput from './form';
import { Container } from 'semantic-ui-react'


const peopleDetail = [{
  
  name: 'Rimsha',
  email: 'rimsha@gmail.com',
  role: 'Front-end-Developer'
 
}
];

const initialPeopleDetail = {
  name: '',
  email: '',
  role: '',
  
}

export default function App() {
const [people, setPeople] = useState(peopleDetail);

const [formValues, setValues] = useState(initialPeopleDetail);

const updateForms = (inputName, inputValue) => {
  setValues({...formValues, [inputName]: inputValue})
};

const submitForm = () => {
  const newData = {
    id: Date.now(),
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    role: formValues.role.trim(),
  }
  setPeople([...people, newData])
  setValues(initialPeopleDetail)
}

  return (
   <div>
     <h1>Team Member Form</h1>
     <FormInput
        values={formValues}
        update={updateForms}
        submit={submitForm}
        />
      {people.map(i => {
        return(<Member key={initialPeopleDetail.id} details={i}/>)
      })
      } 
   </div>
  );
}
