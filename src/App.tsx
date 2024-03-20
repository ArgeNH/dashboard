import { useState } from "react";
import Sidebar from "./components/Sidebar";

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className="flex h-screen p-4 gap-4">
      <Sidebar collapsed={collapsed} toggleCollapse={toggleCollapse} />
      <div
        className={`w-full rounded-xl ${
          collapsed
            ? "bg-gray-200 transition-all duration-300 ease-in-out"
            : "bg-gray-300 transition-all duration-300 ease-in-out"
        }`}
      >
        <h1>Main Content</h1>
      </div>
    </div>
  );
}

export default App;
