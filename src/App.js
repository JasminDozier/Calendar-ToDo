import React from "react";
import Layout from "./components/layout";
import Calendar from "./components/calendar/calendar";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <Calendar />
      </Layout>
    </div>
  );
}

export default App;
