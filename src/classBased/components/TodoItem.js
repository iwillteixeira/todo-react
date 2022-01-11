/* eslint react/prop-types: off */
/* eslint no-unused-expressions: off */
import React from 'react';
import styles from './TodoItem.module.css';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  editItem = () => {
    this.setState({
      editing: true,
    });
  }

  handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editing: false });
    }
  }

  render() {
    const viewMode = {};
    const editMode = {};
    const { editing } = this.state;
    if (editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }
    const {
      todo, clicked, del, setUpdate,
    } = this.props;
    const { id, title, completed } = todo;
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    return (
      <li className={styles.item}>
        <div className="todo" onDoubleClick={this.editItem} style={viewMode}>
          <button type="button" onClick={() => del(id)}>delete</button>
          <input type="checkbox" className={styles.checkbox} checked={completed} onChange={clicked(id)} />
          <span style={completed ? completedStyle : null}>{title}</span>
        </div>
        <input type="text" value={title} style={editMode} className={styles.textInput} onChange={(e) => setUpdate(e.target.value, id)} onKeyDown={this.handleUpdatedDone} />
      </li>
    );
  }
}
