import { CaretDown, Compass, GitDiff, Headphones, Info, PhoneCall } from "phosphor-react";
import { ContainerBody } from "../../styles/global";
import { ContainerHelp } from "./styles";

export function Home() {
  return (
    <ContainerBody>
        <ContainerHelp>
          <div className="items">
            <div className="category">
              <span>All Category</span>
              <CaretDown size={16} />
            </div>
            <div className="location">
              <span>Track Order</span>
              <Compass size={16} />
            </div>
            <div className="compare">
              <span>Compare</span>
              <GitDiff size={16} />
            </div>
            <div className="customer">
              <span>Customer Suport</span>
              <Headphones size={16} />
            </div>
            <div className="help">
              <span>Need Help</span>
              <Info size={16} />
            </div>
          </div>

          <div className="call">
            <PhoneCall size={18} />
            <span>+244 837-482-233</span>
          </div>
        </ContainerHelp>

        
    </ContainerBody>
  );
}
