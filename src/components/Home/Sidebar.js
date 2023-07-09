import { FaScroll } from "react-icons/fa";
import { TbBucket, TbLayoutBoardSplit, TbTargetArrow } from "react-icons/tb";
import { BsListNested } from "react-icons/bs";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "./home.css";
function Layout() {
  return (
    <div
      className="sidebarContainer"
      style={{ display: "flex", height: "100vh" }}
    >
      <Sidebar defaultCollapsed>
        <p className="p-2 text-center">
          <b>Task</b>
        </p>
        <Menu>
          <hr />
          <MenuItem
            icon={<TbBucket className="menuIcon" />}
            component={<Link to="/elementTransfer" />}
          >
            Element Transfer
          </MenuItem>

          <hr />
          <MenuItem
            icon={<BsListNested className="menuIcon" />}
            component={<Link to={"/nestedComponents"} />}
          >
            Nested Components
          </MenuItem>
          <hr />
          <MenuItem
            icon={<FaScroll className="menuIcon" />}
            component={<Link to={"/infiniteScroll"} />}
          >
            Infinite Scroll
          </MenuItem>
          <hr />

          <MenuItem
            icon={<TbTargetArrow className="menuIcon" />}
            component={<Link to={"/hitIt"} />}
          >
            Hit It (Game)
          </MenuItem>
          <hr />
          <MenuItem
            icon={<TbLayoutBoardSplit className="menuIcon" />}
            component={<Link to={"/splitBox"} />}
          >
            Split Box
          </MenuItem>
          <hr />
        </Menu>
      </Sidebar>
      {/* <main>
        <button onClick={() => collapseSidebar()}>Collapse</button>
      </main> */}
    </div>
  );
}

export default Layout;
