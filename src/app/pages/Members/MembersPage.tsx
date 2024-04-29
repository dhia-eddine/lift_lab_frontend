import { useEffect, useState } from "react";
import avatar from "../../../assets/avatar.png";
import { Link } from "react-router-dom";

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
      return data as number;
    } catch (error) {
      console.error("Error fetching expiration date:", error);
      return -1;
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
          <ul role="list" className="divide-y divide-gray-100 pl-10 pr-10">
            {members.map((member) => (
              <li key={member.id} className="flex justify-between gap-x-6 py-5">
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
                      Active member, Since
                    </p>
                  </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">
                    {expirationDaysMap.has(member.id)
                      ? expirationDaysMap.get(member.id) === -1
                        ? "Expiration not available"
                        : `Expires in ${expirationDaysMap.get(member.id)} days`
                      : "Expiration not available"}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
