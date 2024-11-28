import "./singleuser.scss"
import Sidebar from "../../../components/sidebar/Sidebar"
import Navbar from "../../../components/navbar/Navbar"
import Usertable from "../../../components/usertable/Usertable"


const Singleuser = () => {
  return (
    <div className="singleuser">
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        Single Usersss
      </div>
    </div>
  )
}

export default Singleuser