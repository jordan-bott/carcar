from django.urls import path
from .views import api_sales_people, api_sales_person, api_customers, api_customer


urlpatterns = [
    path("salespeople/", api_sales_people, name="api_sales_people"),
    path("salespeople/<int:id>/", api_sales_person, name="api_sales_person"),
    path("customers/", api_customers, name="api_customers"),
    path("customers/<int:id>/", api_customer, name="api_customer"),
]
