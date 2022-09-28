import "./GraphHeader.scss";

export const GraphHeader = () => {
  return (
    <div className="graph-header">
      <div>
        <h2 className="graph-title">Today`s trends</h2>
        <div className="graph-time">as of 25 May 2019, 09:41 PM</div>
      </div>
      <div className="example-line">
        <div className="today">Today</div>
        <div className="yestarday">Yestarday</div>
      </div>
    </div>
  );
};
