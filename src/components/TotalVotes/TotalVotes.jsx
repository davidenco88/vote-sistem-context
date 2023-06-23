import './TotalVotes.css'

import { useAppState } from '../../context';

function TotalVotes() {

  const { state } = useAppState();

  return (

    <div className="total-votes" >
      <h2>TOTAL VOTOS</h2>
      <h3>{state.totalVotes}</h3>
    </div>
  )
}

export default TotalVotes;