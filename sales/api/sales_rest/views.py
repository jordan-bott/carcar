from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

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
    properties = ["price"]
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "sales_person": SalesPersonEncoder(),
        "customer": CustomerEncoder(),
    }


@require_http_methods(["GET", "POST"])
def api_sales_people(request):
    if request.method == "GET":
        sales_people = SalesPerson.objects.all()
        return JsonResponse(
            {"sales_people": sales_people},
            encoder=SalesPersonEncoder,
        )
    else:
        content = json.loads(request.body)
        sales_person = SalesPerson.objects.create(**content)
        return JsonResponse(
            sales_person,
            encoder=SalesPersonEncoder,
            safe=False,
        )


@require_http_methods(["GET", "DELETE"])
def api_sales_person(request, id):
    try:
        sales_person = SalesPerson.objects.get(id=id)
    except SalesPerson.DoesNotExist:
        return JsonResponse(
            {"message": "That sales person does not exist. Maybe try a different id?"},
            status=404,
        )
    if request.method == "GET":
        return JsonResponse(
            sales_person,
            encoder=SalesPersonEncoder,
            safe=False,
        )
    else:
        count, _ = SalesPerson.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def api_customers(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerEncoder,
        )
    else:
        content = json.loads(request.body)
        sales_person = Customer.objects.create(**content)
        return JsonResponse(
            sales_person,
            encoder=CustomerEncoder,
            safe=False,
        )


@require_http_methods(["GET", "DELETE"])
def api_customer(request, id):
    try:
        customer = Customer.objects.get(id=id)
    except Customer.DoesNotExist:
        return JsonResponse(
            {"message": "That customer does not exist. Maybe try a different id?"},
            status=404,
        )
    if request.method == "GET":
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False,
        )
    else:
        count, _ = Customer.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})
