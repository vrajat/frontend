import { AppSidebarNav } from "@coreui/react";

class SidebarNav extends AppSidebarNav {
  hideMobile(e) {
    console.log("In HideMobile");
    e.preventDefault();
  }
}

export default SidebarNav;