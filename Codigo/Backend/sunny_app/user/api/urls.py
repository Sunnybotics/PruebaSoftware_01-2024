from django.urls import path

from user.api.views import *

urlpatterns = [
    # URL pattern for user registration
    path('register/', UsersRegisterAPIView.as_view(), name='register'),

    # URL pattern for user login
    path('login/', UsersLoginAPIView.as_view(), name='login')
]
