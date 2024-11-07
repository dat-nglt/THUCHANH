import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material';


export default function BasicTable(props) {
  const theme = useTheme()
  return (
    <TableContainer component={Paper} sx={{ maxWidth: '95%', margin: '20px auto' }}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">STT</TableCell>
            {props.columnTitle.map((title, index) => (
              <TableCell align="center">{title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align='left'>
                {index + 1}
              </TableCell>
              {Object.values(row).map((value, cellIndex) => (
                <TableCell key={cellIndex} align="center">
                  {value}
                </TableCell>
              ))}

              {props.typeProduct &&
                <TableCell align="center">
                  <Link to={`/get-details-products/${row.masp}`} style={{ color: theme.palette.primary.main }}>Xem chi tiết</Link>
                </TableCell>
              }

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
