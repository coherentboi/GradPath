# Generated by Django 4.1.3 on 2023-07-28 14:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='high_school_graduation_year',
            field=models.IntegerField(default=2024),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='profile',
            name='name',
            field=models.CharField(default='Temp Name', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='profile',
            name='school',
            field=models.CharField(default='Merivale High School', max_length=255),
            preserve_default=False,
        ),
    ]
