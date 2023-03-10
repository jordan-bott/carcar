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

<details><summary><strong>Diagram</strong></summary>
<img src="/CarCarModel.png">
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
#### Manufacturer
| Method | URL | Action | View |
| ------ | ------ | ------ | ------ |
| GET | `http://localhost:8100/api/manufacturers/` | List all manufacturers | `api_manufacturers` |
| POST | `http://localhost:8100/api/manufacturers/` | Create a manufacturer | `api_manufacturers` |
| GET | `http://localhost:8100/api/manufacturers/<id>/` | Show a manufacturer's details | `api_manufacturer` |
| PUT | `http://localhost:8100/api/manufacturers/<id>/` | Update a manufacturer | `api_manufacturer` |
| DELETE | `http://localhost:8100/api/manufacturers/<id>/` | Delete a manufacturer | `api_manufacturer` |

<details>
<summary><strong>Example GET Outputs</strong></summary>

##### List all manufacturers:
```
{
	"manufacturers": [
		{
			"href": "/api/manufacturers/1/",
			"id": 1,
			"name": "Chrysler"
		}
	]
}
```
##### Show a manufacturer's details:
```
{
	"href": "/api/manufacturers/1/",
	"id": 1,
	"name": "Chrysler"
}
```
</details>

<details>
<summary><strong>Example POST and PUT Input and Output</strong></summary>

##### Input:
```
{
  "name": "Chrysler"
}
```

##### Output:
```
{
	"href": "/api/manufacturers/1/",
	"id": 1,
	"name": "Chrysler"
}
```

</details>

<details><summary><strong>Example DELETE Output</strong></summary>
<br>

```
{
	"id": null,
	"name": "Chrysler"
}
```
</details>


#### Vehicle Model
| Method | URL | Action | View |
| ------ | ------ | ------ | ------ |
| GET | `http://localhost:8100/api/models/` | List all vehicle models | `api_vehicle_models` |
| POST | `http://localhost:8100/api/models/` | Create a vehicle model | `api_vehicle_models` |
| GET | `http://localhost:8100/api/models/<id>/` | Show a vehicle model's details | `api_vehicle_model` |
| PUT | `http://localhost:8100/api/models/<id>/` | Update a vehicle model | `api_vehicle_model` |
| DELETE | `http://localhost:8100/api/models/<id>/` | Delete a vehicle model | `api_vehicle_model` |

<details>
<summary><strong>Example GET Outputs</strong></summary>

##### List all vehicle models:
```
{
	"models": [
		{
			"href": "/api/models/1/",
			"id": 1,
			"name": "Sebring",
			"picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
			"manufacturer": {
				"href": "/api/manufacturers/2/",
				"id": 2,
				"name": "Chrysler"
			}
		}
	]
}
```
##### Show a vehicle model's details:
```
{
	"href": "/api/models/1/",
	"id": 1,
	"name": "Sebring",
	"picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
	"manufacturer": {
		"href": "/api/manufacturers/2/",
		"id": 2,
		"name": "Chrysler"
	}
}
```
</details>

<details>
<summary><strong>Example POST and PUT Input and Output</strong></summary>

##### Input:
```
{
  "name": "Sebring",
  "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
  "manufacturer_id": 2
}
```

##### Output:
```
{
	"href": "/api/models/1/",
	"id": 1,
	"name": "Sebring",
	"picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
	"manufacturer": {
		"href": "/api/manufacturers/2/",
		"id": 2,
		"name": "Chrysler"
	}
}
```

</details>

<details><summary><strong>Example DELETE Output</strong></summary>
<br>

```
{
	"id": null,
	"name": "Pacifica",
	"picture_url": "https://www.motortrend.com/uploads/2021/11/2022-Chrysler-Pacifica-029.jpg",
	"manufacturer": {
		"href": "/api/manufacturers/2/",
		"id": 2,
		"name": "Chrysler"
	}
}
```
</details>

#### Automobile
| Method | URL | Action | View |
| ------ | ------ | ------ | ------ |
| GET | `http://localhost:8100/api/automobiles/` | List all automobiles | `api_automobiles` |
| POST | `http://localhost:8100/api/automobiles/` | Create an automobile | `api_automobiles` |
| GET | `http://localhost:8100/api/automobiles/<vin>/` | Show an automobile's details | `api_automobile` |
| PUT | `http://localhost:8100/api/automobiles/<vin>/` | Update an automobile | `api_automobile` |
| DELETE | `http://localhost:8100/api/automobiles/<vin>/` | Delete an automobile | `api_automobile` |

<details>
<summary><strong>Example GET Outputs</strong></summary>

##### List all vehicle models:
```
{
	"autos": [
		{
			"href": "/api/automobiles/J098DFASJ90/",
			"id": 1,
			"color": "Red",
			"year": 2012,
			"vin": "J098DFASJ90",
			"model": {
				"href": "/api/models/2/",
				"id": 2,
				"name": "Sebring",
				"picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
				"manufacturer": {
					"href": "/api/manufacturers/2/",
					"id": 2,
					"name": "Chrysler"
				}
			}
		}
	]
}
```
##### Show a vehicle model's details:
```
{
	"href": "/api/automobiles/J098DFASJ90/",
	"id": 1,
	"color": "Red",
	"year": 2012,
	"vin": "J098DFASJ90",
	"model": {
		"href": "/api/models/2/",
		"id": 2,
		"name": "Sebring",
		"picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
		"manufacturer": {
			"href": "/api/manufacturers/2/",
			"id": 2,
			"name": "Chrysler"
		}
	}
}
```
</details>

<details>
<summary><strong>Example POST and PUT Input and Output</strong></summary>

##### Input:
```
{
  "color": "Red",
  "year": 2012,
  "vin": "J098DFASJ90",
  "model_id": 2
}
```

##### Output:
```
{
	"href": "/api/automobiles/J098DFASJ90/",
	"id": 2,
	"color": "Red",
	"year": 2012,
	"vin": "J098DFASJ90",
	"model": {
		"href": "/api/models/2/",
		"id": 2,
		"name": "Sebring",
		"picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
		"manufacturer": {
			"href": "/api/manufacturers/2/",
			"id": 2,
			"name": "Chrysler"
		}
	}
}
```

</details>

<details><summary><strong>Example DELETE Output</strong></summary>
<br>

```
{
	"href": "/api/automobiles/1C3CC5FB2AN120174/",
	"id": null,
	"color": "Silver",
	"year": 2012,
	"vin": "1C3CC5FB2AN120174",
	"model": {
		"href": "/api/models/2/",
		"id": 2,
		"name": "Sebring",
		"picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
		"manufacturer": {
			"href": "/api/manufacturers/2/",
			"id": 2,
			"name": "Chrysler"
		}
	}
}
```
</details>

### Models
`Manufacturer`
- 


## Service Microservice
### Overview


### RESTful API (Port 8080)

#### Technician
| Method | URL | Action | View |
| ------ | ------ | ------ | ------ |
| GET | `` | List all  | `` |
| POST | `` | Create a  | `` |

<details>
<summary><strong>Example GET Output</strong></summary>
<br>

```
{
	"technicians": [
		{
			"name": "Danny J",
			"employee_number": 7846517,
			"id": 1
		},
		{
			"name": "Scooby Doo",
			"employee_number": 5354234,
			"id": 2
		}
	]
}
```
</details>

#### Appointment
| Method | URL | Action | View |
| ------ | ------ | ------ | ------ |
| POST | `` | Create a service appointment | `` |
| GET | `` | List upcoming services | `` |
| GET | `` | List all services | `` |
| GET | `` | List services by VIN | `` |
| PUT | `` | Cancel appointment | `` |
| PUT | `` | Finish appointment | `` |

<details>
<summary><strong>Example GET Outputs</strong></summary>

##### List upcoming services:
```
{
	"services": [
		{
			"status": "SCHEDULED",
			"vin": "J098DFASJ90",
			"auto_owner": "Shaggy",
			"appointment_date": "2023-03-15",
			"appointment_time": "09:30:00",
			"technician": {
				"name": "Danny J",
				"employee_number": 7846517,
				"id": 1
			},
			"service_reason": "",
			"id": 2,
			"vip_treatment": true
		}
	]
}
```
##### List all services:
```
[
	{
		"status": "FINISHED",
		"vin": "J098DFASJ90",
		"auto_owner": "Shaggy",
		"appointment_date": "2023-03-15",
		"appointment_time": "09:30:00",
		"technician": {
			"name": "Danny J",
			"employee_number": 7846517,
			"id": 1
		},
		"service_reason": "",
		"id": 2,
		"vip_treatment": true
	},
	{
		"status": "SCHEDULED",
		"vin": "1C3CC5FB2AN120174",
		"auto_owner": "Janey",
		"appointment_date": "2023-03-15",
		"appointment_time": "10:30:00",
		"technician": {
			"name": "Danny J",
			"employee_number": 7846517,
			"id": 1
		},
		"service_reason": "",
		"id": 3,
		"vip_treatment": false
	},
	{
		"status": "CANCELED",
		"vin": "1C3CC5FB2AN120174",
		"auto_owner": "Janey",
		"appointment_date": "2023-09-15",
		"appointment_time": "09:30:00",
		"technician": {
			"name": "Danny J",
			"employee_number": 7846517,
			"id": 1
		},
		"service_reason": "",
		"id": 1,
		"vip_treatment": false
	}
]
```
##### List services by VIN:
```
{
	"services": [
		{
			"status": "SCHEDULED",
			"vin": "1C3CC5FB2AN120174",
			"auto_owner": "Janey",
			"appointment_date": "2023-03-15",
			"appointment_time": "10:30:00",
			"technician": {
				"name": "Danny J",
				"employee_number": 7846517,
				"id": 1
			},
			"service_reason": "",
			"id": 3,
			"vip_treatment": false
		},
		{
			"status": "CANCELED",
			"vin": "1C3CC5FB2AN120174",
			"auto_owner": "Janey",
			"appointment_date": "2023-09-15",
			"appointment_time": "09:30:00",
			"technician": {
				"name": "Danny J",
				"employee_number": 7846517,
				"id": 1
			},
			"service_reason": "",
			"id": 1,
			"vip_treatment": false
		}
	]
}
```
</details>

<details>
<summary><strong>Example POST Input and Output</strong></summary>

##### Input:
```
{
	"vin": "1C3CC5FB2AN120174",
	"auto_owner": "Janey",
	"appointment_time": "09:30:00",
	"appointment_date": "2023-09-15",
	"technician": 7846517
}
```

##### Output:
```
{
	"status": "SCHEDULED",
	"vin": "1C3CC5FB2AN120174",
	"auto_owner": "Janey",
	"appointment_date": "2023-09-15",
	"appointment_time": "09:30:00",
	"technician": {
		"name": "Danny J",
		"employee_number": 7846517,
		"id": 1
	},
	"service_reason": "",
	"id": 1,
	"vip_treatment": false
}
```

</details>

<details><summary><strong>Example PUT Outputs</strong></summary>

##### Cancel appointment:

```
{
	"status": "CANCELED",
	"vin": "1C3CC5FB2AN120174",
	"auto_owner": "Janey",
	"appointment_date": "2023-09-15",
	"appointment_time": "09:30:00",
	"technician": {
		"name": "Danny J",
		"employee_number": 7846517,
		"id": 1
	},
	"service_reason": "",
	"id": 1,
	"vip_treatment": false
}
```

##### Finish appointment:

```
{
	"status": "FINISHED",
	"vin": "J098DFASJ90",
	"auto_owner": "Shaggy",
	"appointment_date": "2023-03-15",
	"appointment_time": "09:30:00",
	"technician": {
		"name": "Danny J",
		"employee_number": 7846517,
		"id": 1
	},
	"service_reason": "",
	"id": 2,
	"vip_treatment": true
}
```
</details>


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

#### Customer
| Method | URL | Action | View |
| ------ | ------ | ------ | ------ |
| GET | `http://localhost:8100/api/customers/` | List all customers | `api_customers` |
| POST | `http://localhost:8100/api/customers/` | Create an customer | `api_customers` |
| GET | `http://localhost:8100/api/customers/<id>/` | Show a customer's details | `api_customer` |
| PUT | `http://localhost:8100/api/customers/<id>/` | Update a customer | `api_customer` |
| DELETE | `http://localhost:8100/api/customers/<id>/` | Delete a customer | `api_customer` |

<details>
<summary><strong>Example GET Outputs</strong></summary>

##### List all customers:
```
{
	"customers": [
		{
			"id": 1,
			"name": "Hack Reactor",
			"address": "119 Nueces St 8, Austin, TX 78701",
			"phone_number": "720-615-0225"
		},
		{
			"id": 2,
			"name": "Hack Reactor",
			"address": "119 Nueces St, Austin, TX 78701",
			"phone_number": "720-615-0225"
		}
	]
}
```
##### Show a customer's details:
```
{
	"id": 1,
	"name": "Hack Reactor",
	"address": "119 Nueces St 8, Austin, TX 78701",
	"phone_number": "720-615-0225"
}
```
</details>

<details>
<summary><strong>Example POST Input and Output</strong></summary>
<br>

<details><summary>With Apartment Property (Optional)</summary>

##### Input :
```
{
	"name": "Hack Reactor",
	"street": "119 Nueces St",
	"apartment": 8,
	"city": "Austin", 
	"state": "TX" ,
	"zip_code": 78701,
	"phone_number": "720-615-0225"
}
```

##### Output:
```
{
	"id": 4,
	"name": "Hack Reactor",
	"address": "119 Nueces St 8, Austin, TX 78701",
	"phone_number": "720-615-0225"
}
```
</details>

<details><summary>Without Apartment Property</summary>

##### Input :
```
{
	"name": "Hack Reactor",
	"street": "119 Nueces St",
	"city": "Austin", 
	"state": "TX" ,
	"zip_code": 78701,
	"phone_number": "720-615-0225"
}
```

##### Output:
```
{
	"id": 1,
	"name": "Hack Reactor",
	"address": "119 Nueces St, Austin, TX 78701",
	"phone_number": "720-615-0225"
}
```
</details>

</details>

<details><summary><strong>Example DELETE Output</strong></summary>
<br>

```
{
	"deleted": true
}
```
</details>

#### Sales Person
| Method | URL | Action | View |
| ------ | ------ | ------ | ------ |
| GET | `http://localhost:8100/api/sales-people/` | List all sales people | `api_list_sales_people` |
| POST | `http://localhost:8100/api/sales-people/` | Create a sales person | `api_list_sales_people` |
| GET | `http://localhost:8100/api/sales-people/<id>/` | Show a sales person's details | `api_show_sales_person` |
| PUT | `http://localhost:8100/api/sales-people/<id>/` | Update a sales person | `api_show_sales_person` |
| DELETE | `http://localhost:8100/api/sales-people/<id>/` | Delete a sales person | `api_show_sales_person` |

<details>
<summary><strong>Example GET Outputs</strong></summary>

##### List all sales people:
```
{
	"sales_people": [
		{
			"id": 1,
			"name": "Shayne Buac",
			"employee_number": 912944225
		}
	]
}
```
##### Show a sales person's details:
```
{
	"id": 1,
	"name": "Shayne Buac",
	"employee_number": 912944225
}
```
</details>

<details>
<summary><strong>Example POST Input and Output</strong></summary>

##### Input:
```
{
	"name": "Shayne Buac",
	"employee_number": 912944225
}
```

##### Output:
```
{
	"id": 1,
	"name": "Shayne Buac",
	"employee_number": 912944225
}
```

</details>

<details><summary><strong>Example DELETE Output</strong></summary>
<br>

```
{
	"deleted": true
}
```
</details>

#### Sales
| Method | URL | Action | View |
| ------ | ------ | ------ | ------ |
| GET | `http://localhost:8100/api/sales/` | List all sales | `api_list_sales` |
| POST | `http://localhost:8100/api/sales/` | Create a sale | `api_list_sales` |
| GET | `http://localhost:8100/api/sales/<id>/` | Show a sale's details | `api_show_sale` |
| PUT | `http://localhost:8100/api/sales/<id>/` | Update a sale | `api_show_sale` |
| DELETE | `http://localhost:8100/api/sales/<id>/` | Delete a sale | `api_show_sale` |

<details>
<summary><strong>Example GET Outputs</strong></summary>

##### List all sales:
```
{
	"sales": [
		{
			"href": "/api/sales/1/",
			"id": 1,
			"price": 20000,
			"automobile": {
				"import_href": "/api/automobiles/J098DFASJ90/",
				"vin": "J098DFASJ90"
			},
			"sales_person": {
				"id": 2,
				"name": "Shayne Buac",
				"employee_number": 912944225
			},
			"customer": {
				"id": 2,
				"name": "Hack Reactor",
				"address": "119 Nueces St, Austin, TX 78701",
				"phone_number": "720-615-0225"
			}
		}
	]
}
```
##### Show a sale's details:
```
{
	"href": "/api/sales/1/",
	"id": 1,
	"price": 20000,
	"automobile": {
		"import_href": "/api/automobiles/J098DFASJ90/",
		"vin": "J098DFASJ90"
	},
	"sales_person": {
		"id": 2,
		"name": "Shayne Buac",
		"employee_number": 912944225
	},
	"customer": {
		"id": 2,
		"name": "Hack Reactor",
		"address": "119 Nueces St, Austin, TX 78701",
		"phone_number": "720-615-0225"
	}
}
```
</details>

<details>
<summary><strong>Example POST Input and Output</strong></summary>

##### Input:
```
{
	"price": 20000,
	"automobile": "J098DFASJ90",
	"sales_person": 912944225,
	"customer": 2
}
```

##### Output:
```
{
	"href": "/api/sales/1/",
	"id": 1,
	"price": 20000,
	"automobile": {
		"import_href": "/api/automobiles/J098DFASJ90/",
		"vin": "J098DFASJ90"
	},
	"sales_person": {
		"id": 2,
		"name": "Shayne Buac",
		"employee_number": 912944225
	},
	"customer": {
		"id": 2,
		"name": "Hack Reactor",
		"address": "119 Nueces St, Austin, TX 78701",
		"phone_number": "720-615-0225"
	}
}
```

</details>

<details><summary><strong>Example DELETE Output</strong></summary>
<br>

```
{
	"deleted": true
}
```
</details>

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
