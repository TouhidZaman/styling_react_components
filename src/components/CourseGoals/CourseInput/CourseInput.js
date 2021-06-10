import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

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
      <div className="form-control">
        <label style={{color: isValid ? 'black' : 'red'}}>Course Goal</label>
        <input 
          type="text" 
          value={enteredValue}
          onChange={goalInputChangeHandler}
          style={{borderColor: isValid ? '' : 'red', backgroundColor: isValid ? 'transparent' : '#fad0ec'}} 
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
