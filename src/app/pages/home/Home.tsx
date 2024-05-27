import React from "react";
import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const subscriptionData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Subscription Trends",
      data: [25, 30, 38, 42, 47, 51, 55, 60, 65, 70, 75, 80],
      fill: true,
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      borderColor: "rgb(59, 130, 246)",
      borderWidth: 2,
    },
  ],
};

const earningData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
  ],
  datasets: [
    {
      label: "Earning",
      data: [500, 1100, 500, 600, 100, 1200, 900, 1000, 1200, 1500],
      backgroundColor: "rgb(147, 51, 234)",
    },
  ],
};

const additionalInfo = [
  { label: "Total members", value: 364 },
  { label: "Active members", value: 215 },
  { label: "Active Coach", value: 20 },
  { label: "Total income", value: "25 600 DT" },
];

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {additionalInfo.map((info, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
          >
            <p className="text-lg font-semibold mb-2">{info.label}</p>
            <p className="text-2xl font-bold">{info.value}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <Line data={subscriptionData} height={400} width={600} />
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <Bar data={earningData} height={400} width={600} />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
