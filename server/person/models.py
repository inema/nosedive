from django.db import models

# Create your models here.
class Person(models.Model):
    first_name = models.CharField(max_length=128)
    middle_name = models.CharField(max_length=128)
    last_name = models.CharField(max_length=128)
    rating_list = models.CharField(max_length=128)
    id = models.AutoField(primary_key=True)
