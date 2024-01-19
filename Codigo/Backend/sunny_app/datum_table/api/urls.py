from django.urls import path

from datum_table.api.views import *

urlpatterns = [
    # URL pattern for retrieving data from DataTableAPIView
    path('', DataTableAPIView.as_view(), name='data_table'),

    # URL pattern for creating data using CreateDataTableAPIView
    path('create_data/', CreateDataTableAPIView.as_view(), name='create_data_table')
]
