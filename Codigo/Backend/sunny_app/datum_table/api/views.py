from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from datum_table.api.serializers import DatumTableSerializer, DatumTableViewSerializer

from db.models import DatumTable

class DataTableAPIView(APIView):
    def get(self, request):
        data = DatumTable.objects.all()
        serializer = DatumTableViewSerializer(data, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class CreateDataTableAPIView(APIView):
    message = {'message': 'Data Generated Succesfully'}

    def post(self, request):
        serializer = DatumTableSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(self.message, status=status.HTTP_201_CREATED)
