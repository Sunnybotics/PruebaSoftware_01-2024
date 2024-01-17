from django.urls import path
from .views import *

app_name = "users"

urlpatterns = [
    path("create/", UserCreateAPIView.as_view(), name="user_create"),
]