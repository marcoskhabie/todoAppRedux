import { getTodosByVisibilityFilter } from '../selectors'
import { connect } from 'react-redux'
import TodoList from '../../components/TodoList'

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
};

export default connect(mapStateToProps)(TodoList);