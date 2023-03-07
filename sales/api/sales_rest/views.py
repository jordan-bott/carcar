from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from .models import SalesPerson, Customer, Sale, AutomobileVO
from .encoders import (
    SalesPersonEncoder,
    CustomerEncoder,
    SaleListEncoder,
    SaleDetailEncoder,
)


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


@require_http_methods(["GET", "POST"])
def api_sales(request):
    if request.method == "GET":
        sales = Sale.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SaleListEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            auto_vin = content["automobile"]
            auto = AutomobileVO.objects.get(vin=auto_vin)
            content["automobile"] = auto
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid automobile vin. Try again buddy!"},
                status=400,
            )
        try:
            sales_person = SalesPerson.objects.get(id=content["sales_person_id"])
            content["sales_person"] = sales_person
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid sales person id. Try again buddy!"},
                status=400,
            )
        try:
            customer = Customer.objects.get(id=content["customer_id"])
            content["customer"] = customer
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid customer id. Try again buddy!"},
                status=400,
            )
        sale = Sale.objects.create(**content)
        return JsonResponse(
            sale,
            encoder=SaleDetailEncoder,
            safe=False,
        )


@require_http_methods(["GET", "DELETE"])
def api_sale(request, id):
    try:
        sale = Sale.objects.get(id=id)
    except Sale.DoesNotExist:
        return JsonResponse(
            {"message": "That sale does not exist. Maybe try a different id?"},
            status=404,
        )
    if request.method == "GET":
        return JsonResponse(
            sale,
            encoder=SaleDetailEncoder,
            safe=False,
        )
    else:
        count, _ = Sale.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})
