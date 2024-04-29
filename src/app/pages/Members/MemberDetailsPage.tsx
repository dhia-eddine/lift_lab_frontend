import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface MemberData {
  name: string;
  email: string;
  mobile: string;
  address: string;
}

function AddMembersPage() {
  const { memberId } = useParams<{ memberId: string }>();
  const [formData, setFormData] = useState<MemberData>({
    name: "",
    email: "",
    mobile: "",
    address: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMemberById() {
      const accessToken = localStorage.getItem("access_token");

      if (!accessToken) {
        setError("Access token not found. Please log in again.");
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:3000/clients/${memberId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (response.ok) {
          const memberData: MemberData = await response.json();
          setFormData(memberData);
        } else {
          const data = await response.json();
          setError(data.message);
        }
      } catch (error) {
        setError("An error occurred while fetching member data.");
      }
    }

    fetchMemberById();
  }, [memberId]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const accessToken = localStorage.getItem("access_token");

    if (!accessToken) {
      setError("Access token not found. Please log in again.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/clients/${memberId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        navigate("/members");
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      setError("An error occurred while updating member data.");
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
    setFormData({
      name: "",
      email: "",
      mobile: "",
      address: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="px-10 pt-8">
        <div className="pb-12 border-b border-gray-300">
          <h2 className="text-lg font-semibold text-gray-900">Edit Member</h2>

          <div className="mt-10 grid grid-cols-1 gap-y-8 sm:grid-cols-5 sm:gap-x-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  className="block w-full px-3 py-2 text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  onChange={handleChange}
                  value={formData.name}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder="ex@ex.com"
                  className="block w-full px-3 py-2 text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-gray-900"
              >
                Mobile Phone
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  name="mobile"
                  id="mobile"
                  autoComplete="tel"
                  pattern="(\+?216)?[0-9]{8}"
                  title="Please enter a valid mobile phone number"
                  placeholder="12345678"
                  className="block w-full px-3 py-2 text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  onChange={handleChange}
                  value={formData.mobile}
                />
              </div>
            </div>
            <div className="col-span-full sm:col-span-4">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium text-gray-900"
              >
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full px-3 py-2 text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  onChange={handleChange}
                  value={formData.address}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-6 space-x-6 pb-4">
        <button
          type="button"
          className="px-3 py-2 text-sm font-semibold text-white bg-red-600 rounded-md"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-semibold text-white bg-blue-700 rounded-md shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default AddMembersPage;
