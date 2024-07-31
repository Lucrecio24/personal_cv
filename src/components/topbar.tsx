import "./topbar.css"
import {Link} from "react-router-dom";
function TopBar() {

  return (
    <div className="topbar-all">
        <div className="name">
          <Link id="mainmenu_button" to={"/"}>Keep it PG +18</Link>
        </div>
        <div className="buttons">
              <Link id="button" to={"/cv"}>CV</Link>
              <Link id="button" to={"/graphs"}>Graphs</Link>
        </div>
    </div>
  )
}

export default TopBar