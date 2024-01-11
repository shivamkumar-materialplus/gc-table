import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((_defaultTheme, _props) => {
  return {
    menuBox: {
      display: 'flex',
      gap: 15,
      marginBottom: '26px',
      paddingInline: '21px'
    },
    button: {
      borderRadius: 8,
      textTransform: 'none',
      padding: 8,
    },
    iconButton: {
      minWidth: 'unset'
    },
    addButton: {
      marginLeft: 'auto',
      padding: '8px 12px',
      textTransform: 'uppercase',
    }
  }
})