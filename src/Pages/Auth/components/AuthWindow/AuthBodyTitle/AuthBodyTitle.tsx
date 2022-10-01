import s from './AuthBodyTitle.module.scss';

interface ITitle {
  title: string;
  subTitle: string;
}

export const AuthBodyTitle: React.FC<ITitle> = ({ title, subTitle }) => {
  return (
    <div className={s.title}>
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </div>
  );
};

