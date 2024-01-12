import { makeStyles } from 'tss-react/mui';
import { COLOR } from '../../utils/constants';

export const useStyles = makeStyles()((_defaultTheme, _props) => {
  return {
    dataTable: {
      borderRadius: `30px 30px 0px 0px`,
    },
    tableBody: {
      '& td': {
        padding: "8px 10px 8px 10px",
      }
    },
    pagination: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '11px',
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