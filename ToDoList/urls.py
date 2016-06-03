"""ToDoList URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin
from website import views
from rest_framework.urlpatterns import format_suffix_patterns
from django.core.context_processors import csrf
from django.views.decorators.csrf import csrf_exempt
# from rest_framework import routers

# router = routers.DefaultRouter()
# router.register(r'users', views.UserList, 'list')


urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', views.home_view),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^users/$', views.UserList.as_view()),
    url(r'^users/(?P<pk>[0-9]+)/$', views.UserDetail.as_view()),
    url(r'^lists/$', views.ToDoListList.as_view()),
    url(r'^lists/(?P<pk>[0-9]+)/$', views.ToDoListDetail.as_view()),
    url(r'^tasks/$', views.TaskList.as_view()),
    url(r'^tasks/(?P<pk>[0-9]+)/$', views.TaskDetail.as_view()),
    url(r'^o/', include('oauth2_provider.urls', namespace='oauth2_provider')),
    url(r'^sign_up/$', views.SignUp.as_view(), name="sign_up"),
#     url(r'^api/', include(router.urls)),
]

urlpatterns = format_suffix_patterns(urlpatterns)


# access token: ztFqMhmC6Ao9ZQhoOHeGkmp9uTjCr4