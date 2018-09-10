from django.db import models

class Person(models.Model):
    first_name = models.CharField(max_length=128)
    last_name = models.CharField(max_length=128)
    rating = models.FloatField(default=1.0)
    num_ratings = models.IntegerField(default=0)
    id = models.AutoField(primary_key=True)


class Post(models.Model):
    person_id = models.ForeignKey('Person', on_delete=models.CASCADE)
    id = models.AutoField(primary_key=True)
    date = models.DateField()
