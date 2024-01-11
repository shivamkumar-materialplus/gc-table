import { makeStyles } from 'tss-react/mui';
import { COLOR } from '../../utils/constants';

export const useStyles = makeStyles()((_defaultTheme, _props) => {
    return {
        dataTable: {
            borderRadius: `30px 30px 0px 0px`,
            '& tr td:first-of-type': {
                paddingLeft: '21px'
            },
            '& tr th:first-of-type': {
                paddingLeft: '11px'
            }
        },
        tableBody: {
            '& td': {
                padding: "10px 5px 5px 15px",
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