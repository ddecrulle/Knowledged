import { makeStyles } from 'tss-react/mui';
import { TypographyWithMarkdown } from 'ui/components/shared/typographyWithMarkdown';

export const ProductTools = ({ product, color }) => {
  const { classes } = useStyles({ color });
  return (
    <ul className={classes.ul}>
      {product.children.map((tools) => (
        <li key={tools.id} id={tools.id} className={classes.li}>
          <TypographyWithMarkdown className={classes.label}>
            {tools.label}
          </TypographyWithMarkdown>
          <TypographyWithMarkdown color='GrayText' component='div'>
            {tools.description}
          </TypographyWithMarkdown>
        </li>
      ))}
    </ul>
  );
};

const useStyles = makeStyles()((theme, { color }) => ({
  label: {
    color: '#707176',
    fontWeight: 'bold',
  },
  ul: {
    marginTop: 0,
    listStyleType: 'disclosure-closed',
    color: color,
  },
  li: {
    marginBottom: theme.spacing(1),
  },
}));
