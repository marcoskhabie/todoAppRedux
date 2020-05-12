import { connect } from 'react-redux'
import { setFilter } from '../actions'
import VisibilityFilters from '../../components/VisibilityFilters'

const mapStateToProps = state => {
  return { activeFilter: state.visibilityFilter };
};
export default connect(
  mapStateToProps,
  { setFilter }
)(VisibilityFilters);
