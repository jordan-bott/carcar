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


class SaleEncoder(ModelEncoder):
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
