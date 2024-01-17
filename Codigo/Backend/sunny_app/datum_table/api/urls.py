from django.urls import path

from datum_table.api.views import *

urlpatterns = [
    path('', DataTableAPIView.as_view(), name = 'data_table'),
    path('create_data/', CreateDataTableAPIView.as_view(), name = 'create_data_table')
    ]