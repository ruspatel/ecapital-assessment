from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import Employee
from .serializers import EmployeeSerializer
from rest_framework.response import Response
from rest_framework import status

# GET endpoint for obtaining a list of employees
@api_view(['GET'])
def get_employees_list(_):
    grocery_lists = Employee.objects.all()
    serializer = EmployeeSerializer(grocery_lists, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)