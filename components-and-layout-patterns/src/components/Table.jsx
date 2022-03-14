import * as React from "react";
import styled from "styled-components";
import { colors } from "../constants";

function Table({ title, data }) {
  const columnNames = data.map((item) => item.name);
  const rows = getRows(data);

  return (
    <Wrapper>
      <thead>
        <Heading>
          <ColumnName>{title}</ColumnName>
          {columnNames.map((columnName) => (
            <ColumnName key={columnName}>{columnName}</ColumnName>
          ))}
        </Heading>
      </thead>

      <tbody>
        {rows.map((row) => (
          <Row key={row[0]}>
            {row.map((cell, idx) => {
              return idx === 0 ? (
                <CellHeader key={`${row[0]}-heading`}>{cell}</CellHeader>
              ) : (
                <CellItem key={`${row[0]}-${columnNames[idx]}`}>
                  {cell}
                </CellItem>
              );
            })}
          </Row>
        ))}
      </tbody>
    </Wrapper>
  );
}

function getRows(data) {
  const rowNames = Object.keys(data[0].details);
  const rows = Array.from(rowNames, (rowName) => [rowName]);

  for (let { details } of data) {
    rows.forEach((row) => row.push(details[row[0]]));
  }

  return rows;
}

const Wrapper = styled.table`
  width: 800px;
  font-size: 18px;

  /* Merge cell borders instead of displaying separate borders for each cell */
  border-collapse: collapse;
  /* border: 1px solid ${colors.gray23}; */
`;

const Heading = styled.tr`
  background-color: ${colors.primary};
  color: ${colors.secondary};
`;

const CellHeader = styled.th`
  padding: 16px 24px;
  /* border: 1px solid ${colors.gray23}; */
  text-align: left;
  text-transform: capitalize;
`;

const CellItem = styled.td`
  padding: 16px 24px;
  /* border: 1px solid ${colors.gray23}; */
  text-align: left;
`;

const ColumnName = styled(CellHeader)`
  width: 25%;
`;

const Row = styled.tr`
  &:nth-child(odd) {
    background-color: ${colors.white};
  }

  &:nth-child(even) {
    background-color: ${colors.gray83};
  }
`;

export default Table;
