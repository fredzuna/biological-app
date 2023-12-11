import { BiologicalTable } from './BiologicalTable';
import biomData  from './biom.json';

function BiologicalSection() {

  return (
    <BiologicalTable data={biomData} />
  )
}

export default BiologicalSection