// import external modules
import React, { Component } from "react";

import {
   Home,
   Mail,
   Users,
   File,
   List
} from "react-feather";
import { NavLink } from "react-router-dom";

// Styling
import "../../../../assets/scss/components/sidebar/sidemenu/sidemenu.scss";
// import internal(own) modules
import SideMenu from "../sidemenuHelper";

class SideMenuContent extends Component {
   render() {
      return (
         <SideMenu className="sidebar-content" toggleSidebarMenu={this.props.toggleSidebarMenu}>
            <SideMenu.MenuSingleItem >
               <NavLink to="/agency" activeclassname="active">
                  <i className="menu-icon">
                     <Users size={18} />
                  </i>
                  <span className="menu-item-text">จัดการหน่วยงาน</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
            <SideMenu.MenuSingleItem >
               <NavLink to="/process" activeclassname="active">
                  <i className="menu-icon">
                     <Mail size={18} />
                  </i>
                  <span className="menu-item-text">จัดการกระบวนงาน</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
            <SideMenu.MenuSingleItem >
               <NavLink to="/document" activeclassname="active">
                  <i className="menu-icon">
                     <File size={18} />
                  </i>
                  <span className="menu-item-text">จัดการเอกสาร</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
         </SideMenu>
      );
   }
}

export default SideMenuContent;