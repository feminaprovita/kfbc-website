## Requirements

When I first began this project in 12/18, I separated my requirements into separate **tiers**. I haven't really revisited this since then, and need to.

### Tier 1: Archive and Future Lists (30/30/107)

<details>

#### Backend

- [x] Write an `archive` model with the following information:
  - [x] post - not empty or null, maybe long
  - [x] url - not empty or null, url
  - [x] date - not empty or null
- [x] Write a `future` model with the following information:
  - [x] idea - not empty or null
  - [x] link - url, maybe empty/null
- [x] Write a `tags` model with the following information:
  - [x] tag - not empty or null
- [x] Tags can be associated with many archive posts and many future ideas. Archive posts and future ideas can both be associated with many tags.

- [x] Write a route to serve up all archive posts
  - [x] Write a route to serve up all tags joined to the archive table
- [x] Write a route to serve up all future ideas
  - [x] Write a route to serve up all tags joined to the future table

#### Frontend

- [x] Write an archive sub-reducer to manage posts in your Redux store
- [x] Write a future sub-reducer to manage ideas in your Redux store

- [x] Write a component to display an archive list with the following components:
  - [x] Post name
  - [x] Post name contains link to post
- [x] Write a component to display a future list
  - [x] Idea name
- [x] Write a component to display a tag list
- [x] Write a component to be the home page
- [x] Write a component to be the about page

- [x] Display the archive-list component when the url matches `/archive`
- [x] Display the future-list component when the url matches `/future`
- [x] Display the tag-list component when the url matches `/archive/tags` (nb future links different)
- [x] Display the tag-list component when the url matches `/future/tags` (nb future links different)

- [x] Add links to the navbar that can be used to navigate to the archive-list view, the (archive-)tag-list, the home page, the about page, and the search page
- [x] Change the header for `/future` pages only

Congrats! You have completed your first vertical slice! Make sure to `commit -m "Feature: Get Archive and Future Lists"` before moving on.

</details>

### Tier 2: Archive-Tag Search and Future-Tag Search (7/15/107)

<details>

#### Backend

- [ ] Write a route to serve up the archive results for a given tag, _with the url matching the tag name_, so `/archive/tags/playlist`
- [ ] Write a route to serve up the future results for a given tag, _with the url matching the tag name_, so `/future/tags/playlist`

- [x] Update the archive sub-reducer to serve up search results by tag in your Redux store
- [x] Update the future sub-reducer to serve up search results by tag in your Redux store

#### Frontend

- [ ] Write a component to display the archive results for a given tag with the following information:
  - [ ] Post name (first xx characters)
  - [ ] Clicking on the post text should navigate to the original facebook post

- [ ] Write a component to display the future results for a given tag with the following information:
  - [ ] Idea name (first xx characters)
  - [ ] Clicking on the idea text should navigate to show that idea (more below)

- [x] Add links to the `/future` sidebar that can be used to navigate to:
  - [x] Future-list page
  - [x] Future-search page (general)
  - [x] Each tag-search page (by name)
  - [x] Archive-update page (`/future/archive-update`)

Congrats! You have completed your second vertical slice! Make sure to `commit -m "Feature: Archive-Tag Search and Future-Tag Search"` before moving on.

</details>

### Tier 3: Single-Idea Pages (7/9/107)

<details>

#### Backend

- [x] Write a route to serve up a single idea (based on its id), _with tags_

- [x] Update the future sub-reducer to display a single idea in your Redux store

#### Frontend

- [x] Write a component to display a single idea with the following information:
  - [x] Idea name (full text)
  - [x] Related links (if present)
  - [ ] Tags
- [x] Display the appropriate idea's component when the url matches `/future/:futureId`
- [x] Clicking on an idea from the future-list view should navigate to show that idea in the single-idea view
- [ ] Clicking on an idea from the future-tag view should navigate to show that idea in the single-idea view

Congrats! You have completed your third vertical slice! Make sure to `commit -m "Feature: Single-Idea Pages"` before moving on.

</details>

### Tier 4: Search Page and Results (30/107)

<details>

#### Backend

- [ ] Write a route to serve up all relevant archive posts (based on post name `[Op.contains]`)
- [ ] Write a route to serve up all relevant future ideas (based on idea name `[Op.contains]`)

- [ ] Update the archive sub-reducer to serve up search results in your Redux store
- [ ] Update the future sub-reducer to serve up search results in your Redux store
- [ ] Update the archive sub-reducer to display a single idea in your Redux store

#### Frontend

- [ ] Write an Archive-Search component
- [ ] Component should display when url bar says `/archive/search`
  - [ ] Form should accept alphanumeric characters
  - [ ] Character limit (100?)
- [ ] Submitting the form with valid characters should:

  - [ ] Make an AJAX request that pulls all posts with any of the relevant search terms (split on space)
  - [ ] Create a _slug_ based on the characters typed into the search box
  - [ ] Clear out the contents of the search box
  - [ ] Change the url bar to match `/archive/search/:newSlug`
  - [ ] Display the single-post component for all results without needing to refresh the page

- [ ] Write a component to display a single archive post with the following information:
    <!-- see single-idea component above -->
  - [ ] The full post contents
  - [ ] The date the post aired
    <!-- - [ ] Its tags (?) -->
  - [ ] An external link to the post (maybe on the date?)
- [ ] Clicking on a post(`*`) from the archive-search view should navigate to the external/fb post page

- [ ] Write a Future-Search component
- [ ] Component should display when url bar says `/future/search`
  - [ ] Form should accept alphanumeric characters
- [ ] Submitting the form with valid characters should:
  - [ ] Make an AJAX request that pulls all ideas with any of the relevant search terms (split on space)
  - [ ] Create a _slug_ based on the characters typed into the search box
  - [ ] Clear out the contents of the search box
  - [ ] Change the url bar to match `/future/search/:newSlug`
  - [ ] Display the single-idea component for all results without needing to refresh the page
- [ ] Clicking on an idea from the future-search view should navigate to show that idea in the single-idea view

Congrats! You have completed your fourth vertical slice! Make sure to `commit -m "Feature: Search Page and Results"` before moving on.

</details>

### Tier 5: Suggesting a New Idea and Updating the Archive (16/107)

<details>

#### Backend

- [ ] Write a route to add a new idea
- [ ] Write a route to add a new post

- [ ] Update the future sub-reducer to add an idea in your Redux store
- [ ] Update the archive sub-reducer to add a post in your Redux store

#### Frontend

- [ ] Design a footer with a form for suggesting a new idea
  - [ ] Input idea with alphanumeric (normal limit)
  - [ ] Datalist with options for each valid tag + `None/Other`
  - [ ] Submit button
- [ ] Submitting the form with valid text should:

  - [ ] Make an AJAX request that causes the new idea to be persisted in the database
  - [ ] Flag all these `user-submitted` in `link`

- [ ] Design a page with a form for updating the archive that contains inputs for post, url, and date
- [ ] Submitting the form with all valid inputs should:
  - [ ] Make an AJAX request that causes the new archive post to be persisted in the database
  - [ ] Add the new post to the archive list without needing to refresh the page
- [ ] Component should display when url bar says `/future/archive-update`

Congrats! You have completed your fifth vertical slice! Make sure to `commit -m "Feature: Suggesting a New Idea"` before moving on.

</details>

### Tier 6: Removing an Idea (7/107)

<details>

#### Backend

- [ ] Write a route to remove an idea (based on its id)

- [ ] Update the future sub-reducer to remove an idea from your Redux store

#### Frontend

- [ ] In the single-idea view, include an `X` button under the idea
- [ ] Clicking the `X` button should:
  - [ ] Make an AJAX request that causes that idea to be removed from database
  - [ ] Change the url bar to `/future`
  - [ ] Change the view to the future-list page

Congrats! You have completed your sixth vertical slice! Make sure to `commit -m "Feature: Removing an Idea"` before moving on.

</details>

### Tier 7: Random Button (6/107)

<details>

#### Backend

- [ ] Write a route to serve up one archive post at random

#### Frontend

- [ ] Add a `Random` button to the navbar
- [ ] Clicking the `Random` button should:
  - [ ] Make an AJAX request that pulls one idea at random from database
  - [ ] Change the url bar to the `/archive/:id`
  - [ ] Display the single archive-post component

Congrats! You have completed your seventh vertical slice! Make sure to `commit -m "Feature: Random Button"` before moving on.

</details>

### Tier 8: Adding a New Tag (4/107)

<details>

#### Backend

- [ ] Write a route to add a new tag
- [ ] Update the future sub-reducer to add a tag in your Redux store

#### Frontend

- [ ] Design a component with a form for suggesting a new tag
- [ ] Make an AJAX request that causes the new tag to be persisted in the database

Congrats! You have completed your eighth vertical slice! Make sure to `commit -m "Feature: Adding a New Tag"` before moving on.

</details>

### Tier 9: Search by Date (10/107)

<details>

#### Backend

- [ ] Write a route to find one archive post by its date

- [ ] Update the archive sub-reducer to serve up this search result in your Redux store

#### Frontend

- [ ] Write a Search-by-Date component
- [ ] Component should also display when url bar says `/archive/search`
  - [ ] Form should only accept dates in the proper format `YYYY-MM-DD`
- [ ] Submitting the form with a validly formatted date should:

  - [ ] Make an AJAX request that finds the post made on that date, if appropriate
  - [ ] Clear out the contents of the search box
  - [ ] Change the url bar to match `/archive/search/:postId`
  - [ ] Display the single-post component for that result without needing to refresh the page

Congrats! You have completed your ninth vertical slice! Make sure to `commit -m "Feature: Search by Date"` before moving on.

</details>

### Bonus Tier 1: Finishing Touches (9/10 EC)

<details>

- [ ] If a user attempts to access one of the dates when there is no question, a helpful message should be displayed
- [ ] If a user attempts to add a new idea without selecting a tag, a helpful message should be displayed
- [ ] If a user attempts to access a page that doesn't exist (ex. `/cafeteria`), a helpful "not found" message should be displayed
- [ ] Whenever a component needs to wait for data to load from the server, a "loading" message should be displayed until the data is available

- [ ] Has a working `seed` file, that seeds the db with (_complete?_) archive, future, and tag instances.
- [ ] On the archive-list page, results are displayed chronologically, with the most recent entries first
- [ ] Navbar is updated with links for each search-by-tag page
  - [ ] Best if in a dropdown menu
- [ ] Overall, the app is spectacularly styled and visually stunning

</details>

### Bonus Tier 2: Security (1/10 EC)

<details>

#### Backend

- [ ] Require a password to enter any page on the `/future` router
- [ ] OR require relevant login to access any page on `/future` in root.js

#### Frontend

</details>
