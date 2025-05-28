export const Tasks = (props) => {
  return (
    <div>
      <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {props.tasks.map((task) => (
          <li key={task.id} className="flex">
            <button className="bg-slate-400 text-white p-2 rounded-md w-full"> {task.title} 
            </button> <button> ">" </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
