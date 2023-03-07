# CarCar

Team: 1

* Shayne Buac - Sales microservice
* Person 2 - Which microservice?

## Design

## Service microservice

Explain your models and integration with the inventory
microservice, here.

## Sales microservice

##### Models:

- [ ] `Sales person`
  - Name
  - Employee Number
- [ ] `Customer`
  - Name
  - Address
  - Phone number
- [ ] `Sale`s record
  - Sale price
  - Automobile (ForeignKey to AutomobileVO)
  - Sales person (ForeignKey)
  - Customer (ForeignKey)
- [ ] `AutomobileVO`
  - import_href
  - vin

##### RESTful API (Port 8080):

| Method | URL | What it does | View function | Notes |
| ------ | ------ | ------ | ------ | ------ |
|   GET  |        |        |        |        |
| GET |  | | |  |
|    POST    |   |   |  |
| GET |  | |  |
| DELETE |  |  |  |

##### Poller:
- One poller to poll the Inventory API for `Automobile` resources every 60 seconds

##### React:
- ADD CORS HEADERS TO PROJECT SETTINGS
- Components:
  - List sales with details
  - Sales person dropdown
  - List a sales person's sales history
  - Sales person form
  - Customer form
  - Sale record form

- React Router
  - Used `BrowserRoutes`, `Routes`, and `Route` from  `react-router-dom` to create paths for
