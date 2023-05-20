import React, { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";


const ShopCategory = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [toys, setToys] = useState([]);

    console.log(tabIndex);

    useEffect(() => {
      if (tabIndex === 0) {
        fetch("http://localhost:5000/allToys/Avengers")
          .then((res) => res.json())
          .then((data) => setToys(data));
      } else if (tabIndex === 1) {
        fetch("http://localhost:5000/allToys/Guardians of the Galaxy")
          .then((res) => res.json())
          .then((data) => setToys(data));
      } else if (tabIndex === 2) {
        fetch("http://localhost:5000/allToys/Civil War")
          .then((res) => res.json())
          .then((data) => setToys(data));
      }
    }, [tabIndex]);
    console.log(toys);

  return (
    <div className="my-8">
      <p className="text-5xl font-serif mb-6 text-center py-8">
        Shop By Category
      </p>

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Civil War</Tab>
          <Tab>Avengers</Tab>
          <Tab>Transformer</Tab>
        </TabList>

        <TabPanel>
          {toys.map((toy) => (
            <p>{toy.toyName}</p>
          ))}
        </TabPanel>
        <TabPanel>
          {toys.map((toy) => (
            <p>{toy.toyName}</p>
          ))}
        </TabPanel>
        <TabPanel>
          {toys.map((toy) => (
            <p>{toy.toyName}</p>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default ShopCategory