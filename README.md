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
  -
  -
  -
  -
  - bin (Foreign Key to BinVO)
- [ ] Potential `customer`
  -
- [ ] `Sale`s record
  -
- [ ] `AutomobileVO` - Same properties as Bin model + import_href
  - import_href
  -

##### RESTful API (Port 8080):

| Method | URL | What it does | View function | Notes |
| ------ | ------ | ------ | ------ | ------ |
|   GET  |        |        |        |        |
| GET |  | | |  |
|    POST    |   |   |  |
| GET |  | |  |
| DELETE |  |  |  |

##### Poller:
- One poller to poll the Wardrobe API for `Automobile` resources every 60 seconds

##### React:
- Components:


- React Router
  - Used `BrowserRoutes`, `Routes`, and `Route` from  `react-router-dom` to create paths for
