import "./topbar.scss";
import { Person, Mail } from "@mui/icons-material";


export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">create.</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+1 (503) 905-0322</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>devin@devingaughan.com</span>
                    </div>
                </div>

                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
