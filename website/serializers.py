from rest_framework import serializers
from .models import User,ToDoList,Task,Comment
from django.contrib.auth.models import User
from oauth2_provider.models import Application


class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ('id', 'username', 'password', 'email')

	# TEM QUE FAZER ISSO PQ SENAO QUANDO FOR SALVAR UM USUARIO NOVO PELA API, USANDO USERRESOURCE.SAVE() NO ANGULAR
	# ELE VAI SALVAR A PASSWORD EM PLAIN TEXT O QUE O /ADMIN NAO VAI ACEITAR E VAI TER ESSE ERRO NO CAMPO PASSWORD NA PAGINA DO ADMIN:
	# Invalid password format or unknown hashing algorithm. Raw passwords are not stored, so there is no way to see this user's password, ...

	def restore_object(self, attrs, instance=None):
		user = super(UserSerializer, self).restore_object(attrs, instance)
		user.set_password(attrs['password'])
		return user
	# def create(self, validated_data):
 #        user = User(email=validated_data['email'], username=validated_data['username'])
 #        user.set_password(validated_data['password'])
 #        user.save()
 #        return user

	# def post_save(self,obj,created=False):
	# 	if created:
	# 		obj.set_password(obj.password)
	# 		obj.save()

class ToDoListSerializer(serializers.ModelSerializer):
	author = UserSerializer()
	class Meta:
		model = ToDoList
		fields = ('title', 'author')

class TaskSerializer(serializers.ModelSerializer):
	author = UserSerializer()
	toDoList = ToDoListSerializer()
	class Meta:
		model = Task
		fields = ('description', 'deadline', 'done', 'author', 'toDoList')

class CommentSerializer(serializers.ModelSerializer):
	author = UserSerializer()
	task = TaskSerializer()
	class Meta:
		model = Comment
		fields = ('content', 'author', 'task')


class SignUpSerializer(serializers.ModelSerializer):
	client_id = serializers.SerializerMethodField('get_client_id')
	client_secret = serializers.SerializerMethodField('get_client_secret')

	class Meta:
		model = User
		fields = ('username', 'password', 'email', 'client_id', 'client_secret')
		write_only_fields = ('password',)

	def get_client_id(self, obj):
		return obj.application_set.first().client_id

	def get_client_secret(self, obj):
		return obj.application_set.first().client_secret