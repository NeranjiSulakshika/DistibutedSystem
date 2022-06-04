import React from "react";
import { Doughnut, Pie } from "react-chartjs-2";

export default function Graph(props) {
  const state = {
    labels: ["Pending", "Complete"],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: ["#B21F00", "#2FDE00"],
        hoverBackgroundColor: ["#501800", "#175000"],
        data: props.data.stat ?? [],
      },
    ],
  };
  const donutOptions = {
    cutoutPercentage: 100,
    rotation: 170,
  };
  return (
    <div style={{ width: "280px" }}>
      <h1 className="text-green" style={{ fontWeight: 100 ,fontSize:"52px"}}>
        {props.data.name ?? ""}
      </h1>
      <Doughnut
        width={200}
        height={200}
        data={state}
        options={{
          cutout: "80%",
          plugins: {
            legend: {
              display: false,
            },
          },
          borderWidth: 0,
        }}
      />
    </div>
  );
}
