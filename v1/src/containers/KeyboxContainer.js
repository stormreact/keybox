import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  selectKey,
  addKey
} from "../actions";
import Picker from "../components/Picker";
import KeyForm from "../components/KeyForm";

class KeyboxContainer extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.processKeyForm = this.processKeyForm.bind(this);
  }

  handleChange(nextDatadir) {
    const { selectKey } = this.props;
    selectKey(nextDatadir);
  }

  processKeyForm(values) {
    const { addKey } = this.props;
    addKey(values);
  }

  render() {
    const {
      keys,
      selectedKey
    } = this.props;

    console.log('selectedKey = ', selectedKey);

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

  console.log('keys = ', keys);
  console.log('selectedKey = ', selectedKey);

  return {
    keys,
    selectedKey
  };
}

export default connect(mapStateToProps,{addKey, selectKey})(KeyboxContainer);
