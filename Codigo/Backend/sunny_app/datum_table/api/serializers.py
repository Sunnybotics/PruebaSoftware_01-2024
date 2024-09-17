import random
from datetime import timedelta

from rest_framework import serializers

from db.models import DatumTable

# Constants for the maximum and minimum values of DatumTable
MAX_VALUE = 29.9
MIN_VALUE = 24.0


class DatumTableSerializer(serializers.Serializer):
    """
    Serializer for the DatumTable model.
    """

    def create(self, validated_data):
        """
        Create a new instance of DatumTable.

        Args:
            validated_data (dict): Validated data for creating the instance.

        Returns:
            DatumTable: The created DatumTable instance.
        """
        # Get the most recent date from existing data
        latest_data_date = DatumTable.objects.latest('datum_date').datum_date

        # Create a new instance of DatumTable with a random value and an incremented date
        data_table = DatumTable.objects.create(
            datum_value=round(random.uniform(MIN_VALUE, MAX_VALUE), 1),
            datum_date=latest_data_date + timedelta(days=1)
        )

        # Save the instance to the database
        data_table.save()
        return data_table


class DatumTableViewSerializer(serializers.ModelSerializer):
    """
    Serializer to represent instances of DatumTable.
    """

    class Meta:
        model = DatumTable

    def to_representation(self, instance):
        """
        Convert an instance of DatumTable into a serialized representation.

        Args:
            instance (DatumTable): The instance of DatumTable.

        Returns:
            dict: Serialized representation of the instance.
        """
        # Return a dictionary with the dates and values of DatumTable
        return {
            "Date": instance.datum_date,
            "Value": instance.datum_value
        }
