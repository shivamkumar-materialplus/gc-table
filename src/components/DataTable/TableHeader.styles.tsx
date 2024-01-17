import { makeStyles } from 'tss-react/mui';
import { COLOR } from 'utils/constants';

export const useStyles = makeStyles()((_defaultTheme, _props) => {
  return {
    titleRow: {
      backgroundColor: COLOR.LIGHT_GREEN,
    },
  }
})