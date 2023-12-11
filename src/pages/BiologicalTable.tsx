import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IBiological } from '../interfaces/IBiological';
import { BiologicalItem } from './BiologicalItem';

interface IProps {
    data: IBiological
}

export function BiologicalTable(props: IProps){
    const { data: { rows }} = props

    return (
      <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Tax ID</TableCell>
                  <TableCell align="right">Abundance score</TableCell>
                  <TableCell align="right">Relative abundance</TableCell>
                  <TableCell align="right">Unique matches frequency</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((item) => (
                  <BiologicalItem item={item} />
                ))}
              </TableBody>
            </Table>
      </TableContainer>    
    )
  
  }
  