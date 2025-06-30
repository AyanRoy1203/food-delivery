import React from "react";
import "./MenuCard.scss";
import { IMenuItems } from "../../interfaces/restaurant";
interface ItemCardProps 
{
  itemData:IMenuItems;
}
const MenuCard: React.FC<ItemCardProps> = ({itemData}) => {
  return (
    
      <div className="menu_card">
        <div className="image_section">
          <img src="" alt="" />
        </div>
        <div className="content_section">
          <div className="title">
            Lorem ipsum dolor
          </div>
          <div className="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, omnis.
            </div>
          <div className="button">
            Add Item
            </div>
        </div>
      </div>
    
  );
};

export default MenuCard;
