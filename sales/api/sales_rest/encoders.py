from common.json import ModelEncoder
from .models import SalesPerson, Customer, Sale, AutomobileVO


class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "name",
        "employee_number",
    ]


class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "name",
        "address",
        "phone_number",
    ]


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "import_href",
        "vin",
    ]


class SaleListEncoder(ModelEncoder):
    model = Sale
    properties = ["price"]

    def get_extra_data(self, o):
        return {
            "automobile": o.automobile.vin,
            "sales_person": o.sales_person.name,
            "customer": o.customer.name,
        }


class SaleDetailEncoder(ModelEncoder):
    model = Sale
    properties = [
        "price",
        "automobile",
        "sales_person",
        "customer",
    ]
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "sales_person": SalesPersonEncoder(),
        "customer": CustomerEncoder(),
    }
