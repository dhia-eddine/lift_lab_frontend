import React, { useState, useEffect } from "react";

// Define an interface for session object
interface Session {
  title: string;
  date: string;
  time: string;
  maxParticipants: number;
}

function SessionPage() {
  // Set the initial state with an empty array of Session objects
  const [sessions, setSessions] = useState<Session[]>([
    {
      title: "Session 1",
      date: "2024-06-01",
      time: "09:00",
      maxParticipants: 20,
    },
    {
      title: "Session 2",
      date: "2024-06-05",
      time: "14:00",
      maxParticipants: 15,
    },
    {
      title: "Session 3",
      date: "2024-06-10",
      time: "11:30",
      maxParticipants: 25,
    },
    {
      title: "Session 4",
      date: "2024-06-15",
      time: "16:45",
      maxParticipants: 18,
    },
  ]);
  const [newSession, setNewSession] = useState<Session>({
    title: "",
    date: "",
    time: "",
    maxParticipants: 0,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewSession({ ...newSession, [name]: value });
  };

  const handleAddSession = () => {
    setSessions([...sessions, newSession]);
    setNewSession({ title: "", date: "", time: "", maxParticipants: 0 });
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Session Scheduling</h1>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Add New Session</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="title"
            placeholder="Session Title"
            value={newSession.title}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-4 py-2"
          />
          <input
            type="date"
            name="date"
            value={newSession.date}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-4 py-2"
          />
          <input
            type="time"
            name="time"
            value={newSession.time}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-4 py-2"
          />
          <input
            type="number"
            name="maxParticipants"
            placeholder="Max Participants"
            value={newSession.maxParticipants}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-4 py-2"
          />
        </div>
        <button
          onClick={handleAddSession}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md mt-4"
        >
          Add Session
        </button>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">Scheduled Sessions</h2>
        {sessions.length === 0 ? (
          <p>No sessions scheduled yet.</p>
        ) : (
          <ul>
            {sessions.map((session, index) => (
              <li key={index} className="bg-gray-100 p-4 rounded-md mb-2">
                <h3 className="font-bold">{session.title}</h3>
                <p>Date: {session.date}</p>
                <p>Time: {session.time}</p>
                <p>Max Participants: {session.maxParticipants}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SessionPage;
