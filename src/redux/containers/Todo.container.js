import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import Todo from '../../components/Todo'

const mapDispatchToProps = { toggleTodo }
export default connect(
  null,
  mapDispatchToProps
)(Todo);