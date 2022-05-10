from django.shortcuts import render
from django.http import JsonResponse, request

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ProductsSerializer

from .models import Products
# Create your views here.

def navigate(request):
	return render(request, 'index.html')

@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'List':'/product-list/',
		'Detail View':'/product-detail/<str:pk>/',
		'Create':'/product-create/',
		'Update':'/product-update/<str:pk>/',
		'Delete':'/product-delete/<str:pk>/',
		}

	return Response(api_urls)

@api_view(['GET'])
def ProductsList(request):
	Product = Products.objects.all().order_by('-id')
	serializer = ProductsSerializer(Product, many=True)
	return Response(serializer.data)

@api_view(['GET'])
def ProductsDetail(request, pk):
	Product = Products.objects.get(id=pk)
	serializer = ProductsSerializer(Product, many=False)
	return Response(serializer.data)


@api_view(['POST'])
def ProductsCreate(request):
	serializer = ProductsSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['POST'])
def ProductsUpdate(request, pk):
	Product = Products.objects.get(id=pk)
	serializer = ProductsSerializer(instance=Product, data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)


@api_view(['DELETE'])
def ProductsDelete(request, pk):
	Product = Products.objects.get(id=pk)
	Product.delete()

	return Response('Item succsesfully delete!')



