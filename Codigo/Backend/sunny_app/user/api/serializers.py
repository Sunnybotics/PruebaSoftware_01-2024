import re

from rest_framework import serializers

from db.models import User


class UserRegisterSerializer(serializers.Serializer):
    username = serializers.CharField(max_length= 100)
    email = serializers.CharField(max_length = 100)
    userpassword = serializers.CharField(max_length=200)
    confirmpassword = serializers.CharField(max_length = 200)

    
    def validate(self, data):
        if data["userpassword"] != data["confirmpassword"]:
            raise serializers.ValidationError("Passwords Do Not Match")

        pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        if not re.match(pattern, data["email"]):
            raise serializers.ValidationError("Invalid Email")

        return data 

    def create(self, validated_data):
        validated_data.pop("confirmpassword")
        user = User.objects.create(
            username=validated_data["username"], 
            email=validated_data["email"],
        )
        user.set_password(validated_data["userpassword"])
        user.save()
        return user

class UserLoginSerializer(serializers.Serializer):
    email = serializers.CharField(max_length=100)
    userpassword = serializers.CharField(max_length=200)

    def validate(self, data):
        user = User.objects.filter(email=data["email"]).first()
        if user and user.verify_password(data["userpassword"]):
            return data
        raise serializers.ValidationError("Invalid credentials")

    def create(self, validated_data):
        return validated_data


class UserViewSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        exclude = ['userpassword']

    def to_representation(self, instance):

        return {
            "username" : instance.username, 
            "email" : instance.email
        }
