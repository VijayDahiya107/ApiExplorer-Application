API Explorer – React Native App
A clean, functional, and stylish API Explorer app built with React Native CLI. It fetches public APIs from APIs.guru, allows users to search, paginate, and view details for each API. Includes light/dark theme toggle and pull-to-refresh.

# Setup Instructions

1.Clone the repository

First Command : 
git clone https://github.com/yourusername/api-explorer-app.git
2nd Command :
cd api-explorer-app

2.Install dependencies

npm install


3. On Android:

npx react-native run-android

4.On iOS (macOS only):

npx pod-install
npx react-native run-ios

# Features & Implementation Notes
 Core Features

1. Home Screen

Displays list of public APIs.

Includes search bar to filter by name.

Paginated results (20 items per page).

Pull-to-refresh for fetching the latest data.

2. Detail Screen

Shows version, description, contact info, and base URL.

Includes a Visit Docs button that opens the Swagger spec.

3.Theme Toggle

Light/Dark theme support using a ThemeContext.

Auto-initializes to match system theme.

Switch toggle in top-right corner.

4.Navigation

Stack navigation between Home and Detail screens using @react-navigation/native.

 
# Notable Implementation Details

1. ThemeContext:

Uses React.Context + useState to manage isDark state.

Centralized toggle accessible across screens.

2. Pagination:

FlatList loads more items when scrolled near the bottom.

Controlled using page state and ITEMS_PER_PAGE constant.

3.Search:

Filters in-memory API data based on lowercase matches to the search query.

Resets to paginated list when the search is cleared.

4.Fallbacks:

Gracefully handles missing data (description, contact, swaggerUrl) with default text.


## Additional Features

Custom Header with logo and stylized search bar.

1. Elegant UI:

Uses shadows, padding, rounded corners.

Subtle transitions and layout structure.

Compatible with both light and dark themes.

2.Error Handling:

If API fetch fails, empty state is displayed (no crash).

Prevents infinite scroll when filtering or on full data load.




## Dependencies
react-native

@react-navigation/native

@react-navigation/stack

react-native-screens

react-native-safe-area-context

react-native-gesture-handler
