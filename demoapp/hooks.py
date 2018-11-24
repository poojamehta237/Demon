# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from . import __version__ as app_version

app_name = "demoapp"
app_title = "Demon"
app_publisher = "Pooja"
app_description = "DemonD"
app_icon = "octicon octicon-file-directory"
app_color = "orange"
app_email = "mehtap014@gmail.com"
app_license = "MIT"

# Includes in <head>
# ------------------
fixtures = ["Custom Field", "Property Setter","Role","Print Format", "Letter Head", "Workflow State", "Workflow Action", "Workflow", "Address Template","Web Page"]
# include js, css files in header of desk.html
# app_include_css = "/assets/demoapp/css/demoapp.css"
# app_include_js = "/assets/demoapp/js/demoapp.js"

app_include_css = "/assets/css/mapview.min.css"
app_include_js = "/assets/js/demoapp.min.js"

# include js, css files in header of web template
# web_include_css = "/assets/demoapp/css/demoapp.css"
# web_include_js = "/assets/demoapp/js/demoapp.js"

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Website user home page (by function)
# get_website_user_home_page = "demoapp.utils.get_home_page"

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "demoapp.install.before_install"
# after_install = "demoapp.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config
# notification_config = "demoapp.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

doctype_js = {
	"Item":["demoapp/custom_item/custom_item.js"],
	}
# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"demoapp.tasks.all"
# 	],
# 	"daily": [
# 		"demoapp.tasks.daily"
# 	],
# 	"hourly": [
# 		"demoapp.tasks.hourly"
# 	],
# 	"weekly": [
# 		"demoapp.tasks.weekly"
# 	]
# 	"monthly": [
# 		"demoapp.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "demoapp.install.before_tests"

# Overriding Whitelisted Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "demoapp.event.get_events"
# }

