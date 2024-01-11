import { makeStyles } from 'tss-react/mui';
import { COLOR } from '../../theme';

export const useStyles = makeStyles()((_defaultTheme, _props) => {
    return {
        dataTable: {
            '& table, th, td': {
                border: `solid 1px ${COLOR.LIGHT_GRAY}`,
                borderCollapse: 'collapse'
            },
            '& th': {
                padding: `10px`
            }
        },
        tableBody: {
            '& td': {
                padding: "10px 5px 5px 10px",
            }
        },
        pagination: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
            '& button': {
                borderRadius: "6px",
                backgroundColor: COLOR.LIGHT_GREEN,
                color: COLOR.GC_GREEN_AA,
                fontSize: "16px",
                lineHeight: "26px",
                fontWeight: "600",
            },
        },
        paginationItem: {
            borderRadius: "8px",
        }
    }
})