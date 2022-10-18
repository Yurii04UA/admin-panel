import s from './Logo.module.scss';

export const Logo = () => {
  return (
    <div className={s.logo}>
      <div className={s.circle}>
        <div className={s.square}></div>
      </div>
      <div>Dashboard Kit</div>
    </div>
  );
};

