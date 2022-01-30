import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css"

const AddUser=props => {

    const formSubmissionHandler=event => event.preventDefault();
    return (<form onSubmit={formSubmissionHandler}>
        <Card className={classes.input}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" name="username" />
            <label htmlFor="age">Age(in Years)</label>
            <input id="age" type="text" name="Number" />
            <Button>Add User</Button>
        </Card>
    </form>
    )
};

export default AddUser;