import './FilterShowVotes.css'
import { useAppState } from '../../context';
import { SET_SHOW_RESULTS } from '../../context/actionTypes';


function FilterShowVotes() {

  const { dispatch } = useAppState();

  const onChangehandler = (event) => {
    const showAs = event.target.value;
    dispatch({ type: SET_SHOW_RESULTS, payload: showAs });
  }

  return (
    <div className="filter-wrap">
      <form>
        <div className="input-warp">
          <input
            type="radio"
            name="showAs"
            id="totalValue"
            value='totalVotes'
            onChange={onChangehandler}
            defaultChecked
          />
          <label htmlFor="value">Valor Total</label>
        </div>
        <div className="input-warp">
          <input
            type="radio"
            name="showAs"
            id="percentage"
            value='percentage'
            onChange={onChangehandler}
          />
          <label htmlFor="percentage" >Porcentaje</label>
        </div>
      </form>
    </div>
  )
}

export default FilterShowVotes;
