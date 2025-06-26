from django.contrib import admin
from .models import Event

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('event_title', 'event_date', 'event_time', 'created_at')
    list_filter = ('event_date',)
    search_fields = ('event_title', 'event_description')
    readonly_fields = ('created_at',)

    # Optional: For better admin layout
    fieldsets = (
        (None, {
            'fields': ('event_title', 'event_description', 'event_date', 'event_time', 'register_link')
        }),
        ('Media', {
            'fields': ('event_banner',)
        }),
        ('Timestamps', {
            'fields': ('created_at',)
        }),
    )
