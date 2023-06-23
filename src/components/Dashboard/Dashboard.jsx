import Candidate from '../candidate/candidate';
import TotalVotes from '../TotalVotes/TotalVotes';
import VotesByCandidate from '../VotesByCandidate/VotesByCandidate';
import FilterShowVotes from '../FilterShowVotes/FilterShowVotes';
import './Dashboard.css'

function Dashboard() {

  return (
    <div className="dashboardWrap">
      <Candidate />
      <hr />
      <TotalVotes />
      <hr />
      <FilterShowVotes />
      <hr />
      <VotesByCandidate />
      <hr />
    </div>
  )
}

export default Dashboard;