interface SidebarProps {
  collapsed: boolean;
  toggleCollapse: () => void;
}

const Sidebar = ({ collapsed, toggleCollapse }: SidebarProps) => {
  return (
    <div
      className={`rounded-xl ${
        collapsed
          ? "w-20 bg-gray-800 transition-all duration-300 ease-in-out"
          : "w-64 bg-gray-700 transition-all duration-300 ease-in-out"
      } text-white`}
    >
      <div className="toggle-btn p-2" onClick={toggleCollapse}>
        {collapsed ? <>&#x25BA;</> : <>&#x25C0;</>}
      </div>
      <ul>
        <li className="py-2">Item 1</li>
        <li className="py-2">Item 2</li>
        <li className="py-2">Item 3</li>
      </ul>
    </div>
  );
};

export default Sidebar;
