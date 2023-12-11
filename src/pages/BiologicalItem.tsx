import { TableCell, TableRow } from "@mui/material"
import { IBiologicalItem } from "../interfaces/IBiological"

interface IProps {
    item: IBiologicalItem
}

export function BiologicalItem(props: IProps) {
    const { item } = props;
    const strainLevel = 7;

    const name = item.metadata.lineage[strainLevel].name;
    const taxId = item.metadata.lineage[strainLevel].tax_id;

    const abundanceScore = null;
    const abundanceRelative = null;
    const matchFrequency = null;

    return (
        <>  
            <TableRow
                key={item.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell >{name}</TableCell>
                <TableCell align="right">{taxId}</TableCell>
                <TableCell align="right">{abundanceScore}</TableCell>
                <TableCell align="right">{abundanceRelative}</TableCell>
                <TableCell align="right">{matchFrequency}</TableCell>
            </TableRow>
        </>
    )
}