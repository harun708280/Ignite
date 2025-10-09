import React from "react";
import DataGrid, {
  Column,
  SearchPanel,
  GroupPanel,
  Summary,
  TotalItem,
  GroupItem,
} from "devextreme-react/data-grid";

const ConcentrationGrid = ({
  data,
  filter,
  handleSelectionChanged,
  renderRedWith3Digits,
  renderRedIfNegative,
}) => {
  return (
    <DataGrid
      id='concentration'
      dataSource={data}
      keyExpr='item'
      showBorders={true}
      columnAutoWidth={true}
      allowColumnReordering={true}
      allowColumnResizing={true}
      showRowLines={true}
      rowAlternationEnabled={true}
      hoverStateEnabled={true}
      focusedRowEnabled={true}
      onSelectionChanged={handleSelectionChanged}
      filterValue={filter}
      grouping={{ autoExpandAll: true }}
      groupPanel={{ visible: true }}
    >
      <SearchPanel visible={true} width={260} />
      <GroupPanel visible={true} />

      {/* Core Columns */}
      <Column
        dataField='item'
        caption='Item Id'
        width={240}
        fixed={true}
        fixedPosition='left'
      />
      <Column
        dataField='quantityUOM'
        caption='Quantity (UOM)'
        cellRender={renderRedWith3Digits}
      />
      <Column
        dataField='quantityMT'
        caption='Quantity (MT)'
        cellRender={renderRedWith3Digits}
      />
      <Column
        dataField='quantityBBL'
        caption='Quantity (BBL)'
        cellRender={renderRedIfNegative}
      />
      <Column
        dataField='price'
        caption='Underlying Price'
        alignment='right'
        cellRender={renderRedIfNegative}
      />
      <Column dataField='pnl' caption='Profit & Loss' alignment='right' />
      <Column
        dataField='cashflow'
        caption='Cashflow'
        alignment='right'
        cellRender={renderRedIfNegative}
      />
      <Column
        dataField='total'
        caption='Total'
        alignment='right'
        cellRender={renderRedIfNegative}
      />
      <Column
        dataField='tradeDate'
        caption='Trade Date'
        dataType='date'
        width={140}
      />
      <Column dataField='counterparty' caption='Counterparty' width={180} />
      <Column dataField='trader' caption='Trader' width={140} />
      <Column dataField='remarks' caption='Remarks' width={240} />

      {/* Business-specific Fields (Groupable) */}
      <Column
        dataField='tradeDesk'
        caption='Trade Desk'
        width={160}
        groupIndex={0}
      />
      <Column dataField='book' caption='Book' width={140} />
      <Column dataField='strategy' caption='Strategy' width={160} />
      <Column
        dataField='instrumentType'
        caption='Instrument Type'
        width={160}
      />
      <Column dataField='region' caption='Region' width={120} />

      {/* Summary Section */}
      <Summary>
        <GroupItem
          column='quantityMT'
          summaryType='sum'
          displayFormat='Total MT: {0}'
          valueFormat='fixedPoint'
          alignByColumn={true}
        />
        <GroupItem
          column='cashflow'
          summaryType='sum'
          displayFormat='Cashflow: {0}'
          valueFormat='currency'
          alignByColumn={true}
        />
        <GroupItem
          column='total'
          summaryType='sum'
          displayFormat='Total: {0}'
          valueFormat='currency'
          alignByColumn={true}
        />
        <TotalItem
          column='total'
          summaryType='sum'
          displayFormat='Grand Total: {0}'
          valueFormat='currency'
        />
      </Summary>
    </DataGrid>
  );
};

export default ConcentrationGrid;
