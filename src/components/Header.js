import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    compSpace: {
        marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function Header(){
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h5" className={classes.title}>
                <strong className='title-font'>OnKlik Application</strong>
              </Typography>
              <Button><Link to='/'  className='custom-link title-font'>master home</Link></Button>
              <Button><Link to='/barang'  className='custom-link title-font'>Master Barang</Link></Button>
              <Button><Link to='/stok'  className='custom-link title-font'>Master Stok</Link></Button>
              <Button><Link to='/harga'  className='custom-link title-font'>Master Harga</Link></Button>
              <Button><Link to='/transaksi'  className='custom-link title-font'>transaksi</Link></Button>
            </Toolbar>
          </AppBar>
        </div>
      );
}
