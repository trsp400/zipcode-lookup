import { SvgIconComponent } from '@mui/icons-material';

export interface TabsContentProps {
  label: string,
  iconLabel: string | React.ReactElement<SvgIconComponent, string | React.JSXElementConstructor<SvgIconComponent>> | undefined,
}


export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}