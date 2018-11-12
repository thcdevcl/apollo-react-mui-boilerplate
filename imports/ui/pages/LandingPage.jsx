import React from "react";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  developedBy: {
    color: theme.palette.primary.dark
  },
  rootContainer: {
    background: theme.palette.primary.main
  }
});

export default withStyles(styles)(({ classes }) => (
  <Grid
    container
    style={{ flex: 1 }}
    classes={{ container: classes.rootContainer }}
    alignItems="center"
    justify="center"
  >
    <Grid item xs={12}>
      <Typography
        variant="h1"
        color="secondary"
        align="center"
        style={{ color: "white" }}
      >
        #BOILERPLATE
      </Typography>
      <Typography variant="h4" color="secondary" align="center">
        METEOR-APOLLO-REACT-MATERIALUI
      </Typography>
    </Grid>
    <Button
      href="https://www.noincomedev.me"
      variant="contained"
      color="secondary"
    >
      Developed by NOINCOMEDEV
    </Button>
  </Grid>
));
