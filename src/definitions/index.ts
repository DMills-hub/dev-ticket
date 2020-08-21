import { MouseEvent } from "react";
import { MenuItemProps } from "semantic-ui-react";

export interface NavbarMenuItem {
  name: string;
  active: boolean;
  icon: any;
  onClick: (_: MouseEvent, { name }: MenuItemProps) => void;
}
