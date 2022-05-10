from django.urls import path
from . import views

urlpatterns = [
	path('', views.apiOverview, name="api-overview"),
	path('product-list/', views.ProductsList, name="product-list"),
	path('product-detail/<str:pk>/', views.ProductsDetail, name="product-detail"),
	path('product-create/', views.ProductsCreate, name="product-create"),

	path('product-update/<str:pk>/', views.ProductsUpdate, name="product-update"),
	path('product-delete/<str:pk>/', views.ProductsDelete, name="product-delete"),
]
