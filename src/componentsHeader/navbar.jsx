import React,{Component} from "react";
import {NavLink} from "react-router-dom";

const menuItems = [

    'about',
    'course',
    'event',
    'blog',
    'contact',
    'profile'
];

class Navbar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            test:'',
            ident:'block',
            active: '',
        };

    }
    handleScroll=()=> {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const windowBottom = windowHeight + window.pageYOffset;

        if (windowBottom >= 800) {
            this.setState({
                test: 'sticky'
            });
        } else {
            this.setState({
                test: ''
            });
        }
    }
    _handleClick(menuItem) {
        this.setState({ active: menuItem });
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    render(){
        
        const activeStyle = {
            fontSize: "15px",
            fontWeight: "700",
            color: '#ff3333' };
        const Style = {
            fontSize: "15px",
            fontWeight: "700",
            color: 'hsl(0, 0%, 31%)' };
    return(

        <div className={`menu-area menu-sticky ${this.state.test}`} style={{display:`${this.props.isIdent? "block":"none"}`,backgroundColor:"transparent"}}>
            <div className="container">
                <div className="main-menu">
                    <div className="row">
                        <div className={`col-sm-12 `}>

                            <NavLink to="" className="rs-menu-toggle"><i className="fa fa-bars"></i>Menu</NavLink>
                            <nav className="rs-menu">
                                <ul className="nav-menu">
                                    <li><NavLink className="ml-2"
                                        style={this.state.active === "" ? activeStyle : Style}
                                        onClick={this._handleClick.bind(this, "")}
                                        to={`/`}>
                                        Home
                                    </NavLink></li>
                                    {menuItems.map(menuItem =>
                                        <li key={menuItem}>
                                            <NavLink className="ml-5"
                                                style={this.state.active === menuItem ? activeStyle : Style}
                                                onClick={this._handleClick.bind(this, menuItem)}
                                                to={`/${menuItem}`}>
                                                {menuItem}
                                            </NavLink>
                                        </li>)}
                                </ul>
                            </nav>

                            <div className="right-bar-icon rs-offcanvas-link text-right">
                                <NavLink className="hidden-xs rs-search" data-target=".search-modal" data-toggle="modal"
                                         to="#"><i className="fa fa-search"></i></NavLink>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
    }
}
export default Navbar;
