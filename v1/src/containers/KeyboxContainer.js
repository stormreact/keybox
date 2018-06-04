import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  selectKey,
  invalidateKey,
  addKey
} from "../actions";
import Picker from "../components/Picker";
import KeyForm from "../components/KeyForm";

class KeyboxContainer extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
    this.processKeyForm = this.processKeyForm.bind(this);
  }

  handleChange(nextDatadir) {
    this.props.dispatch(selectKey(nextDatadir));
  }

  handleRefreshClick(e) {
    e.preventDefault();

    const { dispatch, selectedKey } = this.props;
    dispatch(invalidateKey(selectedKey));
  }

  processKeyForm(values) {
    const { dispatch } = this.props;
    dispatch(addKey(values));
  }

  render() {
    const {
      keys,
      selectedKey
    } = this.props;
    return (
      <div>
        <Picker
          value={selectedKey}
          onChange={this.handleChange}
          options={keys}
        />
        <div>
          <KeyForm onSubmit={this.processKeyForm} />
        </div>
      </div>
    );
  }
}

KeyboxContainer.propTypes = {
  keys: PropTypes.array.isRequired,
  selectedKey: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  const { keys, selectedKey } = state;

  return {
    keys,
    selectedKey
  };
}

export default connect(mapStateToProps)(KeyboxContainer);
