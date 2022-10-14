import s from "./GraphHeader.module.scss";

export const GraphHeader = () => {
  return (
    <div className={s.graphHeader}>
      <div>
        <h2 className={s.graphTitle}>Today's trends</h2>
        <div className={s.graphTime}>as of 25 May 2019, 09:41 PM</div>
      </div>
      <div className={s.exampleLine}>
        <div className={s.today}>Today</div>
        <div className={s.yestarday}>Yestarday</div>
      </div>
    </div>
  );
};
