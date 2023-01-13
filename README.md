# Local Development Setup

## Technology stack

- Node 18.12.0

## Installation

### Requirements

Before you get started, the following needs to be installed:
  * **Node** 18.12.0
  * **NPM** 8.19.2
  * **nodemon** 2.0.20

### Requirements

### Setting up the development environment

1.  Get the code. Clone this git repository and check out the latest release:

    ```bash
    git clone https://github.com/DevKnight7/baseball-assessment.git
    cd baseball-assessment
    ```

2.  Install nodemon by running the following command in the terminal:

    ```bash
    sudo npm install -g --force nodemon
    ```

3.  Install the required packages by running the following command in the project root directory:

    ```bash
    npm i
    ```

4.  Run server:

    ```
    npm run start
    ```

5.  See endpoints on swagger by hitting http://localhost:3000/v1/api-docs

6. For run test cases, Run following command

    ```
    npm run test
    ```

## Run Through Docker
### Requirements

Before you get started with docker, the following needs to be installed:
  * **Docker** 20.10.22

### Setting up the docker environment

1.  You can also run script by configuring docker. You can download docker from here https://docs.docker.com/get-docker/

2.  After install, configure docker compose and run the following command:

    ```
    docker compose up
    ```

Congratulations! Basball Stats should now be up and running for development purposes.
