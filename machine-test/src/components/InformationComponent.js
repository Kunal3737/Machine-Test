import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
  },
}));

export default function InformationComponent(props) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
      <Typography variant="subtitle1" gutterBottom>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Typography><br/>
      <Typography variant="h5" gutterBottom>
        Dropdown Data: {props.dropdownData}
      </Typography>
    </div>
    </div>
  );
}
