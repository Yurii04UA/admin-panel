import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { GraphHeader, GraphInfo } from "./";

import "./Graph.scss";

const data = [
  {
    name: "0",
    Yestarday: 33,
    Today: 12,
  },
  {
    name: "1",
    Yestarday: 32,
    Today: 20,
  },
  {
    name: "2",
    Yestarday: 31,
    Today: 28,
  },
  {
    name: "3",
    Yestarday: 29,
    Today: 29,
  },
  {
    name: "4",
    Yestarday: 25,
    Today: 30,
  },
  {
    name: "5",
    Yestarday: 25,
    Today: 29,
  },
  {
    name: "6",
    Yestarday: 26,
    Today: 29,
  },
  {
    name: "7",
    Yestarday: 28,
    Today: 35,
  },
  {
    name: "8",
    Yestarday: 33,
    Today: 50,
  },
  {
    name: "9",
    Yestarday: 33,
    Today: 48,
  },
  {
    name: "10",
    Yestarday: 32,
    Today: 20,
  },
  {
    name: "11",
    Yestarday: 21,
    Today: 20,
  },
  {
    name: "12",
    Yestarday: 20,
    Today: 22,
  },
  {
    name: "13",
    Yestarday: 21,
    Today: 25,
  },
  {
    name: "14",
    Yestarday: 26,
    Today: 30,
  },
  {
    name: "15",
    Yestarday: 27,
    Today: 32,
  },
  {
    name: "16",
    Yestarday: 42,
    Today: 49,
  },
  {
    name: "17",
    Yestarday: 29,
    Today: 47,
  },
  {
    name: "18",
    Yestarday: 30,
    Today: 44,
  },
  {
    name: "19",
    Yestarday: 31,
    Today: 40,
  },
  {
    name: "20",
    Yestarday: 32,
    Today: 38,
  },
];

export const Graph = () => {
  return (
    <div className="graph">
      <div className="graph-left">
        <GraphHeader />
        <LineChart
          width={650}
          height={400}
          data={data}
          margin={{
            top: 25,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 0" />
          <XAxis dataKey="name" />
          <YAxis orientation="right" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Today" stroke="#3751FF" />
          <Line type="monotone" dataKey="Yestarday" stroke="#00000074" />
        </LineChart>
      </div>

      <div className="graph-right">
        <GraphInfo title="Resolved" description="449" />
        <GraphInfo title="Received" description="426" />
        <GraphInfo title="Average first response time" description="33m" />
        <GraphInfo title="Average response time" description="3h 8m" />
        <GraphInfo title="Resolution within SLA" description="94%" />
      </div>
    </div>
  );
};
