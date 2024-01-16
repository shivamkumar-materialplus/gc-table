import { makeStyles } from 'tss-react/mui';
import { COLOR } from '../../utils/constants';

export const useStyles = makeStyles()((_defaultTheme, _props) => {
  return {
    pagination: {
      display: 'flex',
      justifyContent: 'center',
      '& button': {
        borderRadius: "6px",
        backgroundColor: COLOR.LIGHT_GREEN,
        color: COLOR.GC_GREEN_AA,
        fontSize: "16px",
        lineHeight: "26px",
        fontWeight: "600",
      },
      paddingBottom: "18px",
    },
    paginationItem: {
      borderRadius: "8px",
    }
  }
})