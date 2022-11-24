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
