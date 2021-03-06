import { React, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Searchbar.css';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
// import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DatePicker from 'react-date-picker';
// import DateRangeIcon from '@material-ui/icons/DateRange';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    backgroundColor: '#ffffff',
    borderRadius: '5px',
  },
}));

const Searchbar = () => {
  const [textEntry, setTextEntry] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const classes = useStyles();

  const changeLocationSearch = (e) => {
    setTextEntry(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div id="searchbar">
      <form noValidate autoComplete="off">
        <Grid>
          <Grid item>
            <TextField
              className={classes.margin}
              label="Enter a Postcode or City"
              variant="filled"
              placeholder="Enter a Postcode or City"
              value={textEntry}
              onChange={changeLocationSearch}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MyLocationIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item>
            <DatePicker
              className="beforeDate"
              onChange={setStartDate}
              value={startDate}
              format="MM-y"
              maxDetail="year"
              minDetail="month"
              maxDate={new Date()}
              required
            />
          </Grid>
          <Grid item>
            <DatePicker
              className="afterDate"
              onChange={setEndDate}
              value={endDate}
              format="MM-y"
              maxDetail="year"
              minDetail="month"
              minDate={startDate}
              maxDate={new Date()}
              required
            />
          </Grid>
          <Grid item>
            <Button id="crimeSearchConfirm" color="primary" variant="contained">Search for crimes</Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Searchbar;
