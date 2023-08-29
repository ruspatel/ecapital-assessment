import styled from 'styled-components';

export const StyledTable = styled.div`
    overflow: auto;
    display: block;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    overflow-x: hidden;
`;

export const DataCell = styled.td`
    vertical-align: center;
    horizontal-align: center;
    padding: 7px;
    table-layout: fixed;
`;

export const TableHeader = styled.thead`
    display: table;
    table-layout: fixed;
    width: 100%;
    background-color: #0F4C75;
    color: white;
    padding: 10px;

`;

export const TableHeaderRow = styled.tr`
    display: table;
    width: 100%;
    table-layout: fixed;
    padding: 10px;
`;

export const TableBody = styled.tbody`
    display: block;
    height: 400px;
    overflow: auto;
    overflow-x: hidden;
`;

export const TableRow = styled.tr`
    display: table;
    width: 100%;
    table-layout: fixed;
    background-color: ${(props) => {
        return props.backgroundColor;
    }};
    padding: 10px;
`;

export const HeaderCell = styled.th`
    padding: 5px;
    align-items: center;
    justify-content: center;
    font-size: 20px;
`;

export const Card = styled.div`
    margin: auto;
    width: 70%;
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
    color: grey;
    font-weight: 600;
    
`;

export const StyledButton = styled.button`
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 8px;
	color: white;
    font-size: 12px;
    font-weight: 700;
    background-color: ${(props) => {
        if (props.buttonType === 'Edit') {
            return 'orange';
        } else if(props.buttonType === 'Confirm Edit' || props.buttonType === 'Add') {
            return "green";
        } else if(props.buttonType === 'Delete') {
            return 'red;'
        }
    }};

    &:hover{
        color: white;
        cursor: pointer;
    }
`;

export const StyledInput = styled.input`
    font-size: 17px;
    padding: 5px;
    border-radius: 5px;
    width: 80%;
`;

export const DataEntryRow = styled(TableRow)`
    background-color: #0F4C75;;
`;

export const AddButton = styled(StyledButton)`
    width: 150px;
    height: 40px;
    font-size: 15px;
`;

export const ErrorMessage = styled.div`
    color: red; 
    font-size: 20px;
`;