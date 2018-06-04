import React from 'react';
import CheckboxList from './../components/CheckboxList';

import { connect } from 'react-redux';
import {toggleCheckbox} from './../actions';
import { getStateKey } from "../reducers";

class CheckboxContainer extends React.Component {

  handleToggle = value => () => {
    // Without this next line of code
    // The event will not fire !
    const { toggleCheckbox } = this.props
    toggleCheckbox(value);
  };

  render() {
    const { checkstate } = this.props;
    return (
      <div>
      <CheckboxList
        checkstate={checkstate}
        handleToggle={this.handleToggle}
      >
      </CheckboxList>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  checkstate: getStateKey(state)
})

export default connect(mapStateToProps,{toggleCheckbox})(CheckboxContainer);
