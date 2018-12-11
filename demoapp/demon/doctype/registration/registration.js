// Copyright (c) 2018, Pooja and contributors
// For license information, please see license.txt

frappe.ui.form.on('Registration', {
	setup:function(frm){
		console.log("Personal Information.....")
	},
	refresh: function(frm) {
		// Render Google Map
		if (frm.doc.lat && frm.doc.lon) {
			console.log("--------------1")
			var google_map_data = frappe.render_template('map_template',{"lat": frm.doc.lat,"lon": frm.doc.lon});
    		$(frm.fields_dict['google_map_template'].wrapper).html(google_map_data)
    		refresh_field("google_map_template")
		}
	},
	// Render map to HTML field
	validate: function(frm){
		// Render Google Map
		if (frm.doc.lat && frm.doc.lon) {
			var google_map_data = frappe.render_template('map_template',{"lat": frm.doc.lat,"lon": frm.doc.lon});
    		$(frm.fields_dict['google_map_template'].wrapper).html(google_map_data)
    		refresh_field("google_map_template")
		}
		else{
			//Get Lat & Lon for Google Map
			frappe.call({
	 			method: "frappe.client.get_value",
				args: {
						doctype: "UI Form",
						fieldname:"app_key",
						filters: {name: "bca83c9883"}
					},
				callback:function(r)
				{	
					var data = r.message;	
					// if (data['app_key']){
						var url = "https://maps.googleapis.com/maps/api/geocode/json?address="
						var address = frm.doc.address_1+"+"+frm.doc.city+"+"+frm.doc.state+"+"+ frm.doc.country+"&"
						var key ="key="+ "AIzaSyAByxJyFtKW-x8IFdq2SdLZP5YB6syM0J8"
						var api = url + address + key
						console.log("--------------------",api)
						$.getJSON(api,function(data) {	
							if(data.results.length){
								var location = data['results'][0]['geometry']['location']
	     					  	if (location){
	     					    	frm.set_value("lat", location['lat']);
									frm.set_value("lon", location['lng']);
	     					  	}
     					  	}
   						});	
					}
				// }
			});
		}
	},
	onload:function(frm){
		if(!frm.doc.__islocal){
			cur_frm.add_custom_button(__("Show UI Form"),function(frm){
			cur_frm.doc.set_route("UI Form","")
		})
		}
	},
	take_image: function(frm){
		const capture = new frappe.ui.Capture();
				capture.open();
				capture.click((data) => {
					cur_frm.call({
						method: "upload_driver_photo",
						doc: cur_frm.doc,
						args: {
							doctype: cur_frm.doc.doctype,
							docname: cur_frm.doc.name,
							filedata: data
						},
						callback: function(r) {
							if (r.message) {
								cur_frm.set_value("driver_photo",r.message['file_url'])
						}
					}
				});
			});
		$('*[data-dismiss="modal"]').click(function(){
			capture.hide()
		})
	},
	save:function(frm){
		frappe.call({
			method:"save_signature",
			doc:cur_frm.doc,
			args:{
				doctype : cur_frm.doc.doctype,
				docname : cur_frm.doc.name,
				filedata : cur_frm.doc.signature
			},
			callback:function(r){
				if(r.message){
					cur_frm.set_value("save_sign",r.message['file_url'])
				}
			}
		});
	},
	mobile_no:function(frm){
		var x = cur_frm.doc.mobile_no
		z = frm.events.textToBase64Barcode(x,frm);
		var image_src = frappe.render_template('barcode_svg',{'abc': z});
 		$(frm.fields_dict['show_barcode'].wrapper).html(image_src)
	
	},
	textToBase64Barcode: function(x,frm){
			var canvas = document.createElement("canvas");
		 	JsBarcode(canvas, x, );
		 	return canvas.toDataURL("image/png");
	},

});
