from django.db import models

class Event(models.Model):
    event_title = models.CharField(max_length=200)
    event_description = models.TextField()
    event_date = models.DateField()
    event_time = models.TimeField()
    event_banner = models.ImageField(upload_to='event_banners/')
    register_link = models.URLField(max_length=500)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.event_title
