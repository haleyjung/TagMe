<div align="center">
<h1 align="center">#TagMe</h1>
<br />
  <img src='./assets/TagMe_demo.gif' width="200"  align="center"/>

  <p align="center">
    <br />
    <a href="https://github.com/haleyjung/TagMe/issues">Report Bug</a>
    ·
    <a href="https://github.com/haleyjung/TagMe/issues">Request Feature</a>
  </p>
</div>

---

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#base-dependencies">Base dependencies</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

---
## About The Project

**#TagMe** is an iOS app that generates hashtags from photos users upload. It uses Google Cloud Vision API's label detection, which processes machine learning analysis to extract information about entities in the uploaded image. The labels with the highest topicality score are modified into hashtags and become readily available for users to save and curate their own hashtag collection.

This is a minimum viable product that was ideated and exeucted in 48 hours.

### Tech Stack

![React Native](https://img.shields.io/badge/-React_Native-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![Expo](https://img.shields.io/badge/-Expo-000020?logo=expo&logoColor=white&style=for-the-badge)
![Firebase](https://img.shields.io/badge/-Firebase-FFC300?logo=firebase&logoColor=white&style=for-the-badge)
![Babel](https://img.shields.io/badge/-Babel-F9DC3E?logo=babel&logoColor=white&style=for-the-badge)

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

### Base dependencies

- [axios](https://github.com/axios/axios) for networking.
- [react-native-config](https://github.com/luggit/react-native-config) to manage envionments.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [jest](https://facebook.github.io/jest/) and [react-native-testing-library](https://callstack.github.io/react-native-testing-library/) for testing.

### Installation

1. Get Google Cloud Vision API's Key and URL from [Google Cloud Platform](https://console.cloud.google.com/)
2. Get Firebase Database URL from [Realtime Database in Firebase's Project Overview](https://console.firebase.google.com/)
3. Clone the repo
   ```sh
   git clone https://github.com/haleyjung/TagMe.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create config.js in the config folder adn enter your URLs and API
   ```js
    export const VISION_API_KEY = 'PASTE_YOUR_KEY';
    export const VISION_API_URL = `PASTE_YOUR_URL`;
    export const DB_URL = 'PASTE_YOUR_URL';
   ```

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.
## Styleguide
For coding styling, we decided to go with ESLint and [React Native community's styleguide](https://github.com/facebook/react-native/tree/main/packages/eslint-config-react-native-community#readme).
## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
