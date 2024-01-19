from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from datum_table.api.serializers import DatumTableSerializer, DatumTableViewSerializer
from db.models import DatumTable


class DataTableAPIView(APIView):
    """
    API view for retrieving all data from the DatumTable model.

    Methods:
    - get(request): Retrieve and return all data from DatumTable.
    """

    def get(self, request):
        """
        Retrieve all data from DatumTable model.

        Parameters:
        - request: The HTTP request.

        Returns:
        Response: Serialized data in the response with HTTP 200 OK status.
        """
        # Retrieve all data from DatumTable model
        data = DatumTable.objects.all()

        # Serialize the data using DatumTableViewSerializer
        serializer = DatumTableViewSerializer(data, many=True)

        # Return the serialized data in the response
        return Response(serializer.data, status=status.HTTP_200_OK)


class CreateDataTableAPIView(APIView):
    """
    API view for creating new data in the DatumTable model.

    Methods:
    - post(request): Create and save new data in the DatumTable model.
    """
    message = {'message': 'Data Generated Successfully'}

    def post(self, request):
        """
        Deserialize and validate the incoming data using DatumTableSerializer,
        then save the validated data to the database.

        Parameters:
        - request: The HTTP request containing the data to be created.

        Returns:
        Response: Success message in the response with HTTP 201 Created status.
        """
        # Deserialize and validate the incoming data using DatumTableSerializer
        serializer = DatumTableSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Save the validated data to the database
        serializer.save()

        # Return a success message in the response
        return Response(self.message, status=status.HTTP_201_CREATED)
