import "./sidebar.scss"
import GridViewIcon from '@mui/icons-material/GridView';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {Link} from "react-router-dom"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{textDecoration: "none"}}>
                <span className="logo">remida</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                    <GridViewIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{textDecoration: "none"}}>
                    <li>
                        <PersonOutlineOutlinedIcon className="icon"/>
                        <span>Users</span>
                    </li>
                    </Link>
                    <Link to="/products" style={{textDecoration: "none"}}>
                    <li>
                        <StoreOutlinedIcon className="icon"/>
                        <span>Products</span>
                    </li>
                    </Link>
                    <li>
                        <InventoryOutlinedIcon className="icon"/>
                        <span>Licences & Permits</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <MarkUnreadChatAltOutlinedIcon className="icon"/>
                        <span>Notifications</span>
                    </li>
                    <li>
                        <AssessmentOutlinedIcon className="icon"/>
                        <span>Reports</span>
                    </li>
                    <li>
                        <SettingsOutlinedIcon className="icon"/>
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <SupervisorAccountOutlinedIcon className="icon"/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className="icon"/>
                        <span>Logout</span>
                    </li>
                </ul>

            </div>
            <div className="bottom">
                <div className="coloroption"></div>
                <div className="coloroption"></div>
            </div>
        </div>
    )
}

export default Sidebar