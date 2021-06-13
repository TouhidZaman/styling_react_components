import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import styled from 'styled-components';

const FormControl = styled.div`
  margin: 0.5rem 0;
  padding-right: 0.5rem;
  
  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => props.invalid ? 'red' : ''}
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => props.invalid ? 'red' : ''};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    background-color: ${props => (props.invalid ? 'rgb(253, 212, 219)' : '')};
  }

  & input:focus {
    outline: none;
  }
`

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    setIsValid(true);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      // when user submit an empty input form;
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={!isValid}> {/*note:we can pass aditional class name className={`${isValid ? '' : 'invalid'}`}*/}
        <label>Course Goal</label>
        <input 
          type="text" 
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
