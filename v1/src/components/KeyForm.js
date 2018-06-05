import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

class KeyForm extends React.Component {

  render() {
    const { classes, handleSubmit } = this.props;

  return (
    <form className={classes.container} onSubmit={handleSubmit} noValidate autoComplete="off">
      <div>
      <TextField
        id="name"
        label="Name"
        placeholder="Placeholder"
        helperText="Full width!"
        margin="normal"
      />
      </div>
      <div>
        <button type="submit">
          Submit
        </button>
      </div>
    </form>
  );
  }
};

KeyForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(KeyForm);
