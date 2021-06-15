![Issues](https://img.shields.io/github/issues/samuelsilvadev/back-to-top?style=flat-square)
![MIT License](https://img.shields.io/github/license/samuelsilvadev/back-to-top?style=flat-square)
<br />
<br />

<h1 align="center">@small-components/back-to-top</h1>
<br />

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Component configuration](#component-configuration)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## About The Project

The project is part of a collection of small components built with React, made to be flexible and ready to be imported on CSR and SSR.
This component was made to provide the functionality of the back-to-top button used on many applications.

### Built With

- React
- Storybook
- Jest
- @testing-library

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- node

You can follow the installation guide from the official documentation
[here](https://nodejs.org/en/)

- yarn

You can follow the installation guide from the official documentation
[here](https://classic.yarnpkg.com/en/docs/install/)

### Installation

1. Clone the repo

```sh
git clone https://github.com/samuelsilvadev/back-to-top.git
```

2. Install NPM packages

```sh
yarn
```

### Component configuration

| Props         | Default value | Description                                                                                             |
| ------------- | ------------- | ------------------------------------------------------------------------------------------------------- |
| showAfterRef  | undefined     | `React.Ref` that will be used to detect when the back to top should appear.                             |
| alwaysVisible | true          | Defines if the element will always be visible. It should be `false` when the `showAfterRef` is provided |
| onClick       | undefined     | Called whenever a click happens on the button                                                           |

## Contributing

Contributions are what make the open source community such an amazing place to
be learn, inspire, and create. Any contributions you make are **greatly
appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/something-amazing`)
3. Commit your Changes (`git commit -m 'feat: Add something amazing'`)
4. Push to the Branch (`git push origin feature/something-amazing`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

- [@samuelsilvadev](https://twitter.com/samuelsilvadev)
- samuelsilvawb@gmail.com

## Acknowledgements

- [Best README Template](https://github.com/othneildrew/Best-README-Template)
- [iconhub](https://iconhub.io/)
- [Shields](https://shields.io/)
