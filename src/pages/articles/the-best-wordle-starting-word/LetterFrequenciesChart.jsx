import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const letterFrequencies = [
  ["A", 8392],
  ["E", 7800],
  ["S", 6537],
  ["O", 5219],
  ["R", 5143],
  ["I", 5067],
  ["L", 4246],
  ["T", 4189],
  ["N", 4043],
  ["U", 3361],
  ["D", 2811],
  ["C", 2744],
  ["Y", 2521],
  ["M", 2494],
  ["P", 2299],
  ["H", 2284],
  ["B", 2089],
  ["G", 1971],
  ["K", 1743],
  ["F", 1238],
  ["W", 1171],
  ["V", 878],
  ["Z", 474],
  ["J", 376],
  ["X", 361],
  ["Q", 139],
];

const LetterFrequenciesChart = () => {
  const data = letterFrequencies.map((
    [letter, frequency],
  ) => ({
    letter,
    frequency,
  }));
  const [show, setShow] = useState(false);

  useEffect(() => setShow(true), []);

  return show && (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <XAxis dataKey="letter" />
        <YAxis />
        <Bar dataKey="frequency" className="fill-teal-500 dark:fill-teal-400" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default LetterFrequenciesChart;
