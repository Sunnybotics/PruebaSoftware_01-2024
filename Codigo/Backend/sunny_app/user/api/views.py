import jwt  
import datetime  

# REST framework
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from sunny_app.settings import SECRET_KEY

# Serializers
from user.api.serializers import UserRegisterSerializer, UserLoginSerializer

# Model
from db.models import User

# Constant representing the name of the token
TOKEN_NAME = "user_token"

# Variable to store the token status, initialized to False
token = False

# API view for user registration
class UsersRegisterAPIView(APIView):
    # Message to be returned upon successful user creation
    message = {'message': 'User created successfully'}

    # HTTP POST method for user registration
    def post(self, request):
        # Creating an instance of UserRegisterSerializer with the request data
        serializer = UserRegisterSerializer(data=request.data)
        
        # Validating the serializer, and if validation fails, raising an exception
        serializer.is_valid(raise_exception=True)
        
        # Saving the serializer data to create a new user
        serializer.save()
        
        # Returning a success response with the message upon successful user creation
        return Response(self.message, status=status.HTTP_201_CREATED)

# API view for user login
class UsersLoginAPIView(APIView):
    # HTTP POST method for user login
    def post(self, request):
        # Creating an instance of UserLoginSerializer with the request data
        serializer = UserLoginSerializer(data=request.data)
        
        # Validating the serializer, and if validation fails, raising an exception
        serializer.is_valid(raise_exception=True)
        
        # Saving the serializer data, assuming it handles authentication
        
        # Retrieving the user with the provided email from the database
        user = User.objects.filter(email=request.data["email"]).first()
        
        # Creating the payload content for the JWT (JSON Web Token)
        payload_content = {
            "username": user.username,
            "exp": datetime.datetime.now() + datetime.timedelta(days=1),
            "iat": datetime.datetime.now()
        }
        
        # Encoding the payload content into a JWT using the SECRET_KEY and HS256 algorithm
        token = jwt.encode(payload_content, SECRET_KEY, algorithm="HS256")
        
        # Returning a response with the generated token upon successful login
        return Response({
            "token": token
        }, status=status.HTTP_202_ACCEPTED)