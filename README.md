# Pokémon List App

Live demo: <https://mhdaxif.github.io/pokemon-app>.

This project is a Pokémon List web application built with **Angular** and **Angular Material**. It allows users to search, view, and paginate through a list of Pokémon, mark favorites, and navigate to a detail page.

### Features

- **Search Functionality**: A search bar at the top for searching Pokémon.
- **Favorite Marking**: Favorite Pokémon by clicking on a favorite icon.
- **Detail Page**: Navigate to a detailed view of each Pokémon.
- **Pagination**: Use pagination to navigate through the list.
- **Responsive Design**: The UI follows enterprise-grade best practices with a professional look using Angular Material.
- **State management**: The maintain state using BehaviorSubject.

## Prerequisites

Make sure you have the following installed before setting up the project:

- **Node.js**: Download and install from [Node.js Official Site](https://nodejs.org/)
- **Angular CLI**: Run the following command to install Angular CLI globally:

  ```bash
  npm install -g @angular/cli
  ```

## Getting Started

### 1. Clone the Repository  

```bash
git clone https://github.com/mhdaxif/pokemon-app.git
```

### 2. Navigate to the Project Folder

```bash
cd pokemon-app
```

### 3. Install Dependencies

Install all necessary dependencies using `npm`.

```bash
npm install
```

### 4. Running the App

You can now start the Angular application using the following command:

```bash
ng serve
```

This will start a development server. Open your browser and go to `http://localhost:4200/` to see the application in action.

## Folder Structure

```
└── 📁src
    └── 📁app
        └── 📁core
            └── 📁guards
                └── save-state.guard.ts
            └── 📁services
                └── app-state.service.ts
                └── favorite.service.ts
                └── index.ts
                └── pokemon-details.service.ts
                └── pokemon.service.ts
        └── 📁features
            └── 📁pokemon
                └── 📁detail
                    └── detail.component.html
                    └── detail.component.scss
                    └── detail.component.spec.ts
                    └── detail.component.ts
                └── 📁home
                    └── home.component.html
                    └── home.component.scss
                    └── home.component.spec.ts
                    └── home.component.ts
        └── 📁shared
            └── 📁components
                └── 📁pagination
                    └── pagination.component.html
                    └── pagination.component.scss
                    └── pagination.component.spec.ts
                    └── pagination.component.ts
                └── 📁pokemon-card
                    └── pokemon-card.component.html
                    └── pokemon-card.component.scss
                    └── pokemon-card.component.spec.ts
                    └── pokemon-card.component.ts
            └── 📁models
                └── Ability.ts
                └── index.ts
                └── Pokemon.ts
                └── PokemonDetails.ts
                └── PokemonListModel.ts
                └── Statistics.ts
                └── Type.ts
        └── app.component.html
        └── app.component.scss
        └── app.component.spec.ts
        └── app.component.ts
        └── app.config.ts
        └── app.routes.ts
        └── material.module.ts
    └── index.html
    └── main.ts
    └── styles.scss
```

### Application Technical Details

- **Lazy Loading**:  
  - Components in the `features` module are loaded lazily to improve initial load performance.
  - The detail and home components under the `pokemon` feature are set up for lazy loading.

- **State Management**:
  - **`save-state.guard.ts`**:  
    - A route guard responsible for saving the application state when the user navigates from the Pokémon list to the detail page.
    - It preserves the current list view state (e.g., pagination, search filters) to prevent data loss when navigating back from the detail page.

- **Favorite Management**:
  - **`favorite.service.ts`**:  
    - Manages user-favorite Pokémon.
    - Stores the list of Pokémon that the user has marked as favorites.
    - Provides methods to add or remove Pokémon from the favorite list and retrieve favorites for filtering.

- **Core Services**:
  - **`pokemon.service.ts`**:  
    - Fetches the list of Pokémon from an API, including pagination and filtering options.
  - **`pokemon-details.service.ts`**:  
    - Handles fetching detailed information about a specific Pokémon.
  - **`app-state.service.ts`**:  
    - Maintains global application state, including search filters, pagination settings, and favorites.
  - **`index.ts` (barrel file)**:  
    - Provides a central export point for core services, promoting cleaner imports in other modules and components.

- **Shared Components**:
  - **`pokemon-card.component.ts`**:  
    - A reusable card component for displaying a Pokémon's basic information (name, image, and favorite status).
  - **`pagination.component.ts`**:  
    - A pagination component that handles page changes and communicates pagination state changes back to the parent component.
  
- **Shared Models**:
  - **`Pokemon.ts`, `PokemonDetails.ts`, `Ability.ts`, `Statistics.ts`, `Type.ts`, etc.**:  
    - These models define the structure of data entities like Pokémon, their abilities, and stats.
    - They ensure that the application has type-safe data interactions between the components and services.

- **Routing**:
  - **`app.routes.ts`**:  
    - Defines routes for navigating between the Pokémon list and detail components.
    - Configures lazy loading for the `pokemon` feature components.
  
- **Material Design**:
  - **`material.module.ts`**:  
    - A central module for managing Angular Material components like buttons, cards, pagination, and loaders.

- **App Configuration**:
  - **`app.config.ts`**:  
    - Centralized configuration for settings like API base URLs and pagination limits.

- **Styles**:
  - **`styles.scss`**:  
    - Global SCSS styles shared across the application for consistent styling.

---

## Key Components

### 1. **Pokemon List (`home.component.ts`)**

- Shows a list of Pokémon.
- Includes a search bar, favorite marking, and pagination.
- Makes use of Angular Material's `mat-card`, `mat-paginator`, and `mat-spinner`.

### 2. **Pokemon Detail (`pokemon-detail.component.ts`)**

- Shows detailed information about a Pokémon, including abilities and statistics.

### 3. **Services (`pokemon.service.ts`)**

- The service responsible for fetching Pokémon data from the API.
- Provides methods like `getPokemons()` to fetch paginated results and `getPokemonDetails()` to fetch detailed information for individual Pokémon.

### 4. **Loader and Pagination**

- The loader (`mat-spinner`) is displayed when data is being fetched from the API.
- Pagination is handled using Angular Material's `mat-paginator`, which is configured to control `offset` and `limit` for API requests.

## Usage

1. **Search Pokémon**: Type in the search bar at the top of the page to filter Pokémon by name.

2. **Favorite Pokémon**: Click on the heart icon to mark a Pokémon as a favorite. Use the filter button to only show favorites.

3. **View Details**: Click on a Pokémon card to view more details such as abilities, stats, and other information.

4. **Pagination**: Use the paginator at the bottom of the page to navigate through the Pokémon list.

## Styling and Customization

- **Theming**: The app uses Angular Material's default theming, which can be customized in `src/styles.scss`.
- **Responsive Layout**: The card layout is responsive and adjusts to different screen sizes.
- **Scrollable Content**: The Pokémon list in the main content is scrollable, with the pagination bar always visible at the bottom.
  
## Build for Production

To create an optimized production build, use the following command:

```bash
ng build --prod
```

The build artifacts will be stored in the `dist/` directory.

## Further Improvements

- [x] **Lazy Loading**: Implement lazy loading for the detail page to improve performance.
- [ ] **Unit Tests**: Implement unit testing using Jasmine and Karma, which is included in the Angular setup by default.
- [ ] **Theming**: Implement theming for consistent styling
