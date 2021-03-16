const Header = ({onAdd, showAdd}) => {
    console.log(onAdd)
    console.log(showAdd)
    return (
        <div className="d-flex p-3 justify-content-between mb-4">
            <h1 className="text-success">Task Tracker</h1>
            <button 
                type="button" 
                className={showAdd ? "btn btn-outline-danger" : "btn btn-outline-success"} 
                onClick={onAdd}>{showAdd ? 'Close':'Add'}</button>
        </div>
    )
}

export default Header
