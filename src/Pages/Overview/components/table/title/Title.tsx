import s from './Title.module.scss';

interface ITitleProps {
  title: string
  description: string
  onCLick?: () => void
  btnTitle: string
}

export const Title: React.FC<ITitleProps> = ({ title, description, onCLick, btnTitle }) => {
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
