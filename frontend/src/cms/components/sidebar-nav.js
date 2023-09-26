import React, { useState } from 'react'
import DropdownMenu from "./menu/dropdown-menu"
import MenuNoDropdown from "./menu/menu-no-dropdown"

const SidebarNav = () => {
    let [menu, setMenu] = useState([
        {
            title: "Product",
            dropdown: true,
            iconClass: "gi gi-shopping_cart sidebar-nav-icon",
            iconHideClass: "fa fa-angle-left sidebar-nav-indicator sidebar-nav-mini-hide",
            active: false,
            list: [
                {
                    title: "Category Control",
                    link: "/product-category",
                    iconHideClass: "fa fa-angle-left sidebar-nav-indicator sidebar-nav-mini-hide",
                    iconClass: "gi gi-shopping_cart sidebar-nav-icon",
                    active: false
                },
                {
                    title: "Category Create",
                    link: "/#",
                    iconHideClass: "fa fa-angle-left sidebar-nav-indicator sidebar-nav-mini-hide",
                    iconClass: "gi gi-shopping_cart sidebar-nav-icon",
                    active: false
                },
                {
                    title: "Product List",
                    link: "/#",
                    iconHideClass: "fa fa-angle-left sidebar-nav-indicator sidebar-nav-mini-hide",
                    iconClass: "gi gi-shopping_cart sidebar-nav-icon",
                    active: false
                },
                {
                    title: "Create Product",
                    link: "/#",
                    iconHideClass: "fa fa-angle-left sidebar-nav-indicator sidebar-nav-mini-hide",
                    iconClass: "gi gi-shopping_cart sidebar-nav-icon",
                    active: false
                }
            ]
        },
        {
            title: "News",
            dropdown: true,
            iconClass: "gi gi-shopping_cart sidebar-nav-icon",
            iconHideClass: "fa fa-angle-left sidebar-nav-indicator sidebar-nav-mini-hide",
            active: false,
            list: [
                {
                    title: "News List",
                    link: "/#",
                    iconHideClass: "fa fa-angle-left sidebar-nav-indicator sidebar-nav-mini-hide",
                    iconClass: "gi gi-shopping_cart sidebar-nav-icon",
                    active: false
                },
                {
                    title: "Create News",
                    link: "/#",
                    iconHideClass: "fa fa-angle-left sidebar-nav-indicator sidebar-nav-mini-hide",
                    iconClass: "gi gi-shopping_cart sidebar-nav-icon",
                    active: false
                }
            ]
        }
    ])

    const updateMenu = (menuNew) => {
        menu.forEach((e, i) => {
            if (e.title === menuNew.title) {
                menu[i].active = menuNew.active
            }
        })
        setMenu(menu)
    }

    let itemsMenu = menu.map((e, i) => {
        return (e.dropdown) ? <DropdownMenu menu={e} updateStatusMenu={updateMenu} key={i} /> : <MenuNoDropdown key={i} />
    })
    return (
        <>
            <ul className="sidebar-nav">
                {itemsMenu}
                <li className="sidebar-header">
                    <span className="sidebar-header-options clearfix">
                        <a href="/#" data-toggle="tooltip" title="Quick Settings"><i className="gi gi-shopping_cart sidebar-nav-icon" /></a>
                    </span>
                    <span className="sidebar-header-title">Ecommerce</span>
                </li>
            </ul>
        </>
    )
}
export default SidebarNav