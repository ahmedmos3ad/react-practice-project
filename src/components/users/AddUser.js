import Card from "../UI/Card";
import { useState } from "react";
import Button from "../UI/Button";
import classes from "./AddUser.module.css"
import ErrorModal from "../UI/ErrorModal";

const AddUser=props => {
    const [enteredUsername, setEnteredUsername]=useState('');
    const [enteredAge, setEnteredAge]=useState('');
    const [error, setError]=useState();

    const errorHandler=() => {
        setError(null);
    }
    const formSubmissionHandler=(event) => {
        event.preventDefault()
        if (enteredUsername.trim().length===0||+enteredAge<1) {
            setError({
                title: 'Invalid Input',
                message: 'Please set a valid name and age.'
            });
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };
    const usernameChangeHandler=(event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler=event => {
        setEnteredAge(event.target.value);
    }


    return (<form onSubmit={formSubmissionHandler}>
        <div>
            {error&&<ErrorModal title={error.title} message={error.message} onClick={errorHandler} />}
            <Card className={classes.input}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" name="username" value={enteredUsername} onChange={usernameChangeHandler} />
                <label htmlFor="age">Age(in Years)</label>
                <input id="age" type="number" name="number" min="1" value={enteredAge} onChange={ageChangeHandler} />
                <Button type="submit">Add User</Button>
            </Card>
        </div>
    </form>
    )
};

export default AddUser;