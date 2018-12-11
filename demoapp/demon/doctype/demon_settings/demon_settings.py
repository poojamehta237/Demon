# -*- coding: utf-8 -*-
# Copyright (c) 2018, Pooja and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class DemonSettings(Document):
	pass

@frappe.whitelist()
def send_mail():
	print "==================sendmail"
	frappe.sendmail(
	recipients="prajapat.rahul0@gmail.com",
	sender=None,
	subject="Hello.................",
	delayed=False,
	template="new_message",
	args={
			"from": "Pookie..........",
			"message": "Wats Going on"
			},
	header=[('New Message'),'orange'])
