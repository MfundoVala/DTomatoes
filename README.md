# Dreadful Cherry Tomatoes

View the Live site (https://dreadfultomatoes.mfundo.online)

Dreadful Cherry Tomatoes is a new platform to find movies. The main objective is to
help users to find information about their favourite movies.

To do so, the company has to create a new web app that allow users to do some fancy things.

## What do you have to do?

Dreadful Cherry Tomatoes needs to implement an awesome webpage where the users could view information
about almost every new movie.

The Design team has sent us the new interface which has to be implemented. To keep it simple, there is only one page: the movies page.

The movies page is the landing page of the webpage and shows a list of movies. In this page the user will see a list of cards with the title, year, description and image from each movie, sorted by the most recent. 10 cards per page, sorted by most recent release year. And the user could filter movies by title.

Here you could see the design of the movies pages:

![](resources/dreadful-cherry-tomatoes-movies.png)

#### Considerations

- Through [this Figma link (account required)](https://www.figma.com/file/OaRd9F0R43FQWTZQo6JO2Y/GW-867-Dreadful-Cherry-Tomatoes-challenge) or through [this ZIP](https://static.rviewer.io/challenges/assets/dreadful-cherry-tomatoes/assets.zip), you can download all the
  assets to start!
- To obtain the data of the Movies, you have to request [this file](https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/data.json)
- Use SCSS or SASS to manage your stylesheets
- Pay attention to hover effects (Movies cards)

## Technical Requirements

- Create reusable components
- Create a **clean, maintainable and well-designed** code
- Test your code until you are comfortable with that

To understand how you take decisions during the implementation, **please write a COMMENTS.md** file explaining some of
the most important parts of the application. You would also be able to defend your code through
[Rviewer](https://rviewer.io), once you submit your solution.

---

## How to submit your solution

- Push your code to the `devel` branch - we encourage you to commit regularly to show your thinking process was.
- **Create a new Pull Request** to `main` branch & **merge it**.

Once merged you **won't be able to change or add** anything to your solution, so double-check that everything is as
you expected!

---

<p align="center">
  If you have any feedback or problem, <a href="mailto:help@rviewer.io">let us know!</a> 🤘
  <br><br>
  Made with ❤️ by <a href="https://rviewer.io">Rviewer</a>
</p>

##### COMMENTS

# Dreadful tomatoes: react, redux, redux toolkit, axios, react-datepicker scss

This React project was built with the help of:
Redux with Redux toolkit for state management,
Redux-persist for state persistence,
and react-datepicker for the date filter component.
Styling was limited to scss as per project requirements.

View the Live site (https://dreadfultomatoes.mfundo.online)

##### File structure

I tried to make the project as modular as possible. The source is seperated into 3 main layers Application, Services, UI layers and has a seperate folder for Assests well.

The Application layer holds all the Redux state management logic and helpers/utilities and mockdata for tests.

The UI layer holds all the UI logic and mark up. This layer is further seperated into to modules;
Components, which holds components which are used through out the app and Pages, which holds the
different pages our app holds.
Inside these modules you will find the Component Class file, its, its css file, and a test file
for integration testing of the more higher order components.

Our application is also wrapped in a layout component that has our footer and header as global components
and accepts all other components as children. It also has a layout css file for our more global UI styless.

File structure tree of UI layer:
📦ui
┣ 📂components
┃ ┣ 📂FilmCard
┃ ┃ ┣ 📜FilmCard.js
┃ ┃ ┣ 📜FilmCard.module.scss
┃ ┃ ┗ 📜index.js
┃ ┣ 📂Footer
┃ ┃ ┣ 📂HomeButton.js
┃ ┃ ┃ ┣ 📜HomeButton.js
┃ ┃ ┃ ┗ 📜HomeButton.module.scss
┃ ┃ ┣ 📜Footer.js
┃ ┃ ┣ 📜Footer.module.scss
┃ ┃ ┣ 📜Footer.test.tsx
┃ ┃ ┣ 📜index.js
┃ ┃ ┗ 📜rviewer-logo.svg
┃ ┣ 📂Header
┃ ┃ ┣ 📜Header.js
┃ ┃ ┣ 📜Header.module.scss
┃ ┃ ┣ 📜Header.test.tsx
┃ ┃ ┣ 📜index.js
┃ ┃ ┗ 📜rviewer-logo.svg
┃ ┣ 📂IconLink
┃ ┃ ┣ 📜IconLink.js
┃ ┃ ┗ 📜IconLink.module.scss
┃ ┣ 📂Layout
┃ ┃ ┣ 📜Layout.js
┃ ┃ ┣ 📜Layout.module.scss
┃ ┃ ┗ 📜index.js
┃ ┣ 📂Pagination
┃ ┃ ┣ 📜Pagination.js
┃ ┃ ┣ 📜Pagination.module.scss
┃ ┃ ┣ 📜Pagination.test.tsx
┃ ┃ ┗ 📜index.js
┃ ┗ 📂SearchBar
┃ ┃ ┣ 📜SearchBar.js
┃ ┃ ┣ 📜SearchBar.module.scss
┃ ┃ ┗ 📜index.js
┣ 📂pages
┃ ┣ 📂Movies
┃ ┃ ┣ 📜Movies.js
┃ ┃ ┣ 📜Movies.module.scss
┃ ┃ ┗ 📜index.js
┃ ┣ 📂SearchResults
┃ ┃ ┣ 📜SearchResults.js
┃ ┃ ┣ 📜Series.module.scss
┃ ┃ ┗ 📜index.js
┃ ┣ 📂Series
┃ ┃ ┣ 📜Series.js
┃ ┃ ┣ 📜Series.module.scss
┃ ┃ ┗ 📜index.js
┃ ┗ 📂Splash
┃ ┃ ┣ 📂Hero
┃ ┃ ┃ ┣ 📜Hero.js
┃ ┃ ┃ ┣ 📜Hero.module.scss
┃ ┃ ┃ ┗ 📜index.js
┃ ┃ ┣ 📜Splash.js
┃ ┃ ┣ 📜Splash.module.scss
┃ ┃ ┗ 📜index.js
┣ 📜.DS_Store
┗ 📜_variables.scss

##### css explanation

The toughest part of the project was styling with scss
and not being able to use a component library outside
of the date picker (customizing the date picker was
a nightmare view the top level \_index.css file for reference)

I opted for using a \_variables.css file with css variables
instead of a type of theme context as our design consisted
of no more than 4 colors. Extra color variables were still
created for ease of custom styling in future.

#### testing approach

I opted for an integration testing approach for the project as a lot of the components
work together and communicate state. Due to this I went against TDD rules a bit and
built out the highest order components first before testing whether they worked well
together and refactored where necessary.

#### redux toolkit store structure explanation

In the application layer we have a redux module that has our state management logic.
I used redux toolkit for state management in order to make the code easier to write and more concise
thanks to its use of immer js under the hood allowing me to write as if I was mutating state.

the Movies and Series served by the api have the same structure so I opted for a single reducer with the name Films
denoting both movies and series and also created a single slice for the application as some actions logic could be shared.
Api films came with no id so I gave each film and id before commiting them to state.

Redux persist with thunk middleware was used to persist the state if the user refreshes.

#### Date picker mention

I opted to filter and disable dates with no films on the date picker component so the user doesn't waste time
searching dates that have no films. I had to change the text styles a bit to make the active dates bolder.

I opted to create a seperate page for search results by year with a back button implemented using react-router's useNavigate
to take the user back to the previous page.

### Film card explanation

The app displayes a substring of long descritions with ...see more, if the user clicks on the description of the film card
it grows and allows them to scroll y to view the full description on larger screens. On smaller screen its scroll y only.
