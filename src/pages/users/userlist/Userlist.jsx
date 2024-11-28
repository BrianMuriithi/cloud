import "./userlist.scss"
import Sidebar from "../../../components/sidebar/Sidebar"
import Navbar from "../../../components/navbar/Navbar"
import Usertable from "../../../components/usertable/Usertable"


const Userlist = () => {
  return (
    <div className="userlist">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Usertable/>
      </div>
    </div>
  )
}

export default Userlist