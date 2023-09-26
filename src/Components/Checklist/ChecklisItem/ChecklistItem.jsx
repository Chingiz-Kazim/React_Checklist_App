import { useId } from 'react';
import Button from '../../Button/Button';

function ChecklistItem({
    taskData,dispatchTask
}) {
    const id = useId();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskData.id !== null && typeof taskData.title === 'string') {
            dispatchTask({ type: 'delete', payload: taskData.id });
        }
    }

    return (
        <li>
            <input type="checkbox" id={id}/>
            <label htmlFor={id}>{taskData.title}</label>
            <Button>Edit</Button>
            <Button clickHandler={handleSubmit}>Delete</Button>
        </li>
    )
}

export default ChecklistItem;