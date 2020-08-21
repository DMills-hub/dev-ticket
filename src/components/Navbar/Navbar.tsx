import React, { useState, MouseEvent } from "react";
import { MenuItemProps } from "semantic-ui-react";
import { NavbarMenuItem } from "../../definitions";
import MenuItems from "./components/MenuItems";
import Menu from "./styled-components/Menu";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string | undefined>("Home");
  const handleItemClick = (_: MouseEvent, { name }: MenuItemProps) => {
    setActiveItem(name);
  };
  const menuItems: NavbarMenuItem[] = [
    {
      name: "Home",
      active: activeItem === "Home",
      icon: "home",
      onClick: handleItemClick,
    },
    {
      name: "In Progress",
      active: activeItem === "In progress",
      icon: "folder open outline",
      onClick: handleItemClick,
    },
    {
      name: "Done",
      active: activeItem === "Done",
      icon: "save",
      onClick: handleItemClick,
    },
  ];
  return (
    <Menu icon="labeled">
      <MenuItems items={menuItems} />
    </Menu>
  );
};

export default Navbar;
