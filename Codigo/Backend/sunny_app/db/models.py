# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models
from django.contrib.auth.hashers import make_password, check_password


# Define the DatumTable model
class DatumTable(models.Model):
    # Field for the date associated with the data
    datum_date = models.DateField()

    # Field for the numerical value associated with the date
    datum_value = models.FloatField(blank=True, null=True)

    class Meta:
        # Indicate that this model is not managed by Django
        managed = False

        # Set the database table name explicitly
        db_table = 'datum_table'


# Define the User model
class User(models.Model):
    # Field for the username of the user
    username = models.CharField(max_length=100, blank=True, null=True)

    # Field for the email address of the user
    email = models.CharField(max_length=100, blank=True, null=True)

    # Field for storing the hashed user password
    userpassword = models.CharField(max_length=200, blank=True, null=True)

    # Method to set the password for the user
    def set_password(self, raw_password):
        # Use Django's make_password function to hash the raw password
        self.userpassword = make_password(raw_password)

    # Method to verify a raw password against the stored hashed password
    def verify_password(self, raw_password):
        # Use Django's check_password function to verify the password
        return check_password(raw_password, self.userpassword)

    class Meta:
        # Indicate that this model is not managed by Django
        managed = False

        # Set the database table name explicitly
        db_table = 'user'
