import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { dataGraph } from "../../../../Constants";
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
        <GraphInfo title="Resolved" description="449" />
        <GraphInfo title="Received" description="426" />
        <GraphInfo title="Average first response time" description="33m" />
        <GraphInfo title="Average response time" description="3h 8m" />
        <GraphInfo title="Resolution within SLA" description="94%" />
      </div>
    </div>
  );
};
