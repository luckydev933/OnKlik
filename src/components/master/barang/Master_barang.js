import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const marginStyle = {
    margin: 5
}
const paperStyle = {
    margin: 10,
    padding: 3
}
export default class MasterBarang extends Component {
    render() {
        return (
            <div>
                <Grid style={marginStyle} container spacing={3}>
                    <Grid item xs={6}>
                    <Typography variant='h6' color='inherit' style={marginStyle}>
                    <p className=''>Master Barang</p>
                        <Paper style={{padding: 10}}>
                        <form noValidate autoComplete='off'>
                            <div>
                            <TextField className='luxy' style={{margin: 10}} id='kode_barang' label='Kode Barang' />
                            </div>
                            <div>
                            <TextField style={{margin: 10}}id='nama_barang' label='Nama Barang' />
                            <TextField style={{margin: 10}}id='jeni_barang' label='Jenis Barang' />
                            </div>
                            <div>
                                <Button color='primary' size='small' variant='extended'>Tambahkan Data</Button>
                            </div>
                            </form>
                            </Paper>
                        </Typography>
                    </Grid>
                </Grid>
                
            </div>
        )
    }
}
