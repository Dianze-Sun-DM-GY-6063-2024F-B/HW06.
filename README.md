In this project, I utilized the health data representing tree health conditions, along with the longitude and latitude data, to create a geolocation-based visualization. By mapping this data to the screen's width and height, I generated a map-like interface where each tree is represented by a different shape and color based on its health status.

I first analyzed the ranges of longitude and latitude in Excel to ensure that they could be properly mapped onto the canvas dimensions. Using p5.js's map() function, I converted these geocoordinates into positions on the screen, accurately displaying each tree's location on the map.

I decided to dynamically adjust the shape and color of the visual representation based on the health condition (health data) of each tree:

For trees in good health, I used green circles to symbolize vitality.
For trees in fair condition, I used white circles to indicate a moderate health status.
For trees in poor condition, I not only changed the color to yellow but also modified the shape to squares, making unhealthy trees stand out more prominently.
Using p5.js’s loadTable() function, I loaded the CSV data containing longitude, latitude, and health status. I then used the map() function to convert the geographical coordinates into X and Y positions on the canvas, ensuring accurate placement of each tree.

While rendering each data point, I assigned different colors and shapes based on the health value. Trees with a good or fair status were represented by circles in green and white, respectively, whereas trees with a poor status were depicted as yellow squares, making them more visually distinct.