from .serializers import *
from rest_framework.response import Response
from rest_framework import generics, status

class UserCreateAPIView(generics.CreateAPIView):
    serializer_class = CustomUserSerializer

    def post(self, request, format="json"):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)