import { IBiological, IBiologicalItem } from '../interfaces/IBiological';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface IProps {
  data: IBiological
}

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 300 },
  { field: 'taxId', headerName: 'Tax ID', width: 200, type: 'number' },
  {
    field: 'abundanceScore',
    headerName: 'Abundance score',
    type: 'number',
    width: 160,
  },
  {
    field: 'relativeAbundance',
    headerName: 'Relative abundance',
    sortable: false,
    width: 160,
  },
  {
    field: 'matchFrequency',
    headerName: 'Unique matches frequency',
    sortable: false,
    width: 160
  },
];

function prepareBiologicalData(items: IBiologicalItem[]) {
  const strainLevel = 7;

  const data = items.map((item) => {
    return {
      id: item.metadata.lineage[strainLevel].tax_id,
      name: item.metadata.lineage[strainLevel].name,
      taxId: item.metadata.lineage[strainLevel].tax_id,
      abundanceScore: null,
      relativeAbundance: null,
      matchFrequency: null
    }
  })

  return data
}

export function BiologicalTable(props: IProps) {
  const { data } = props
  const rows = prepareBiologicalData(data.rows)

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );

}
