import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { addDrama } from "../api/videoapi";
import DramaDialogContent from "./DramaDialogContent";
import { Button, Snackbar } from '@mui/material';

function AddDrama() {
  const [open, setOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDrama({ ...drama, [event.target.name]: event.target.value });
  };

  const handleSnackbarClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
        return;
    }
    setSnackbarOpen(false);
  };

  const handleSave = () => {
    mutate(drama);
    setDrama({
      dramaName: "",
      dramaCountry: "",
      dramaIntro: "",
      dramaYear: "",
      dramaEpisode: "",
    });
    handleClose();
    setSnackbarOpen(true); // Show the Snackbar when saving
  };

  const [drama, setDrama] = useState({
    dramaName: "",
    dramaCountry: "",
    dramaIntro: "",
    dramaYear: "",
    dramaEpisode: "",
  });

  const queryClient = useQueryClient();

  const { mutate } = useMutation(addDrama, {
    onSuccess: () => {
      queryClient.invalidateQueries(["dramas"]);
    },
    onError: (err) => {
      console.error(err);
    },
  });

  return (
    <>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        增加戲劇
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Drama</DialogTitle>
        <DramaDialogContent drama={drama} handleChange={handleChange} />
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
        message="Drama added"
      />
    </>
  );
}

export default AddDrama;
