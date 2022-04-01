import { auth } from '../../../firebase';
import { useNavigate } from 'react-router-dom';
import Header from '../block/Header';
import Date from '../block/Date';
import Menu from '../block/Menu';
import TabMenu from '../block/TabMenu';


const Home = () => {
    return (
      <div>
        <Header/>
        <Date/>
        <Menu/>
        <TabMenu/>
      </div>
    );
};

export default Home;