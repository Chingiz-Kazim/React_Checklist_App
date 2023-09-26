import ChecklistItem from "./ChecklisItem/ChecklistItem";

function Checklist({tasks,dispatch}) {

    return (
        <ul>
            {
                tasks.map(taskData => <ChecklistItem taskData={taskData} key={taskData.id} dispatchTask = {dispatch}/>)
            }
        </ul>
    )
}

export default Checklist;