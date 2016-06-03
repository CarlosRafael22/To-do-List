from django.db import models
from django.contrib.auth.models import User
from oauth2_provider.models import Application
from django.db.models.signals import post_save

# Create your models here.

# class User(User):

# 	def __str__(self):
# 		self.username


# def create_auth_client(sender, instance=None, created=False, **kwargs):
#     """
#     Intended to be used as a receiver function for a `post_save` signal 
#     on a custom User model
#     Creates client_id and client_secret for authenticated users
#     """
#     if created:
#         Application.objects.create(user=instance, 
#                                    client_type=Application.CLIENT_CONFIDENTIAL,
#                                    authorization_grant_type=Application.GRANT_PASSWORD)

# post_save.connect(create_auth_client, sender=User)

class ToDoList(models.Model):
	
	author = models.ForeignKey(User)
	title = models.CharField(max_length=40)

	def __str__(self):
		return self.title

class Task(models.Model):

	toDoList = models.ForeignKey(ToDoList, related_name='tasks')
	author = models.ForeignKey(User)
	description = models.CharField(max_length=200)
	deadline = models.DateTimeField()
	done = models.BooleanField(default=False)

	def __str__(self):
		return self.description

class Comment(models.Model):
	content = models.TextField()
	author = models.ForeignKey(User)
	task = models.ForeignKey(Task, related_name='comments')

	def __str__(self):
		return self.content

