import { Alert, Snackbar } from '@mui/material'
import { RequisitionFeedbackProps } from '../types/requisitionFeedback'

function RequisitionFeedback({ 
    isErrorRequisition, 
    setIsErrorRequisition,
    messagem,
    typeFeedback,
    durationHideFeedback
  }:RequisitionFeedbackProps) {
 
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsErrorRequisition(false);
  };

  
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={isErrorRequisition}
        onClose={handleClose}
        autoHideDuration={durationHideFeedback}
      >
        <Alert severity={typeFeedback}>{messagem}</Alert>
      </Snackbar>
    </div>
  );
}


export default RequisitionFeedback