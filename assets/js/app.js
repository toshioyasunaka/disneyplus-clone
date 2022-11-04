import { getHomeContent } from "./services/getHomeContent.js";

getHomeContent()
    .then((data) => {
        console.log('app.js', data)
    })
    .catch((error) => {
        console.log(error);
    });