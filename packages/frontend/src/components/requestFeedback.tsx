import { Alert, Snackbar } from '@mui/material'
import { RequestFeedbackProps } from '../types/requestFeedback'

function RequestFeedback({ 
    isErrorRequest, 
    setIsErrorRequest,
    message,
    typeFeedback,
    durationHideFeedback
  }:RequestFeedbackProps) {
 
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsErrorRequest(false);
  };

  
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={isErrorRequest}
        onClose={handleClose}
        autoHideDuration={durationHideFeedback}
      >
        <Alert severity={typeFeedback}>{message}</Alert>
      </Snackbar>
    </div>
  );
}


export default RequestFeedback