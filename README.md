# What this is?

I was given a test by someone that involved creating a working frontend using any tools i wish. I've chosen react on the grounds it's quick, it's simple and i can show all my skills involving it. 

---

# Current Packages

- [Material UI](https://material-ui.com/)
- [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html)
- [react-date-picker](https://github.com/wojtekmaj/react-date-picker)
- [mapbox-gl](https://github.com/visgl/react-map-gl)
- [esLint](https://eslint.org/)

---

---

# Currently On

- [ ] Text input and postcode to coords setup.

---

https://data.police.uk/docs/

The UK police provide a public API that anyone can access and use - they have certain rules surrounding rate limitations, that are detailed above. 

The challenge is to focus particularly on the crime related section - which covers 

Street Level Crimes 
Street Level Outcomes 
Crimes At Location
Crimes With No Location
Crime Categories 
Outcomes For A Specific  

The scenario is this: 

The Internal software that visualizes the following information above is not the best and the police require a front end dashboard that can interact with the following API, in order for it to be useful to the police, it must do the following:

**Allow the user to enter in a postcode, or city area and then return all crime events within a specified date range (by default it is 1 year, maximum is 2 years)**

**Allow the user to favourite/highlight certain crimes and display them separately, this can be moved to another screen, or achieved on 1 screen as a filter**

**Allow the user to compare different forces (see the https://data.police.uk/docs/method/crimes-no-location/ documentation) to determine which force has the most open cases, the most crime reported and the most resolved cases.**

Their is no user authentication

The application can be locally hosted

We can provide you with a repo to commit work to, or you can commit to your own repo. 

Those are the core 3 requirements. 

Some helpful hints -
The API requires longitude and latitude as parameters, not postcodes, you will have to convert postcodes to long/lat coordinates ( google should be able to tell you how to do this quite quickly) 
If you wish to use a mapping tool to visualize the responses, i recommend mapbox - they have a very generous free tier you can sign up for without the need for a credit/debit card. If you prefer to use something like google maps, i can give you access to our API 

There are no language requirements to do this challenge. 