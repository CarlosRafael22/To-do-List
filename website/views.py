from rest_framework import generics, permissions
from django.shortcuts import render

from .serializers import UserSerializer, ToDoListSerializer, TaskSerializer, CommentSerializer, SignUpSerializer
from .models import User, ToDoList, Task, Comment
from website.permissions import IsOwnerOrReadOnly
from website.permissions import IsAuthenticatedOrCreate

from django.contrib.auth import login
from social.apps.django_app.utils import psa
from website.tools import get_access_token


class SignUp(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = SignUpSerializer
    permission_classes = (IsAuthenticatedOrCreate,)


class UserList(generics.ListCreateAPIView):
    model = User
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveAPIView):
    model = User
    serializer_class = UserSerializer


class ToDoListList(generics.ListCreateAPIView):
    model = ToDoList
    serializer_class = ToDoListSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def list(self,request,*args,**kwargs):
        print(request.user)
        return super(ToDoListList,self).list(request,*args,**kwargs)

class ToDoListDetail(generics.RetrieveUpdateDestroyAPIView):
    model = ToDoList
    serializer_class = ToDoListSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,IsOwnerOrReadOnly)

class TaskList(generics.ListCreateAPIView):
    model = Task
    serializer_class = TaskSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class TaskDetail(generics.RetrieveUpdateDestroyAPIView):
    model = Task
    serializer_class = TaskSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,IsOwnerOrReadOnly)


class CommentList(generics.ListCreateAPIView):
    model = Comment
    serializer_class = CommentSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    model = Comment
    serializer_class = CommentSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,IsOwnerOrReadOnly)


########################### HOME VIEW ###########################
def home_view(request):
    return render(request,'home.html')
########################### END VIEW ########################### 

# def login_api(request):

#     # if 'username' in request.POST:
#     print(request.POST);
#     if 'username' in request.POST:
#         username = request.POST['username']
#     else:
#         username = False
#         print(request.POST)
#     username = request.POST['username']
#     password = request.POST['password']

#     print(username)
#     user = authenticate(username = username, password = password)

#     if  user.is_authenticated():
#         login(request, user)
#     return render(request,'home.html')


@psa('social:complete')
def register_by_access_token(request, backend):
 
    token = request.GET.get('access_token')
    # here comes the magic
    user = request.backend.do_auth(token)
    if user:
        login(request, user)
        # that function will return our own
        # OAuth2 token as JSON
        # Normally, we wouldn't necessarily return a new token, but you get the idea
        return get_access_token(user)
    else:
        # If there was an error... you decide what you do here
        return HttpResponse("error")




