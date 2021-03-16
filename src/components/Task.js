import {FaTimes} from 'react-icons/fa'

const Task = ({task,onDelete,onToggle}) => {
    console.log(task.reminder)
    return (
            <div className={`task p-3 mb-3 ${task.reminder ? 'bg-light text-dark' : 'bg-success text-white '}`} onDoubleClick={()=>onToggle(task.id)}>
                <h3 >
                    {task.text}
                    <FaTimes 
                        style={{color:'red', cursor:"pointer"}}
                        onClick={()=>onDelete(task.id)}
                    />
                </h3>
                <p>{task.day}</p>
            </div>
    )
}

export default Task
