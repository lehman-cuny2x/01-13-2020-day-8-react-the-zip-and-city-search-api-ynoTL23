# City - Zip Code Search API

A React app is created to send GET requests to an API to retrieve information regarding a certain city or zip code. The data is returned as JSON, parse and stylized for the user.

The app features two distinct methods of searching: by zip code and city name.

The client/user is initially greeted with a static page and two buttons. When clicked, the user will be taken to the respective methods of search.

---

### Search by City
When searching by city, the user is returned a list of zip codes associated for that city, grouped by state. Each zip code will provide information about that city, such as population and wage.

---
### Search by Zip Code
When searching by zip code, the app will retrieve a list of cities encompassed by the given zip code. Similar to searching by city, the returned values will be parsed with info about each city such as population and geo-coordinate locations.
