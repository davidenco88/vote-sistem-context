import './VotesByCandidate.css'
import { useAppState } from '../../context';

function VotesByCandidate() {

  const { state } = useAppState();

  const candidates = state.candidates;

  return (
    <div className="candidates-votes">
      <h2>VOTOS POR CANDIDATO</h2>
      {
        candidates.map((candidate) => (
          <div key={candidate.id} className="candidates-list">
            <ul>
              <li>
                <strong>{`${candidate.name}:`}</strong>
                <span>
                  {
                    state.showResultsAs === 'totalVotes'
                      ? (`${candidate.votes}`)
                      : (`${candidate.percentage.toFixed(2)}%`)
                  }
                </span>
              </li>
            </ul>
          </div>
        ))
      }
    </div>
  )
}

export default VotesByCandidate;