import React from "react";
import { ResponsiveCirclePackingCanvas } from '@nivo/circle-packing'

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";



const ChartsStyle = {
    fontFamily: 'sans-serif',
    textAlign: 'center'
  };
  
const data = [
  {
    skill: "Java",
    A: 70,
    B: 110,
    fullMark: 100
  },
  {
    skill: "React",
    A: 85,
    B: 130,
    fullMark: 100
  },
  {
    skill: "HTML and CSS",
    A: 80,
    B: 130,
    fullMark: 100
  },
  {
    skill: "Javascript",
    A: 85,
    B: 100,
    fullMark: 100
  },
  {
    skill: "R",
    A: 82,
    B: 90,
    fullMark: 100
  },
  {
    skill: "Python",
    A: 93,
    B: 85,
    fullMark: 100
  },
  {
    skill: "C++",
    A: 72,
    B: 90,
    fullMark: 100
  },
  {
    skill: "SQL",
    A: 87,
    B: 90,
    fullMark: 100
  },
  {
    skill: "MongoDB",
    A: 81,
    B: 100,
    fullMark: 100
  }
];

export default function App() {
  return (
    <div style = {ChartsStyle}>

    <RadarChart
      cx={300}
      cy={250}
      outerRadius={220}
      width={700}
      height={500}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="skill" />
      <PolarRadiusAxis />
      <Radar
        name="Yash"
        dataKey="A"
        stroke="#8884d8"
        fill="#61dafb"
        fillOpacity={0.6}
      />
    </RadarChart>
    </div>
  );
}

