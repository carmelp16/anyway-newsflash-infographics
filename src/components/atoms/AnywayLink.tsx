import React, {FunctionComponent} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link, LinkProps} from 'react-router-dom';
import {onLinkColor} from '../../style/_globals';
import {onLinkColorHover} from '../../style/_globals';

const useStyles = makeStyles({
    link:{
      padding :'5px 10px',
      color: `${onLinkColor}`,
      textDecoration:"none",
      "&:hover": {
        color:`${onLinkColorHover}`,
      },
    },
  });
interface IProps extends LinkProps {
    to: string
}

export const AnyWayLink: FunctionComponent<IProps> = ({...props}) => {
    const classes = useStyles();
    return (<Link className={classes.link} {...props} />)
    
};