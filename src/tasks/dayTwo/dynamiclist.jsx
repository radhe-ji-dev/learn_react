const todos = {
	items: ['Learn React', 'Build a React App', 'Deploy the App'],
};


function DynamicList() {
    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {todos.items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default DynamicList;