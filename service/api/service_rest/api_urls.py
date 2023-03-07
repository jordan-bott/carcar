from django.urls import path

from .api_views import api_list_service_appointments



urlpatterns = [
    path("/all/", api_list_service_appointments, name="api_list_all_services"),
]
