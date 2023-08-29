from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_employees_list),
    path('add-employee/', views.add_employee)
]