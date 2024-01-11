import { makeStyles } from 'tss-react/mui';
import { COLOR } from '../../utils/constants';

export const useStyles = makeStyles()((_defaultTheme, _props) => {
  return {
    tableHeader: {
      '& tr:first-of-type th': {
        verticalAlign: 'baseline',
        padding: `15px 5px 10px 5px`,
        backgroundColor: 'unset',
      },
      '& th:last-of-type p': {
        paddingRight: '34px',
      },
      '& tr:nth-of-type(2) th': {
        padding: '6px 5px',
        backgroundColor: 'unset',
      }
    },
    titleRow: {
      backgroundColor: COLOR.LIGHT_GREEN,
    },
    searchRow: {
      backgroundColor: COLOR.GRAY_5
    },
    searchBoxWrapper: {
    },
    searchBox: {
      backgroundColor: COLOR.WHITE,
      borderRadius: '10px',
      padding: '5px 10px',
      border: `solid 0.5px ${COLOR.GRAY_4}`,
      '& input': {
        padding: 0,
      }
    }
  }
})