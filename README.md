# CarCar

Team: 1

* Shayne Buac - Sales microservice
* Jordan Bott - Service Microservice

## Table of Contents
- [Design](#design)
- [Installation](#installation)
- [Inventory Microservice](#inventory-microservice)
- [Service Microservice](#service-microservice)
- [Sales Microservice](#sales-microservice)

## Design
CarCar is a Web application that is designed to manage an automobile dealership by tracking the inventory, sales, and service of cars. The application consists of 3 microservices: inventory, sales, and service. These microservices utilize RESTful API in the back-end that is then brought to the user interface on the front-end to dynamically display data and allow user interaction with the application.

Docker is used to run the application. To use the app, follow the steps for the installation below and refer to each microservice's section.

<details><summary>Diagram</summary>
**PUT DIAGRAM HERE**
</details>

## Installation
1. Open up your terminal to the desired directory on your local computer
2. Clone the repository
```
git clone https://gitlab.com/jordan.bott/project-beta.git
```
3. Open up Docker Desktop and run the following commands in your terminal:
```
docker volume create beta-data
docker-compose build
docker-compose up
```
**Note:** When you run `docker-compose up` and if you're on macOS, you will see a warning about an environment variable named OS being missing. **You can safely ignore this.**

4. After Docker is done loading, access the application on your browser (Google Chrome recommended) at http://localhost:3000/
5. (Optional) To import a complete Insomnia collection for this project, open Insomnia and within Insomnia:
- Make a new project called CarCar
- Within that project, click the Create dropdown at the top right and click File under IMPORT FROM
- Select the Insomnia.yaml file from the project-beta folder and import
- A new collection called CarCar should show up, and **that should contain all of the RESTful API URLs and example inputs to use for each microservice**!

## Inventory Microservice
### Overview
The Inventory microservice consists of one main microservice, **api**, and represents the dealership's inventory of vehicles. 

Api is a Django application with a Django project, `inventory_project`, and a Django app, `inventory_rest`, where the latter handles create, read, update, and delete (CRUD) functionality for manufacturers (`Manufacturer` objects), vehicle models (`VehicleModel` objects), and automobiles (`Automobile` objects).

### RESTful API (Port 8100)


### Models
`Manufacturer`
- 


## Service Microservice
### Overview


## Sales Microservice

### Models

- [x] `Sales person`
  - Name
  - Employee Number
- [x] `Customer`
  - Name
  - Address
  - Phone number
- [x] `Sale`s record
  - Sale price
  - Automobile (ForeignKey to AutomobileVO)
  - Sales person (ForeignKey)
  - Customer (ForeignKey)
- [x] `AutomobileVO`
  - import_href
  - vin

### RESTful API (Port 8090)

| Method | URL | What it does | View function | Notes |
| ------ | ------ | ------ | ------ | ------ |
| GET |  | | | |
| GET |  | | |  |
| POST |  |  |  |
| GET |  | |  |
| DELETE |  |  |  |

### Poller
- One poller to poll the Inventory API for `Automobile` resources every 60 seconds

### React
##### Components:
- List sales with details
- Sales person dropdown
- List a sales person's sales history
- Sales person form
- Customer form
- Sale record form

##### React Router
- Used `BrowserRoutes`, `Routes`, and `Route` from  `react-router-dom` to create paths for
