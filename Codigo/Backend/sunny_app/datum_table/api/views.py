from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from datum_table.api.serializers import DatumTableSerializer, DatumTableViewSerializer
from db.models import DatumTable

class DataTableAPIView(APIView):
    def get(self, request):
        # Retrieve all data from DatumTable model
        data = DatumTable.objects.all()

        # Serialize the data using DatumTableViewSerializer
        serializer = DatumTableViewSerializer(data, many=True)

        # Return the serialized data in the response
        return Response(serializer.data, status=status.HTTP_200_OK)

class CreateDataTableAPIView(APIView):
    message = {'message': 'Data Generated Successfully'}

    def post(self, request):
        # Deserialize and validate the incoming data using DatumTableSerializer
        serializer = DatumTableSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Save the validated data to the database
        serializer.save()

        # Return a success message in the response
        return Response(self.message, status=status.HTTP_201_CREATED)
