class Tabs {
	constructor(options) {
		this.$el = $(options.el);

		this.setDefaultTabs();		
		this.setTabClickHandler();
	}
	
	setDefaultTabs() {
		this.$tabActive = this.$el.find('.tab--active');
		this.$tabsContent = $(`.tabs-content[data-id=${this.$el.data('id')}]`);

		this.showActiveTabContent(this.$tabActive.data('name'));
	}
	
	showActiveTabContent(name) {
		this.$tabsContent.find('.tab-content__section').hide();
		this.$tabsContent.find(`.tab-content__section[data-tab-section=${name}]`).show();
	}
	
	setTabClickHandler() {
		this.$el.find('.tab').on('click', (e) => {
			const $this = $(e.currentTarget);
			const tabsId = this.$el.data('id');
			
			$this.siblings('li').removeClass('tab--active');
			$this.addClass('tab--active');

			this.showActiveTabContent($this.data('name'));
		});
	}
}

$(document).ready(() => {	
	function setupTabs() {
		$('.tabs').each((i, element) => {
			new Tabs({el: element});	
		});
	}

	setupTabs()
});