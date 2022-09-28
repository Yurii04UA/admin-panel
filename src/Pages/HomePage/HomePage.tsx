import {MainContent} from "../MainContent/MainContent";
import { Sitebar } from "../Sitebar/index";
import "./HomePage.scss";

export const HomePage = () => {
  return (
    <div className="homepage">
      <Sitebar />
      <MainContent />
    </div>
  );
};

export default HomePage;
