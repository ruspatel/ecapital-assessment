import styled from 'styled-components';

export const StyledTable = styled.div`
    overflow: auto;
    display: block;
`;

export const DataCell = styled.td`
    vertical-align: center;
    horizontal-align: center;
    padding: 5px;
    table-layout: fixed;
`;

export const TableHeader = styled.thead`
    display: table;
    table-layout: fixed;
    width: 100%;
`;

export const TableHeaderRow = styled.tr`
    display: table;
    width: 100%;
    table-layout: fixed;
`;

export const TableBody = styled.tbody`
    display: block;
    height: 400px;
    overflow: auto;
`;

export const TableRow = styled.tr`
    display: table;
    width: 100%;
    table-layout: fixed;
`;

export const HeaderCell = styled.th`
    border-bottom: 1px solid black;
    padding: 5px;
`;

export const Card = styled.div`
    margin: auto;
    width: 50%;
    height: 60vh;
    margin-top: 2%;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    padding: 7px;
`;

export const Header = styled.div`
    display: inline-flex;
    margin-top: 3%;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.div`
    font-size: 50px;
    color: black;
`;