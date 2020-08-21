import React from "react";
import CustomMenuItem from "../styled-components/MenuItem";
import { NavbarMenuItem } from "../../../definitions";
import { Icon } from "semantic-ui-react";

const MenuItem = ({ name, icon, active, onClick }: NavbarMenuItem) => (
  <CustomMenuItem name={name} onClick={onClick} active={active}>
    <Icon name={icon} />
    {name}
  </CustomMenuItem>
);

export default MenuItem;
