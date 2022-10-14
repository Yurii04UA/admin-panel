import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { dataGraph } from "./mock";
import { GraphHeader, GraphInfo } from "./";

import "./Graph.scss";

export const Graph = () => {
  return (
    <div className="graph">
      <div className="graph-left">
        <GraphHeader />
        <LineChart
          width={650}
          height={400}
          data={dataGraph}
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
        <GraphInfo label="Resolved" value="449" />
        <GraphInfo label="Received" value="426" />
        <GraphInfo label="Average first response time" value="33m" />
        <GraphInfo label="Average response time" value="3h 8m" />
        <GraphInfo label="Resolution within SLA" value="94%" />
      </div>
    </div>
  );
};
