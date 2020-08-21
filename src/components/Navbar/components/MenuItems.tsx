import React from "react";
import { NavbarMenuItem } from "../../../definitions";
import MenuItem from "./MenuItem";

interface MenuItemProps {
  items: NavbarMenuItem[];
}

const MenuItems = ({ items }: MenuItemProps): JSX.Element | null => {
  if (items.length === 0) return null;
  return (
    <>
      {items.map((item) => (
        <MenuItem
          key={item.name}
          active={item.active}
          icon={item.icon}
          name={item.name}
          onClick={item.onClick}
        />
      ))}
    </>
  );
};

export default MenuItems;
