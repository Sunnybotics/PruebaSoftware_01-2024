import random
from datetime import timedelta

from rest_framework import serializers

from db.models import DatumTable

MAX_VALUE = 29.9
MIN_VALUE = 24.0

class DatumTableSerializer(serializers.Serializer):


    def create(self, validated_data):

        latest_data_date = DatumTable.objects.latest('datum_date').datum_date

        data_table = DatumTable.objects.create(
            datum_value = round(random.uniform(MIN_VALUE, MAX_VALUE), 1),
            datum_date = latest_data_date + timedelta(days=1)
        )
        data_table.save()
        return data_table

class DatumTableViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = DatumTable

    def to_representation(self, instance):

        return {
            "Date" : instance.datum_date, 
            "Value" : instance.datum_value
        }

