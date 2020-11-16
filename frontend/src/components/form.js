import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Grid,
  Button,
  InputLabel,
  MenuItem,
  Typography,
  FormControl,
  Select,
  Checkbox,
  FormControlLabel,
  Snackbar,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    // position: 'relative',
    width: 500,
    // border: "2px solid #000",
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
    margin: theme.spacing(6, 6, 3),
  },
  success: {
    backgroundColor: "#43a047",
  },
  error: {
    backgroundColor: "#d32f2f",
  },
  info: {
    backgroundColor: "#2979ff",
  },
  warning: {
    backgroundColor: "#ffa000",
  },
}));
const Form = (props) => {
  const classes = useStyles();
  const taskname = useRef();
  const description = useRef();
  const {
    reset,
    submitting,
    data,
    dirtyData,
    handleClose,
    setTaskData,
    handleSubmit,
  } = props;

  return (
    <div className={classes.paper}>
      <form
        noValidate
        autoComplete="off"
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h5" gutterBottom>
          Datos de la tarea
        </Typography>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              id="taskname"
              inputRef={taskname}
              onChange={(e) =>
                setTaskData({ ...data, taskname: e.target.value })
              }
              value={data.taskname}
              label="Tarea"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="description"
              inputRef={description}
              onChange={(e) =>
                setTaskData({ ...data, description: e.target.value })
              }
              value={data.description}
              label={"Descripción"}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl className={classes.formControl} fullWidth>
              <InputLabel id="demo-simple-select-label">Responsable</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="responsable"
                value={data.responsable}
                onChange={(e) =>
                  setTaskData({ ...data, responsable: e.target.value })
                }
              >
                <MenuItem value={"Pedro"}>Pedro</MenuItem>
                <MenuItem value={"Rodrigo"}>Rodrigo</MenuItem>
                <MenuItem value={"Hernan"}>Hernan</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl className={classes.formControl} fullWidth>
              <InputLabel id="demo-simple-select-label">Estado</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="state"
                value={data.state}
                onChange={(e) =>
                  setTaskData({ ...data, state: e.target.value })
                }
              >
                <MenuItem value={"Pendiente"}>Pendiente</MenuItem>
                <MenuItem value={"En desarrollo"}>En desarrollo</MenuItem>
                <MenuItem value={"Terminada"}>Terminada</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid>
          <Button
            color="primary"
            type="submit"
            disabled={submitting}
            variant="contained"
            style={{ marginRight: 10 }}
            // onClick={handleClose}
          >
            Guardar
          </Button>

          <Button
            //   component={LinkAddEvent}
            color="primary"
            type="button"
            onClick={handleClose}
          >
            Cancelar
          </Button>
        </Grid>
      </form>
    </div>
  );
};
export default Form;
