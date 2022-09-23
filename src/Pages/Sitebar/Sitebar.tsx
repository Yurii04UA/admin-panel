import './Sitebar.scss';

export const Sitebar = () => {
  return (
    <div className='sidebar'>
      <a className="logo">
        <div className="circle">
          <div className='square'></div>
        </div>
        <div>Dashboard Kit</div>
      </a>
      <ul className="sidebar-content">
        <li>Overview</li>
        <li>Tickets</li>
        <li>Ideas</li>
        <li>Contacts</li>
        <li>Agents</li>
        <li>Articles</li>
        <li>Settings</li>
        <li>Subscription</li>
      </ul>
    </div>
  );
};

