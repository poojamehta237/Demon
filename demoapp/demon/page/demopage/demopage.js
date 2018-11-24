frappe.pages['Demopage'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Demo Page',
		single_column: true
	});
	//  Adding Menu in page demopage
	page.add_menu_item('Registration',()=> frappe.set_route('List','Registration'))

	// for adding bread crumbs

	new demoapp.Demopage(wrapper);
	frappe.breadcrumbs.add("Demon");
}
demoapp.Demopage = frappe.views.TreeGridReport.extend({
	init:function(wrapper){
		this._super({
			title: __("Demo Page"),
			parent: $(wrapper).find('.layout-main'),
			page: wrapper.page,
			doctypes: ["Customer"],
			tree_grid: { show: true }
	})
}
})
// 		make_items() {
// 		this.items = new Items({
// 			wrapper: this.wrapper.find('.item-container'),
// 			frm: this.frm,
// 			// events: {
// 			// 	update_cart: (item, field, value) => {
// 			// 		if(!this.frm.doc.customer) {
// 			// 			frappe.throw(__('Please select a customer'));
// 			// 		}
// 			// 		this.update_item_in_cart(item, field, value);
// 			// 		this.cart && this.cart.unselect_all();
// 			// 	}
// 			// }
// 		});
// 	}

// class Items {
// 	render_items(items) {
// 		let _items = items || this.items;

// 		const all_items = Object.values(_items).map(item => this.get_item_html(item));
// 		let row_items = [];

// 		const row_container = '<div class="image-view-row">';
// 		let curr_row = row_container;

// 		for (let i=0; i < all_items.length; i++) {
// 			// wrap 4 items in a div to emulate
// 			// a row for clusterize
// 			if(i % 4 === 0 && i !== 0) {
// 				curr_row += '</div>';
// 				row_items.push(curr_row);
// 				curr_row = row_container;
// 			}
// 			curr_row += all_items[i];

// 			if(i == all_items.length - 1) {
// 				row_items.push(curr_row);
// 			}
// 		}

// 		this.clusterize.update(row_items);
// 	}

// 	filter_items({ search_term='', item_group='All Item Groups' }={}) {
// 		if (search_term) {
// 			search_term = search_term.toLowerCase();

// 			// memoize
// 			this.search_index = this.search_index || {};
// 			if (this.search_index[search_term]) {
// 				const items = this.search_index[search_term];
// 				this.items = items;
// 				this.render_items(items);
// 				this.set_item_in_the_cart(items);
// 				return;
// 			}
// 		} else if (item_group == "All Item Groups") {
// 			this.items = this.all_items;
// 			return this.render_items(this.all_items);
// 		}

// 		this.get_items({search_value: search_term, item_group })
// 			.then(({ items, serial_no, batch_no, barcode }) => {
// 				if (search_term && !barcode) {
// 					this.search_index[search_term] = items;
// 				}

// 				this.items = items;
// 				this.render_items(items);
// 				this.set_item_in_the_cart(items, serial_no, batch_no, barcode);
// 			});
// 	}

// 	get_item_html(item) {
// 		const price_list_rate = format_currency(item.price_list_rate, this.currency);
// 		const { item_code, item_name, item_image} = item;
// 		const item_title = item_name || item_code;

// 		const template = `
// 			<div class="pos-item-wrapper image-view-item" data-item-code="${escape(item_code)}">
// 				<div class="image-view-header">
// 					<div>
// 						<a class="grey list-id" data-name="${item_code}" title="${item_title}">
// 							${item_title}
// 						</a>
// 					</div>
// 				</div>
// 				<div class="image-view-body">
// 					<a	data-item-code="${item_code}"
// 						title="${item_title}"
// 					>
// 						<div class="image-field"
// 							style="${!item_image ? 'background-color: #fafbfc;' : ''} border: 0px;"
// 						>
// 							${!item_image ? `<span class="placeholder-text">
// 									${frappe.get_abbr(item_title)}
// 								</span>` : '' }
// 							${item_image ? `<img src="${item_image}" alt="${item_title}">` : '' }
// 						</div>
// 						<span class="price-info">
// 							${price_list_rate}
// 						</span>
// 					</a>
// 				</div>
// 			</div>
// 		`;

// 		return template;
// 	}

// 	get_items({start = 0, page_length = 40, search_value='', item_group="All Item Groups"}={}) {
// 		return new Promise(res => {
// 			frappe.call({
// 				method: "erpnext.selling.page.point_of_sale.point_of_sale.get_items",
// 				freeze: true,
// 				args: {
// 					start,
// 					page_length,
// 					'price_list': this.frm.doc.selling_price_list,
// 					item_group,
// 					search_value,
// 					'pos_profile': this.frm.doc.pos_profile
// 				}
// 			}).then(r => {
// 				// const { items, serial_no, batch_no } = r.message;

// 				// this.serial_no = serial_no || "";
// 				res(r.message);
// 			});
// 		});
// 	}
// }