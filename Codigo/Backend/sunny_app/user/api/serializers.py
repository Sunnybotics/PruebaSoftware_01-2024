import re

from rest_framework import serializers

from db.models import User

class UserRegisterSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=100)
    email = serializers.CharField(max_length=100)
    userpassword = serializers.CharField(max_length=200)
    confirmpassword = serializers.CharField(max_length=200)

    def validate(self, data):
        # Check if passwords match
        if data["userpassword"] != data["confirmpassword"]:
            raise serializers.ValidationError("Passwords Do Not Match")

        # Validate email format using a regular expression
        pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        if not re.match(pattern, data["email"]):
            raise serializers.ValidationError("Invalid Email")

        return data

    def create(self, validated_data):
        # Remove the confirmpassword field before creating a user
        validated_data.pop("confirmpassword")
        
        # Create a new User instance, set the password, and save to the database
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
        # Check if the provided email and password match a user in the database
        user = User.objects.filter(email=data["email"]).first()
        if user and user.verify_password(data["userpassword"]):
            return data
        raise serializers.ValidationError("Invalid credentials")

    def create(self, validated_data):
        return validated_data
