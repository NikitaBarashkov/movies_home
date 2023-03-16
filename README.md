Реализованные требования проекта:

## React

- Использованы функциональные компоненты c хуками в приоритете над классовыми (Все компоненты, за исключением компонента-предохранителя, написаны в фнукциональном стиле).
- Есть четкое разделение на умные и глупые компоненты. Умные: [SearchPage](./src/components/containers/SearchPage/SearchPage.jsx), [NavBar](./src/components/NavBar/NavBar.jsx). Глупые: [HeaderLink](./src//components/HeaderLink/HeaderLink.jsx), [RadioBtn](./src/components/RadioBtn/RadioBtn.jsx), [SearchForm](./src/components/SearchForm/SearchForm.jsx).
- Есть рендеринг списков: [StoryBox](./src/components/StoryBox/StoryBox.jsx), [Card](./src/components/FullCardMovie/Card.jsx), [FavoritePage](./src/components/containers/FavoritePage/FavoritePage.jsx).
- Реализована хотя бы одна форма: [SignInForm](./src/components/SignInForm/), [SignUpForm](./src/components/SignUpForm/SignUpForm.jsx), [SearchPage](./src/components/containers/SearchPage/SearchPage.jsx).
- Есть применение Контекст API: [ThemeProvider](./src/providers/ThemeProvider.jsx), [SearchProvider](./src/providers/SearchProvider.jsx).
- Есть применение предохранителя: [ErrorBoundary](./src/components/ErrorBoundary/ErrorBoundary.jsx).
- Есть хотя бы один кастомный хук: [hooks](./src/hooks/).
- Хотя бы несколько компонентов используют PropTypes: [FavoriteCard](./src/components/containers/FavoritePage/FavoriteCard.jsx), [StoryItem](./src/components/StoryItem/StoryItem.jsx), [SearchOptionForm](./src/components/SearchOptionsForm/SearchOptionsForm.jsx), [SearchForm](./src/components/SearchForm/), [RadioBtn](./src/components/RadioBtn/).
- Поиск не должен триггерить много запросов к серверу (Поиск происходит по клику).
- Есть применение lazy + Suspense: [App](./src/App.jsx).

## Redux

- Используется Modern Redux with Redux Toolkit: [store](./src/store/store.js).
- Используются слайсы: [favoriteSlice](./src/store/favoriteSlice.js), [historySlice](./src/store/historySlice.js), [initStoreSlice](./src/store/initStoreSlice.js), [usersSlice](./src/store/usersSlice.js).
- Есть кастомные мидлвары: [setLocStorageMiddleware](./src/store/middlewares/setLocStorageMiddleware.js), [setStoreMiddleware](./src/store/middlewares/setStoreMiddleware.js).
- Используется RTK Query: [moviesAPI](./src/store/moviesAPI.js).
- Используется Transforming Responses: [moviesAPI](./src/store/moviesAPI.js).

## Необязательные требования

- Используются мемоизированные селекторы: [selectors](./src/store/selectors/selectors.js).
