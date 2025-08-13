import React from "react";
import "./tasks.scss";
import Button from "../../components/ui/Button";
import { ReactComponent as plus } from "../../assets/images/icons/plus-sign.svg";
import { ReactComponent as reload } from "../../assets/images/icons/realods.svg";
import { ReactComponent as cancel } from "../../assets/images/icons/cancel.svg";
import { ReactComponent as deleted } from "../../assets/images/icons/iconsdelete.svg";
import { ReactComponent as copy } from "../../assets/images/icons/svg_347714.svg";
import { ReactComponent as link } from "../../assets/images/icons/link-square-01.svg";
import { ReactComponent as link_square } from "../../assets/images/icons/trade.svg";
import { ReactComponent as send } from "../../assets/images/icons/message-circle-chart-lines-svgrepo-com.svg";
import { ReactComponent as dashboard } from "../../assets/images/icons/dashboard-square-add.svg";
import { ReactComponent as reset } from "../../assets/images/icons/arrow-reload-horizontal.svg";
import { ReactComponent as save } from "../../assets/images/icons/file-validation.svg";
import { ReactComponent as linked } from "../../assets/images/icons/attachment-svgrepo-com.svg";
import SpecialButton from "../../components/ui/SpecialButton";
import TradeIdentity from "../../components/TradeIdentity/TradeIdentity";
import TradeDetails from "../../components/TradeIdentity/TradeDetails";

export default function Task() {
  return (
    <React.Fragment>
      <div className="button">
        <Button icon={plus} name="New" />
        <Button icon={reload} name="Reload" />
        <Button icon={cancel} name="Clear" />
        <Button icon={deleted} name="Delete " />
        <Button icon={copy} name="Copy" />
        <Button icon={linked} name="View Attachments" />
        <Button icon={link_square} name="Trade Linkage" />
        <Button icon={send} name="Send to Messenger" />
        <Button icon={dashboard} name="Others" />
      </div>
      <div className="button-2">
        <Button icon={reset} name="Reset" />

        <SpecialButton icon={save} name="Save" iconFill="#2775FF" />
       
      </div>
      <div>
        <TradeIdentity/>
        <TradeDetails/>
      </div>
    </React.Fragment>
  );
}
