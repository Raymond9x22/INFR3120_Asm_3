# FitLog - Workout Tracker

INFR 3120 - Assignment 3
Man Hin (Raymond) Wong

**Live site:** https://infr3120-asm-3.onrender.com
**GitHub:** https://github.com/Raymond9x22/INFR3120_Asm_3

## What is it?

FitLog is a simple workout tracker. You can add a workout, see all of your workouts in one list, edit a workout, and delete a workout. So it has full CRUD (Create, Read, Update, Delete).

## Pages

| Page | URL | What it does |
|------|-----|--------------|
| Home (splash page) | `/` | Welcome page with buttons to the list and the add form |
| My Workouts | `/workouts` | Public list of every workout in the database (Read) |
| Add Workout | `/workouts/add` | Form to add a new workout (Create) |
| Edit Workout | `/workouts/edit/:id` | Form filled in with the old values (Update) |
| Delete Workout | `/workouts/delete/:id` | "Are you sure?" confirmation message before deleting (Delete) |

## Technologies

- Node.js + Express (made with `express-generator`)
- MongoDB Atlas + Mongoose (database: `workouttracker`, collection: `workouts`)
- EJS templates with a shared header and footer (`views/partials`)
- Hosted on Render

## Folder structure

- `app.js` - sets up Express and the routes
- `config/db.js` - connects to MongoDB
- `models/workout.js` - the Mongoose schema for a workout
- `controllers/workoutController.js` - all the CRUD logic
- `routes/index.js` and `routes/workouts.js` - the URLs
- `views/` - the EJS pages, `views/partials` has the shared header and footer
- `public/stylesheets/style.css` - my CSS

## Styling

3rd party stylesheets (also listed in `views/partials/header.ejs`):
- Bootstrap 5.3 - https://getbootstrap.com
- Font Awesome 6 (icons) - https://fontawesome.com
- Google Fonts, Poppins - https://fonts.google.com/specimen/Poppins

I also write my CSS in `public/stylesheets/style.css`. I used a navy, white and grey colour scheme, a gradient on the home page, and custom buttons, table header, nav bar and footer.

## How to run it on your computer

1. `npm install`
2. Make a `.env` file (copy `.env.example`) and put in your own MongoDB connection string
3. `npm start`
4. Open http://localhost:3000
