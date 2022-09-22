// EVERYONE!!!!!
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box";
import './Admin.css';


function Admin (){
    const dispatch = useDispatch();
    const orders = useSelector(store => store.orders);


    
    useEffect(() => {
        getOrders();
      }, []);
     
      //add a button to call new orders?

    const getOrders = () => {
        axios({
            method: 'GET',
            url: '/api/order'
        })
        .then((response) => {
            // console.log(response);
            const action = {
                type: 'ADD_ORDERS',
                payload: response.data
            }
            dispatch(action);
        })
        .catch((error) => {
            console.log('Error in get route for admin orders', error);
        })
    }
    
    //styling for table
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));

    return(
       <>
        <Box className="button">
            <Button onClick={getOrders}>Get New Orders!</Button>
        </Box>
                    <Box className="table">
                        <TableContainer component={Paper} className="adminTable">
                            <Table sx={{maxWidth: 1000}} aria-label="order table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Name</StyledTableCell>
                                        <StyledTableCell align="left">Time Order Placed</StyledTableCell>
                                        <StyledTableCell align="left">Type</StyledTableCell>
                                        <StyledTableCell align="left">Cost</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {orders.map(order => {
                                        return(
                                            <StyledTableRow key={order.id}>
                                                <StyledTableCell>{order.customer_name}</StyledTableCell>
                                                <StyledTableCell>{order.time}</StyledTableCell>
                                                <StyledTableCell>{order.type}</StyledTableCell>
                                                <StyledTableCell>{order.total}</StyledTableCell>
                                            </StyledTableRow>
                                        );
                                    })}

                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>  
        </>
    );

}

export default Admin;