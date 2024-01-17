from rest_framework import serializers
from .models import CustomUser


class CustomUserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    user_name = serializers.CharField(required=True)
    password = serializers.CharField(min_length=4, write_only=True)

    
    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'first_name', 'last_name']