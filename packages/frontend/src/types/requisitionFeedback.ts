import { SnackbarProps, AlertColor } from '@mui/material'


export interface RequisitionFeedbackProps extends SnackbarProps {
  isErrorRequisition: boolean;
  setIsErrorRequisition: React.Dispatch<React.SetStateAction<boolean>>
  typeFeedback: AlertColor | undefined,
  durationHideFeedback: number,
  message: string,
}
