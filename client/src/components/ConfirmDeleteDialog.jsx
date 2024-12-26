import { Dialog, DialogActions, DialogTitle, Button } from "@mui/material";
import axiosInstance from "../axios-instance";

const ConfirmDeleteDialog = ({ handleClose, open, recipeToDelete }) => {
  
  const deleteRecipe = async () => {
    const response = await axiosInstance.delete(`/${recipeToDelete.id}`);
   
    if(response.status === 200) {
      handleClose();
    }
  }

  return (
     <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Are you sure you want to delete this recipe?</DialogTitle>
          <DialogActions>
            <Button variant="outlined" onClick={handleClose}>Cancel</Button>
            <Button variant="outlined" color="error" onClick={deleteRecipe}>Confirm</Button>
          </DialogActions>
      </Dialog>
  )
};

export default ConfirmDeleteDialog;