import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"
import "../../style/components/block/TabMenu.scss"
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
          <PanelItem title="追加するメニュー"/>
          <PanelItem title="不足している材料"/>
        </TabPanel>
        <TabPanel className="TabItem">
          <PanelItem title="追加するメニュー"/>
          <PanelItem title="不足している材料"/>
        </TabPanel>
        <TabPanel className="TabItem">
          <PanelItem title="追加するメニュー"/>
          <PanelItem title="不足している材料"/>
        </TabPanel>
        <TabPanel className="TabItem">
          <PanelItem title="追加するメニュー"/>
          <PanelItem title="不足している材料"/>
        </TabPanel>
        <TabPanel className="TabItem">
          <PanelItem title="追加するメニュー"/>
          <PanelItem title="不足している材料"/>
        </TabPanel>
        <TabPanel className="TabItem">
          <PanelItem title="追加するメニュー"/>
          <PanelItem title="不足している材料"/>
        </TabPanel>
        <TabPanel className="TabItem">
          <PanelItem title="追加するメニュー"/>
          <PanelItem title="不足している材料"/>
        </TabPanel>
      </div>
    </Tabs>
  )
}

export default TabMenu