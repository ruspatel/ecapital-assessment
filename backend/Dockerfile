FROM python:3.10.2-slim-bullseye

ENV PYTHONUNBUFFERED=1

WORKDIR /backend

RUN pip install django django-cors-headers
RUN pip install django djangorestframework

COPY . . 

EXPOSE 8000
