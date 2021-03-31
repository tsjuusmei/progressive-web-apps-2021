# Progressive Web Apps @cmda-minor-web · 20-21

In this course we will convert the client side web application previously made Web App From Scratch into a server side rendered application. We also add functionalities based on the Service Worker and turn the application into a Progressive Web App. Ultimately we are going to implement a series of optimisations to improve the performance of the application.  

## Learning goals
- _You understand the difference between client side and server side rendering and you can apply server side rendering
in your application_
- _You understand how a Service Worker works and you can implement it in your application._
- _You understand how the critical render path works and how you can optimize it for a better runtime and / or perceived performance._

[Rubric with learning goals](https://icthva.sharepoint.com/:x:/r/sites/FDMCI_EDU__CMD20_21_Minor_Web_5i7j73jt/_layouts/15/Doc.aspx?sourcedoc=%7B276F53A7-2531-4006-8AD2-08C9A82D3A11%7D&file=PWA%202021%20Rubric.xlsx&action=edit&mobileredirect=true&wdPreviousSession=92686bea-446f-40e3-9303-33fa3f832b82&wdOrigin=TEAMS-ELECTRON.teams.undefined)

## The App

<img src="https://i.imgur.com/SEr9vVd.jpg">

## Live Link

https://pwa-guus.herokuapp.com/

## The Process

In this course I had a bit of a backlog, because my WAFS (the previous course) wasn't finished yet due to personal circumstances. So first I had to finish that and transfer that whole project to a server-side Node application.

The transferring to a Node project went good. I already had some experience with Node, so that came in really handy for me. After transferring the project, I finished the dashboard and detail page, with server-side rendering the fetched data.

I created build scripts for the project for some better and clearer performance on the website. After doing that I implemented a manifest and service worker, and started improving the website's performance.

## Lighthouse testing

<img src="https://i.imgur.com/9wSu9Nd.png">

<img src="https://i.imgur.com/MqD6MQd.png">

As seen above, the scores weren't too bad. But they certainly could get a boost. I completely nailed the score for Accessibility, Best Practices and SEO. The Performance testing was a bit hard, because I have to do big fetches from the [Mars Rover Photos API](https://api.nasa.gov/#mars-rover-photos). This has been significantly improved, but is still not a perfect score.

## Implemented improvements

For better scores I implemented some critical improvements that improved the scores a lot.

As seen in [this commit](https://github.com/tsjuusmei/progressive-web-apps-2021/commit/6b653b171c859e400a029e0fefc1bab8af076043), I added and adjusted some semantic changes to improve accessibility and overal score. I added a `!DOCTYPE` element and opened and closed the `<html>` elements within the project.

One big mistake I made was putting a `<a>` element around a `<li>` element, which was not semantic at all. So I also changed that around in this commit.

In [this commit](https://github.com/tsjuusmei/progressive-web-apps-2021/commit/795444bc7ae383bf1efe9323313b8bdb4f34147f) I added some meta tags for a better SEO and score in the Progressive Web App department. Also in the [next commit](https://github.com/tsjuusmei/progressive-web-apps-2021/commit/034b1ee685a7769a765f127e4402d6731696b1ec) I added a `<base>` element.

With these changes the scores changed significantly, which kind of surprised me because of how easy it actually was.

## Build scripts

I created a build script for compressing the written CSS files for the project. I used `gulp` for this script. 

```js
const gulp = require('gulp')
const concat = require('gulp-concat')
const cleanCSS = require('gulp-clean-css')

gulp.src([
  "./src/styles/main.css",
  "./src/styles/detail.css"
])
  .pipe(concat("index.css"))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest("./static/css"))
```

This code takes all the css files and puts them together in one compressed css file that is used on the website.

## Installation

### Clone the repository

`git clone https://github.com/tsjuusmei/progressive-web-apps-2021.git`

### Navigate to foler

`cd progressive-web-apps-2021`

### Install packages

`npm install`

### Run application

`npm run start`

## Datasets

The first dataset I use is the [Mars Rover Photos API](https://api.nasa.gov/#mars-rover-photos). Here is where I get photos and some other information about the context of the photos. Each day there are pictures received on earth, there will be a few hundreds are sent over, which look like this in the dataset: 

```json

  "photos": [
    {
      "id": 102693,
      "sol": 1000,
      "camera": {
        "id": 20,
        "name": "FHAZ",
        "rover_id": 5,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG",
      "earth_date": "2015-05-30",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active"
      }
    },
    {
      "id": 102694,
      "sol": 1000,
      "camera": {
        "id": 20,
        "name": "FHAZ",
        "rover_id": 5,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FRB_486265257EDR_F0481570FHAZ00323M_.JPG",
      "earth_date": "2015-05-30",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active"
      }
    }, ...
```

The second dataset is a [self made API](https://wafs-be.herokuapp.com/temps) which has the average temperatures measured on Mars the past few years. I use this to calculate an average temperature of Mars. The dataset looks like this:

```json
[
  {
    "temps": {
      "average": -65.45,
      "minimum": -99.64,
      "maximum": -23.16
    }
  },
  {
    "temps": {
      "average": -63.5,
      "minimum": -99.98,
      "maximum": -21.74
    }
  }, ...
```

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- Add a nice image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
