import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";




const ShopCategory = () => {
  return (
    <div className="my-8">
      <p className="text-5xl font-serif mb-6 text-center py-8">
        Shop By Category
      </p>

      <Tabs>
        <TabList>
          <Tab>Civil War</Tab>
          <Tab>Guardians of The Galaxy</Tab>
          <Tab>Rangkok</Tab>
        </TabList>

        <TabPanel>

                  <div className='grid md:grid-cols-2'>

                  </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default ShopCategory