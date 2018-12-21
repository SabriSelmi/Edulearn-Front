import React,{Component} from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

const menuItems = [
	'home',
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
            active: '',

            ident:'block'
        };

    }

    /*******AUTH***

    renderContent=()=>{
        console.log("this is props"+this.props.auth)
        switch(this.props.auth){
            case null:return;
            case false: return (
            <li><a href="/auth/google">login with google</a></li>
            );
            default: return <li><a href='/api/logout'>Logout</a></li>
        }
    
    }*/



    /****************** */
    handleScroll=()=> {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const windowBottom = windowHeight + window.pageYOffset;
        console.log(windowBottom)
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
        console.log(this.props)
        console.log("aaaa",this.props.auth)
        const activeStyle = { 
            fontSize: "15px",
            fontWeight: "700",
            color: '#ff3333' };
            const Style = { 
                fontSize: "15px",
                fontWeight: "700",
                color: 'hsl(0, 0%, 31%)' };
    return(

        <div style={{marginTop:"20px"}} className={`menu-area menu-sticky ${this.state.test}`}>
            <div className="container">
                <div className="main-menu">
                    <div className="row">
                        <div className={`col-sm-12 `}>

                            <Link className="rs-menu-toggle" to=""><i className="fa fa-bars"></i>Menu</Link>
                            <nav className="rs-menu">
                           
                                <ul className="nav-menu">

                                
{menuItems.map(menuItem => 
    <li>
<Link
 style={this.state.active === menuItem ? activeStyle : Style} 
 onClick={this._handleClick.bind(this, menuItem)}
to={`/${menuItem}`}>
  {menuItem}
</Link>
</li>)},

</ul>                      
                        </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
    }
}

function mapStateToProps({auth}){
    return {auth};
}
export default   connect (mapStateToProps) (Navbar) ;
