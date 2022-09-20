interface ITitle{
    title:string;
    subTitle:string;
}

const AuthBodyTitle = ({title,subTitle}: ITitle) => {
    return (
        <div className='title'>
            <h2>{title}</h2>
            <p>{subTitle}</p>
        </div>
    );
};

export default AuthBodyTitle;
