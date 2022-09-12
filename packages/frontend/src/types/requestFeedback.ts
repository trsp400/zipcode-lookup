import { SnackbarProps, AlertColor } from '@mui/material'


export interface RequestFeedbackProps extends SnackbarProps {
  isErrorRequest: boolean;
  setIsErrorRequest: React.Dispatch<React.SetStateAction<boolean>>
  typeFeedback: AlertColor | undefined,
  durationHideFeedback: number,
  message: string,
}
