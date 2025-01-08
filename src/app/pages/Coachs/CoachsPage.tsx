import React, { useState } from "react";

const initialCoaches = [
  {
    name: "Adriene",
    email: "Adriene@gmail.com",
    role: "Yoga coach",
  },
  {
    name: "Emily",
    email: "Emily@gmail.com",
    role: "Fitness coach",
  },
  {
    name: "Dia",
    email: "dia@gmail.com",
    role: "Meditation coach",
  },
  {
    name: "Sarah",
    email: "Sarah@gmail.com",
    role: "Nutrition coach",
  },
  {
    name: "Ahmed",
    email: "ahmed@gmail.com",
    role: "Strength coach",
  },
  {
    name: "Hayat",
    email: "hayat@gmail.com",
    role: "Life coach",
  },
];

const CoachesPage = () => {
  const [coaches, setCoaches] = useState(initialCoaches);
  const [showForm, setShowForm] = useState(false);
  const [newCoach, setNewCoach] = useState({ name: "", email: "", role: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newCoach.name && newCoach.email && newCoach.role) {
      setCoaches([...coaches, newCoach]);
      setNewCoach({ name: "", email: "", role: "" });
      setShowForm(false);
      setError("");
    } else {
      setError("All fields are required.");
    }
  };

  const handleAddCoach = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setError("");
    setNewCoach({ name: "", email: "", role: "" });
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setNewCoach((prevCoach) => ({
      ...prevCoach,
      [name]: value,
    }));
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Coaches</h1>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleAddCoach}
          >
            Add new Coach
          </button>
        </div>
        {showForm && (
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Add New Coach</h2>
            <form onSubmit={handleSubmit}>
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <div className="mb-4">
                <label htmlFor="name" className="block font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newCoach.name}
                  onChange={handleInputChange}
                  className="border border-gray-400 p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={newCoach.email}
                  onChange={handleInputChange}
                  className="border border-gray-400 p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="role" className="block font-bold mb-2">
                  Role
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={newCoach.role}
                  onChange={handleInputChange}
                  className="border border-gray-400 p-2 w-full"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Add Coach
                </button>
                <button
                  type="button"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {coaches.map((coach, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-gray-500">
                  {coach.name.charAt(0)}
                </span>
              </div>
              <h2 className="text-xl font-bold mb-2">{coach.name}</h2>
              <p className="text-gray-600 mb-2">{coach.role}</p>
              <p className="text-gray-600">{coach.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoachesPage;
