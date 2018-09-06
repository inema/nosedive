# Generated by Django 2.1 on 2018-09-05 19:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('date', models.DateField()),
                ('person_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Person')),
            ],
        ),
    ]