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

# POST endpoint for adding an employee to the database
@api_view(['POST'])
def add_employee(request):
    serializer = EmployeeSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response("Error: could not serialize data", status=status.HTTP_400_BAD_REQUEST)
    
# DELETE endpoint for deleting an employee
@api_view(['DELETE'])
def delete_employee(_, pk):
    employee = Employee.objects.get(pk=pk)
    if employee is not None:
        employee.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    else:
       return Response('Error: Employee does not exist in the list', status=status.HTTP_400_BAD_REQUEST)
    
# PUT endpoint for updating fields of an existing employee
@api_view(['PUT'])
def update_employee(request, pk):
    employee = Employee.objects.get(pk=pk)
    if employee is not None:
        serializer = EmployeeSerializer(employee, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response('Error: could not serialize data', status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response('Error: Employee does not exist in the list', status=status.HTTP_400_BAD_REQUEST)