import { connect } from 'react-redux'
import { setFilter } from '../actions'
import VisibilityFilters from '../../components/VisibilityFilters'

const mapStateToProps = state => {
  return { activeFilter: state.visibilityFilter };
};
const mapDispatchToProps = { setFilter }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibilityFilters);
