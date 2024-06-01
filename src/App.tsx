import React, { useState, useEffect } from "react";
import "./App.css";
import { Navbar } from "./components/navBar";
import { TabBar } from "./components/tabBar";
import { CompletedHackathons } from "./components/completedHackathons";
import { InReviewHackathons } from "./components/inReviewHackathons";
import { FILTERS } from "./utils/constants";
import { SearchInput } from "./components/searchInput";

function App() {
  const [selectedTab, setSelectedTab] = useState("completed");
  const [selectedFilters, setSelectedFilters] = useState<string[]>(FILTERS);
  useEffect(() => {
    setSelectedFilters(FILTERS);
  }, [selectedTab]);
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <div className="middle-content">
          <TabBar
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
          <div>
            {selectedTab === "completed" ? (
              <CompletedHackathons selectedFilters={selectedFilters} />
            ) : (
              <InReviewHackathons selectedFilters={selectedFilters} />
            )}
          </div>
        </div>
        <SearchInput />
      </div>
    </div>
  );
}

export default App;
