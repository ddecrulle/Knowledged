import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

const getDispoFiled = (dispo) =>
  dispo ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />;

export const Content = ({ content, color }) => {
  const { description, label, dispo } = content;
  const { classes } = useStyles({ color });
  return (
    <li className={classes.li}>
      <Typography className={classes.fctLabel}>{label}</Typography>
      <Typography variant='body1' color='GrayText'>
        {description}
      </Typography>
      <ul className={classes.ulAppli}>
        {content.products.map((p) => (
          <li key={p.id}>
            <div className={classes.tools}>
              <Typography
                textTransform='uppercase'
                variant='body2'
                component='span'
                color='gray'
                className={classes.toolLabel}
              >
                {p.label}
              </Typography>
              {getDispoFiled(dispo)}
            </div>
          </li>
        ))}
      </ul>
    </li>
  );
};

const useStyles = makeStyles()((theme, { color }) => ({
  fctLabel: {
    textTransform: 'uppercase',
    color: '#707176',
    fontWeight: 'bold',
  },
  li: {
    marginBottom: theme.spacing(1),
    '::marker': {
      color: color,
    },
  },
  ulAppli: {
    listStyleType: 'disclosure-closed',
    color: color,
    paddingLeft: theme.spacing(2),
    marginTop: theme.spacing(1),
  },
  tools: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  toolLabel: {
    marginRight: theme.spacing(1),
  },
}));
