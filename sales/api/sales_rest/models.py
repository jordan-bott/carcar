from django.db import models
from django.urls import reverse


class SalesPerson(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.PositiveIntegerField(unique=True)

    def get_api_url(self):
        return reverse("api_sales_person", kwargs={"id": self.id})


class Customer(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=12)

    def get_api_url(self):
        return reverse("api_customer", kwargs={"id": self.id})


class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    vin = models.CharField(max_length=17, unique=True)


class Sale(models.Model):
    price = models.PositiveIntegerField()
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="sales",
        on_delete=models.CASCADE,
    )
    sales_person = models.ForeignKey(
        SalesPerson,
        related_name="sales",
        on_delete=models.PROTECT,
    )
    customer = models.ForeignKey(
        Customer,
        related_name="sales",
        on_delete=models.PROTECT,
    )

    def get_api_url(self):
        return reverse("api_sale", kwargs={"id": self.id})

    class Meta:
        ordering = ("sales_person", "customer", "price")
