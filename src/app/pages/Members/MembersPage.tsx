import { useEffect, useState } from "react";
import avatar from "../../../assets/avatar.png";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

interface Member {
  id: number;
  name: string;
  picture: string | null;
}

export default function Members() {
  const [members, setMembers] = useState<Member[]>([]);
  const [expirationDaysMap, setExpirationDaysMap] = useState<
    Map<number, number>
  >(new Map());
  const [startDayMap, setStartDayMap] = useState<Map<number, Date>>(new Map());

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = localStorage.getItem("access_token");

      try {
        // Fetch all members
        const membersResponse = await fetch("http://localhost:3000/clients", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const membersData: Member[] = await membersResponse.json();
        setMembers(membersData);

        // Fetch expiration days for each member
        const expirationDaysPromises = membersData.map(async (member) => {
          const expirationDaysResponse = await fetchExpirationDays(
            member.id,
            accessToken
          );
          return [member.id, expirationDaysResponse] as [number, number];
        });
        const expirationDaysResults = await Promise.all(expirationDaysPromises);
        const expirationDaysMap = new Map(expirationDaysResults);
        setExpirationDaysMap(expirationDaysMap);

        // Fetch dtart days for each member
        const startDayMapPromises = membersData.map(async (member) => {
          const startDayResponse = await fetchStartDay(member.id, accessToken);
          return [member.id, startDayResponse] as [number, Date];
        });
        const startDayResults = await Promise.all(startDayMapPromises);
        const startDayMap = new Map(startDayResults);
        setStartDayMap(startDayMap);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchExpirationDays = async (
    memberId: number,
    token: string | null
  ): Promise<number> => {
    if (!token) return -1;

    try {
      const response = await fetch(
        `http://localhost:3000/clients/${memberId}/subscription-period`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      if ((data as number) < 0) {
        return -1;
      }

      return data as number;
    } catch (error) {
      console.error("Error fetching expiration date:", error);
      return -1;
    }
  };

  const fetchStartDay = async (
    memberId: number,
    token: string | null
  ): Promise<Date> => {
    if (!token) return new Date("2000-01-01");

    try {
      const response = await fetch(
        `http://localhost:3000/clients/first-subscription-date/${memberId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        // Handle non-OK responses (e.g., 404 Not Found)
        console.error(
          `Error fetching start date for member ${memberId}: ${response.status} ${response.statusText}`
        );
        return new Date(); // Or provide a fallback value or handle the error appropriately
      }

      const data = await response.json();

      return new Date(data); // Assuming the JSON response contains a startDate field
    } catch (error) {
      console.error(`Error fetching start date for member ${memberId}:`, error);
      return new Date(); // Or provide a fallback value or handle the error appropriately
    }
  };

  return (
    <div className="pl-10 pr-10">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="mt-6 flex items-center sm:justify-end gap-x-6 pb-4 justify-center sm:pr-9">
            <Link
              to="addmember" // Relative path to the nested route
              className="rounded-md bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Add Member
            </Link>
          </div>
          <ul
            role="list"
            className="divide-y divide-gray-100 sm:pl-10 sm:pr-10"
          >
            {members.map((member) => (
              <Link
                to={`/members/details/${member.id}`}
                key={member.id}
                className="rounded-full block  border-gray-200 hover:bg-blue-100 mb-2 "
              >
                <li className="flex justify-between gap-x-6 py-5 pl-5 pr-5">
                  <div className="flex min-w-0 gap-x-4">
                    <img
                      className="h-12 w-12 flex-none rounded-full bg-gray-50"
                      src={member.picture || avatar}
                      alt=""
                    />
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        {member.name}
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        {startDayMap.has(member.id)
                          ? startDayMap.get(member.id) ===
                            new Date("2000-01-01")
                            ? "Start date not available"
                            : `Active member, Since ${
                                startDayMap
                                  .get(member.id)
                                  ?.toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "2-digit",
                                    year: "numeric",
                                  }) || "Start date not available"
                              }`
                          : "Start date not available"}
                      </p>
                    </div>
                  </div>
                  <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">
                      {expirationDaysMap.has(member.id)
                        ? expirationDaysMap.get(member.id) === -1
                          ? "Subscription Expired"
                          : `Expires in ${expirationDaysMap.get(
                              member.id
                            )} days`
                        : "Subscription Expired"}
                    </p>
                    <div className="flex items-center space-x-4 mt-2">
                      <FaEdit className="text-blue-500 cursor-pointer" />{" "}
                      {/* Edit icon */}
                      <FaTrashAlt className="text-red-500 cursor-pointer" />{" "}
                      {/* Delete icon */}
                    </div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
