import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import Todo from '../../components/Todo'

export default connect(
  null,
  { toggleTodo }
)(Todo);