import { useState, lazy, Suspense, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Layout from "./components/layout";
import axios from "axios";
import "./App.css";

function App() {
  const location = useLocation();
  const currentTabId = location.pathname.replace("/backendless_CMS/", "");
  const navigate = useNavigate();
  const [tabsData, setTabsData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/Stereoboi/backendless_CMS/main/public/tabs.json"
      )
      .then((response) => {
        const sortedData = response.data.sort((a, b) => a.order - b.order);
        setTabsData(sortedData);
        if (!currentTabId) {
          navigate("/backendless_CMS/dummyList");
        }
        setDataLoaded(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentTabId, navigate]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          dataLoaded ? <Layout data={tabsData} /> : <div>Loading...</div>
        }
      >
        {tabsData.map((tab) => {
          const Table = lazy(() => {
            return import(`./tabs/${tab.path}.jsx`);
          });
          return (
            <Route
              key={tab.id}
              path={tab.id}
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  {<Table />}
                </Suspense>
              }
            />
          );
        })}
      </Route>
    </Routes>
  );
}

export default App;
