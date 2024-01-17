from .serializers import *
from rest_framework.response import Response
from rest_framework import generics, status


class UserCreateAPIView(generics.CreateAPIView):
    """
    Crear un nuevo usuario si sus datos son válidos
    """
    serializer_class = CustomUserSerializer

    def post(self, request, format="json"):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class UserListAPIView(generics.ListAPIView):
    """
    Lista de usuarios usando el método GET
    """
    serializer_class = CustomUserSerializer
    queryset = CustomUser.objects.all()