import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import dataTabs from "../../data/TabsIconSection/tabs-default-data.json";

const TabsDefault = () => (
  <section>
    <div className="container">
      <div className="row">
        <div className="col-sm-8 section-heading">
          <h2>Default Tabs</h2>
        </div>
      </div>
      <div className="row mt-50">
        <div className="col-md-8 col-md-offset-2">
          <Tabs className="light-tabs">
            <TabList className="nav nav-tabs text-center">
              {dataTabs.map((tab) => (
                <Tab key={tab.id}>
                  <span>{tab.title}</span>
                </Tab>
              ))}
            </TabList>
            <div className="tab-content" >
              {dataTabs.map((tab) => (
                <TabPanel key={tab.id} className="tab-pane fade in active">
                  <p>{tab.text}</p>
                </TabPanel>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  </section>
);

export default TabsDefault;
