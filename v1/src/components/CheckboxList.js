import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class CheckboxList extends React.Component {

  render() {
    const { classes, checkstate, handleToggle } = this.props;

    return (
      <div className={classes.root}>
        <List>
          {[1, 2, 3,'a','b','c'].map(value => (
            <ListItem
              key={value}
              role={undefined}
              dense
              button
              onClick={handleToggle(value)}
              className={classes.listItem}
            >
              <Checkbox
                checked={checkstate.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
              />
              <ListItemText primary={value} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

CheckboxList.propTypes = {
  classes: PropTypes.object.isRequired,
  checkstate: PropTypes.array.isRequired
};

export default withStyles(styles)(CheckboxList);
