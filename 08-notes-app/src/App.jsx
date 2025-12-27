import React, { useState } from "react";

const App = () => {
  const [heading, setHeading] = useState("");
  const [details, setDetails] = useState("");
  const [tasks, setTasks] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...tasks];
    copyTask.push({ heading, details });
    setTasks(copyTask);

    setHeading("");
    setDetails("");
  };

  // SIMPLE DELETE FUNCTION
  const deleteHandler = (index) => {
    const copyTask = [...tasks];
    copyTask.splice(index, 1);
    setTasks(copyTask);
  };

  return (
    <div className="h-screen flex bg-black text-white">

      {/* LEFT SIDE */}
      <form
        className="flex flex-col gap-5 w-1/3 p-10"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          placeholder="Enter Task Heading"
          className="px-5 py-2 border-2 border-white bg-transparent rounded"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        />

        <textarea
          placeholder="Enter details"
          className="px-5 py-2 h-20 border-2 border-white bg-transparent rounded"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <button className="bg-white text-black py-3 rounded">
          Add Note
        </button>
      </form>

      {/* RIGHT SIDE */}
      <div className="flex-1 p-10 h-full overflow-auto">
        <h1 className="text-4xl mb-6 font-bold">Recent Notes</h1>

        <div className="grid grid-cols-3 gap-4">
          {tasks.map((elem, idx) => (
            <div
              key={idx}
              className="h-52 bg-white text-black rounded flex flex-col justify-between"
            >
              <div>
                <h1 className="font-bold text-xl p-4">
                  {elem.heading}
                </h1>
                <p className="px-4">
                  {elem.details}
                </p>
              </div>

              {/* SIMPLE DELETE BUTTON */}
              <button
                onClick={() => deleteHandler(idx)}
                className="bg-red-400 text-white py-2 rounded-b"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default App;
