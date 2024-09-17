import re
from rest_framework import serializers
from db.models import User


class UserRegisterSerializer(serializers.Serializer):
    """
    Serializer for user registration.

    Fields:
    - username (CharField): User's username.
    - email (CharField): User's email address.
    - userpassword (CharField): User's password.
    - confirmpassword (CharField): Confirmation of the user's password.

    Methods:
    - validate(data): Custom validation to ensure password match and valid email format.
    - create(validated_data): Create a new User instance, set the password, and save to the database.
    """
    username = serializers.CharField(max_length=100)
    email = serializers.CharField(max_length=100)
    userpassword = serializers.CharField(max_length=200)
    confirmpassword = serializers.CharField(max_length=200)

    def validate(self, data):
        """
        Custom validation to ensure that passwords match and the email format is valid.

        Parameters:
        - data (dict): The input data containing username, email, passwords, etc.

        Returns:
        dict: The validated data if validation passes.

        Raises:
        serializers.ValidationError: If passwords do not match or the email format is invalid.
        """
        # Check if passwords match
        if data["userpassword"] != data["confirmpassword"]:
            raise serializers.ValidationError("Passwords Do Not Match")

        # Validate email format using a regular expression
        pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        if not re.match(pattern, data["email"]):
            raise serializers.ValidationError("Invalid Email")

        return data

    def create(self, validated_data):
        """
        Create a new User instance, set the password, and save it to the database.

        Parameters:
        - validated_data (dict): The validated data after passing validation.

        Returns:
        User: The newly created User instance.
        """
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
    """
    Serializer for user login.

    Fields:
    - email (CharField): User's email address.
    - userpassword (CharField): User's password.

    Methods:
    - validate(data): Custom validation to check if the provided email and password match a user in the database.
    - create(validated_data): Simply return the validated data.
    """
    email = serializers.CharField(max_length=100)
    userpassword = serializers.CharField(max_length=200)

    def validate(self, data):
        """
        Custom validation to check if the provided email and password match a user in the database.

        Parameters:
        - data (dict): The input data containing email and password.

        Returns:
        dict: The validated data if the credentials are valid.

        Raises:
        serializers.ValidationError: If the provided credentials are invalid.
        """
        # Check if the provided email and password match a user in the database
        user = User.objects.filter(email=data["email"]).first()
        if user and user.verify_password(data["userpassword"]):
            return data
        raise serializers.ValidationError("Invalid credentials")

    def create(self, validated_data):
        """
        Simply return the validated data.

        Parameters:
        - validated_data (dict): The validated data after passing validation.

        Returns:
        dict: The same validated data.
        """
        return validated_data
