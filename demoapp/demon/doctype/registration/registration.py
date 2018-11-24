# -*- coding: utf-8 -*-
# Copyright (c) 2018, Pooja and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe.utils import flt, cstr, cint
from frappe.model.naming import make_autoname
from frappe.handler import uploadfile
import json
from random import randrange, uniform

class Registration(Document):
	def upload_driver_photo(self,doctype,docname,filedata):
		photoUpload(doctype,docname,filedata)
		return uploadfile()

	def save_signature(self,doctype,docname,filedata):
		upload_sign(doctype,docname,filedata)
		return uploadfile()

def photoUpload(doctype,docname,filedata):
	data = {
	"from_form": 1,
	"doctype": doctype,
	"docname": docname,
	"filename": docname+".png",
	"filedata": filedata
	}
	for p in ["from_form", "doctype", "docname", "filename", "filedata"]:
		frappe.form_dict[p] = data.get(p)

def upload_sign(doctype,docname,filedata):
	print "-----------------------------------" 
	data = {
	"from_form": 1,
	"doctype": doctype,
	"docname": docname,
	"filename": docname+"-sign"+".png",
	"filedata":filedata
	}
	for i in ["from_form" , "doctype" ,"docname","filename","filedata"]:
		frappe.form_dict[i] = data.get(i)

# Find Latitude and Longitude
@frappe.whitelist()
def get_lat_lon(doc, method):
	# get and save latitude and langitude
	if not doc.lat or not doc.lon:
		from demoapp import get_latitude_longitude

		# Concate all address lines
		address = ""
		address_fields = ["address_line1", "city", "state", "country"]
		for field in address_fields:
			value = doc.get(field) if doc.get(field) else None
			if not value:
				continue

			# address += value + " " if field != "address_line2" else ""
			address += value + " "

		address = address.replace(" ", "+").lower()
		address = address[0:-1] if address[-1] == "+" else address
		if get_latitude_longitude(address):
			doc.lat, doc.lon = get_latitude_longitude(address)
		else:
			pass
			# frappe.msgprint("Unable to find latitude, longitude. Please enter it manually.")