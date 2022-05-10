from django.db import models

# Create your models here.


class Products(models.Model):
    product = models.CharField(max_length=250)
    quantity = models.CharField(max_length=10)

    def __str__(self):
        return "{} {}".format(self.product, self.quantity)
