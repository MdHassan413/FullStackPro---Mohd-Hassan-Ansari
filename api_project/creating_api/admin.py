from django.contrib import admin
from .models import Products
# Register your models here.

class ProductsAdmin(admin.ModelAdmin):
    list_display = ('product','quantity')
    list_display = ['product','quantity']
    list_editable = ['quantity']
    # list_filter = ['product','quantity']
    list_per_page = 10
    search_fields = ['product','quantity']

admin.site.register(Products, ProductsAdmin)
