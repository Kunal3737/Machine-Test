import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import NavBar from "../components/NavBar";
import Grid from "@material-ui/core/Grid";
import CreateIcon from "@material-ui/icons/Create";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { connect } from "react-redux";
import tasksAction from "../actions/tasksAction";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  button: {
    margin: 5,
  },
  navBarWrapper: {
    width: "100%",
  },
  tableWrapper: {
    width: "100%",
  },
  addWrapper: {
    position: "fixed",
    bottom: "10%",
    left: "5%",
    backgroundColor: "green",
    borderRadius: "50%",
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#fff",
    border: "2px solid #000",
    boxShadow:
      "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    padding: "5, 5, 5",
  },
  root: {
    "& .MuiTextField-root": {
      margin: 5,
      width: 400,
      padding: 10,
    },
  },
  formControl: {
    margin: 5,
    width: "95%",
  },
  selectEmpty: {
    marginTop: 10,
  },
});

function Tasks(props) {
  const classes = useStyles();
  const [tableData, setTableData] = useState("");
  const [tableLength, setTableLength] = useState("");
  const [open, setOpen] = useState(false);
  const [completedModal, setCompletedModal] = useState("");
  const [titleModal, setTitleModal] = useState("");

  useEffect(() => {
    props.tasksAction();
  }, []);

  useEffect(() => {
    setTableData(props.tasksData);
  }, [props.tasksData])

  const openModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setCompletedModal(event.target.value);
  };

  const addButton = () => {
    const data = {
      completed: completedModal,
      title: titleModal,
      id: tableLength,
      userId: 11,
    };

    setTableData({
        ...tableData,
        data
    })
    setOpen(false)
  };

  const deleteFromTable = (id) => {
    delete tableData[id]
    setTableData({
        ...tableData
    })
  }

  console.log(props.tasksData);
  return (
    <Grid container>
      <Grid className={classes.navBarWrapper}>
        <NavBar />
      </Grid>
      <Grid item className={classes.tableWrapper}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align="right">Title</StyledTableCell>
                <StyledTableCell align="right">Complete</StyledTableCell>
                <StyledTableCell align="right">Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {props.tasksData ? Object.entries(tableData).map((row) => (
                    //   console.log(row)
                <StyledTableRow key={row[0]}>
                  <StyledTableCell component="th" scope="row">
                    {row[1].id}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row[1].title}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {!row[1].completed ? "False" : "True"}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.button}
                      startIcon={<DeleteIcon />}
                      onClick={id => deleteFromTable(row[0])}
                    >
                      Delete
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              )): <>{props.tasksDataError}</>}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid className={classes.addWrapper}>
        <CreateIcon style={{ fontSize: "largest" }} onClick={openModal} />
      </Grid>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <form className={classes.root} noValidate autoComplete="off">
              <div>
                <TextField
                  label="Title"
                  value={titleModal}
                  onChange={(e) => {
                    setTitleModal(e.target.value);
                  }}
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                />
              </div>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Complete
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={completedModal}
                  onChange={handleChange}
                  label="Complete"
                >
                  <MenuItem value="True">True</MenuItem>
                  <MenuItem value="False">False</MenuItem>
                </Select>
              </FormControl>
              <Button variant="contained" onClick={addButton}>
                Add
              </Button>
              &nbsp;&nbsp;
              <Button variant="contained" onClick={() => setOpen(false)}>
                Cancel
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
    tasksData: state.tasksReducer.tasksData,
    tasksDataError: state.tasksReducer.tasksDataError,
  });
  
  const mapDispatchToProps = (dispatch) => {
      return {
        tasksAction: () => dispatch(tasksAction()),
      };
    };
    
  export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
  