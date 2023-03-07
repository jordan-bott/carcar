from django.shortcuts import render
from common.json import ModelEncoder
from django.views.decorators.http import require_http_methods
from .models import Technician, ServiceAppointment, AutomobileVO
import json
from django.http import JsonResponse

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "name",
        "employee_number"
    ]

class ServiceAppointmentEncoder(ModelEncoder):
    model = ServiceAppointment
    properties = [
        "status",
        "vin",
        "auto_owner",
        "appointment_date",
        "appointment_time",
        "technician",
        "service_reason",
        "id",
    ]
    encoders = {
        "technician": TechnicianEncoder(),
    }

    def get_extra_data(self, o):
        count = AutomobileVO.objects.filter(vin=o.vin).count()
        return {"vip_treatment": count > 0}



def api_list_technicians(request):
    pass

def api_show_technician(request):
    pass

@require_http_methods(["GET", "POST"])
def api_list_service_appointments(request):
    if request.method == "GET":
        services = ServiceAppointment.objects.all()
        return JsonResponse(
            {"services": services},
            encoder=ServiceAppointmentEncoder,
        )

def api_show_service_appointment(request):
    pass
