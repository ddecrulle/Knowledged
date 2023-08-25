import { makeStyles } from 'tss-react/mui';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { TypographyWithMarkdown } from 'ui/components/shared/typographyWithMarkdown';

const getDispoFiled = (dispo) =>
  dispo ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />;

export const Content = ({ content, color }) => {
  const { description, label, dispo } = content;
  const { classes } = useStyles({ color });
  return (
    <li className={classes.li}>
      <TypographyWithMarkdown className={classes.fctLabel}>
        {label}
      </TypographyWithMarkdown>
      <TypographyWithMarkdown variant='body1' color='GrayText'>
        {description}
      </TypographyWithMarkdown>
      <ul className={classes.ulAppli}>
        {content.products.map((p) => (
          <li key={p.id}>
            <div className={classes.tools}>
              <TypographyWithMarkdown
                variant='body2'
                component='span'
                className={classes.toolLabel}
              >
                {p.label}
              </TypographyWithMarkdown>
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
    textTransform: 'uppercase',
    color: 'gray',
    marginRight: theme.spacing(1),
  },
}));
