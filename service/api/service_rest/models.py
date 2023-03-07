from django.db import models
from django.urls import reverse

class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=100, unique=True)
    vin = models.CharField(max_length=17, unique=True)

    def __str__(self):
        return self.vin


class Technician(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.IntegerField()

    def __str__(self):
        return self.name

    def get_api_url(self):
        return reverse("api_show_technician", kwargs={"employee_number": self.employee_number})



class ServiceAppointment(models.Model):
    vin = models.CharField(max_length=17)
    auto_owner = models.CharField(max_length=100)
    appointment_date = models.DateField()
    appointment_time = models.TimeField()
    technician = models.ForeignKey(
        Technician,
        related_name="service_appointments",
        on_delete=models.SET("TECHNICIAN NEEDED")
    )
    service_reason = models.TextField()

    @property
    def status(self):
        return "SCHEDULED"

    def __str__(self):
        return f"{self.technician} - {self.appointment_date} {self.appointment_time}"
