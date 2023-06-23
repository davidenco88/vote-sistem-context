import './Candidate.css'
import { useAppState } from '../../context';

import { INCREMENT } from '../../context/actionTypes';

function Candidate() {

  const { state, dispatch } = useAppState();
  const candidates = state.candidates

  const onClickHandler = (candidateId) => {
    dispatch({ type: INCREMENT, payload: candidateId })
  }

  return (
    <div className="candidates-list">
      {candidates.map((candidate) => (
        <button key={candidate.id} className="candidate_card" onClick={() => onClickHandler(candidate.id)}>
          {`${candidate.name}`}
        </button>
      ))}
    </div>
  )
}

export default Candidate;