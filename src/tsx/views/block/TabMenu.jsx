import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"
import "../../style/components/block/TabMenu.scss"
import FriLackData from "../database/FriLackData";
import FriMenuData from "../database/FriMenuData";
import MonLackData from "../database/MonLackDate";
import MonMenuData from "../database/MonMenuData";
import TaskManagement from "../database/MonMenuData";
import SatLackData from "../database/SatLackData";
import SatMenuData from "../database/SatMenuData";
import SunLackData from "../database/SunLackData";
import SunMenuData from "../database/SunMenudata";
import ThuLackData from "../database/ThuLackData";
import ThuMenuData from "../database/ThuMenuData";
import TueLackData from "../database/TueLackData";
import TueMenuData from "../database/TueMenuData";
import WedLackData from "../database/WedLackData";
import WedMenuData from "../database/WedMenuData";
import PanelItem from "./PanelItem";

function TabMenu(){
  return(
    <Tabs className="Tabs">
      <TabList className="TabList">
        <Tab>1日目</Tab>
        <Tab>2日目</Tab>
        <Tab>3日目</Tab>
        <Tab>4日目</Tab>
        <Tab>5日目</Tab>
        <Tab>6日目</Tab>
        <Tab>7日目</Tab>
      </TabList>

      <div className="TabPanel">
        <TabPanel className="TabItem">
          <PanelItem title="追加するメニュー" content={<MonMenuData/>}/>
          <PanelItem title="不足している材料" content={<MonLackData/>}/>
        </TabPanel>
        <TabPanel className="TabItem">
          <PanelItem title="追加するメニュー" content={<TueMenuData/>}/>
          <PanelItem title="不足している材料" content={<TueLackData/>}/>
        </TabPanel>
        <TabPanel className="TabItem">
          <PanelItem title="追加するメニュー" content={<WedMenuData/>}/>
          <PanelItem title="不足している材料" content={<WedLackData/>}/>
        </TabPanel>
        <TabPanel className="TabItem">
          <PanelItem title="追加するメニュー" content={<ThuMenuData/>}/>
          <PanelItem title="不足している材料" content={<ThuLackData/>}/>
        </TabPanel>
        <TabPanel className="TabItem">
          <PanelItem title="追加するメニュー" content={<FriMenuData/>}/>
          <PanelItem title="不足している材料" content={<FriLackData/>}/>
        </TabPanel>
        <TabPanel className="TabItem">
          <PanelItem title="追加するメニュー" content={<SatMenuData/>}/>
          <PanelItem title="不足している材料" content={<SatLackData/>}/>
        </TabPanel>
        <TabPanel className="TabItem">
          <PanelItem title="追加するメニュー" content={<SunMenuData/>}/>
          <PanelItem title="不足している材料" content={<SunLackData/>}/>
        </TabPanel>
      </div>
    </Tabs>
  )
}

export default TabMenu