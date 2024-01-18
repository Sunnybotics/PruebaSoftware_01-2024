from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .serializers import DataItemSerializer
from .models import DataItem
from datetime import datetime, timedelta
import random


class CreateAPIView(generics.CreateAPIView):
    """
    Creación de fecha consecutiva y valor aleatorio
    """
    serializer_class = DataItemSerializer

    def create(self, request, *args, **kwargs):
        past_date_str = request.data.get("fecha")
        print(past_date_str)

        # Verifica si la fecha_anterior es None o está vacía
        if not past_date_str:
            return Response(
                {"error": "Past date not found"}, status=status.HTTP_404_NOT_FOUND
            )

        try:
            past_date = datetime.strptime(past_date_str, "%d/%m/%Y")
            print(past_date)
        except ValueError:
            return Response(
                {"error": "Incorrect date format. Must be dd/mm/yyyy."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        new_date = past_date + timedelta(days=1)
        new_value = round(random.uniform(24.0, 29.9), 1)

        nuevo_item = {
            "fecha": new_date.strftime("%d/%m/%Y"),
            "valor": new_value,
        }

        serializer = self.get_serializer(data=nuevo_item)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        return Response(serializer.data, status=status.HTTP_201_CREATED)

class DataListAPIView(generics.ListAPIView):
    """
    Lista de DataItem con el metodo GET
    """

    serializer_class = DataItemSerializer
    queryset = DataItem.objects.all()