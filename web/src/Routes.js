// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" />
      <Route path="/games/new" page={NewGamePage} name="newGame" />
      <Route path="/games/{id}/edit" page={EditGamePage} name="editGame" />
      <Route path="/games/{id}" page={GamePage} name="game" />
      <Route path="/games" page={GamesPage} name="games" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/users/{id}" page={UserPage} name="user" />
      <Route path="/users" page={UsersPage} name="users" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
