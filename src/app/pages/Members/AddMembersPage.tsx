import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddMembersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const accessToken = localStorage.getItem("access_token");

    // Check if access token is available
    if (!accessToken) {
      setError("Access token not found. Please log in again.");
      return;
    }

    // Send POST request to backend
    try {
      const response = await fetch("http://localhost:3000/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Successfully saved data
        navigate("/"); // Redirect to desired page
      } else {
        const data = await response.json();
        setError(data.message); // Handle backend error message
      }
    } catch (error) {
      setError("An error occurred while saving data."); // Handle network error
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleCancel = () => {
    // Clear form data
    setFormData({
      name: "",
      email: "",
      mobile: "",
      address: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="items-center justify-between pl-10 pr-10 pt-8">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Use a permanent address where you can receive mail.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-5 ">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  className="block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                  value={formData.name}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="ex@ex.com"
                  className="block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="mobile"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Mobile Phone
              </label>
              <div className="mt-2">
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  autoComplete="tel"
                  pattern="(\+?216)?[0-9]{8}"
                  title="Please enter a valid mobile phone number"
                  placeholder="12345678"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 "
                  onChange={handleChange}
                  value={formData.mobile}
                />
              </div>
            </div>
            <div className="col-span-full sm:col-span-4">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                  value={formData.address}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center gap-x-6 pb-4">
        <button
          type="button"
          className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default AddMembersPage;
