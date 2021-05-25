import React from "react"

class NavItem extends React.Component{
    getStyle(){
        return {
            textDecoration : "none",
            color : "black"
        }
    }
    render(){
        return(
            <li>
                <a style={this.getStyle()} href={this.props.route ? this.props.link : "not"}>{this.props.name}</a>
            </li>
        )
    }
}

export default NavItem