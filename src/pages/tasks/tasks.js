import React from "react";
import "./tasks.scss";
import Button from "../../components/ui/Button";

import SpecialButton from "../../components/ui/SpecialButton";
import TradeIdentity from "../../components/TradeIdentity/TradeIdentity";
import TradeDetails from "../../components/TradeIdentity/TradeDetails";
import {
  attachmentIcon,
  ClearIcon,
  CopyIcon,
  DeleteIcon,
  MessageIcon,
  OthersIcon,
  PIcon,
  ReloadIcon,
  ResetIcon,
  SaveIcon,
  TradeIcon,
} from "../../icons";

export default function Task() {
  return (
    <React.Fragment>
      <div className='button'>
        <Button icon={PIcon} name='New' />
        <Button icon={ReloadIcon} name='Reload' />
        <Button icon={ClearIcon} name='Clear' />
        <Button icon={DeleteIcon} name='Delete ' />
        <Button icon={CopyIcon} name='Copy' />
        <Button icon={attachmentIcon} name='View Attachments' />
        <Button icon={TradeIcon} name='Trade Linkage' />
        <Button icon={MessageIcon} name='Send to Messenger' />
        <Button icon={OthersIcon} name='Others' />
      </div>
      <div className='button-2'>
        <Button icon={ResetIcon} name='Reset' />

        <SpecialButton icon={SaveIcon} name='Save' iconFill='#2775FF' />
      </div>
      <div>
        <TradeIdentity />
        <TradeDetails />
      </div>
    </React.Fragment>
  );
}
