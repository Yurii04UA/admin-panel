import s from './OverviewFooterTitle.module.scss';

interface IOverviewFooterTitleProps {
  title: string
  description: string
  onCLick?: () => void
  btnTitle: string
}

export const OverviewFooterTitle: React.FC<IOverviewFooterTitleProps> = ({ title, description, onCLick, btnTitle }) => {
  return (
    <div className={s.overviewTitle}>
      <div>
        <h2>{title}</h2>
        <div>{description}</div>
      </div>
      <button onClick={onCLick}>
        {btnTitle}
      </button>
    </div>
  );
};
