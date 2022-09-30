import './OverviewFooterTitle.scss';
interface IOverviewFooterTitleProps{
  title: string
  description: string
  onCLick?: () => void
  btnTitle: string
}

export const OverviewFooterTitle = ({title,description,onCLick,btnTitle}: IOverviewFooterTitleProps) => {
  return (
    <div className='overview-title'>
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
