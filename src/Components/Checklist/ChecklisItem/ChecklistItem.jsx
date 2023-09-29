import { useId } from 'react';
import Button from '../../Button/Button';
import {destroyTask} from '../../../app/Slices/checklistSlice'; 

function ChecklistItem({
    taskData,dispatch
}) {
    const id = useId();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskData.id !== null && typeof taskData.title === 'string') {
            dispatch(destroyTask(taskData));
        }
    }

    return (
        <li>
            <input type="checkbox" id={id} checked/>
            <label htmlFor={id}>{taskData.title}</label>
            <Button>Edit</Button>
            <Button clickHandler={handleSubmit}>Delete</Button>
        </li>
    )
}

export default ChecklistItem;