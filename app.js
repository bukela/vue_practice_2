new Vue({
  			el: '#app',
  			data: {
				name: 'drnda',
				job: 'web',
				website: 'http://www.gsmarena.com',
				www: '<a href="http://www.google.com">Google</a>',
				age: 33,
				year: 2001,
				x: 0,
				y: 0,
				name1: '',
				age1: '',
				available: false,
				nearby: false,
				},
			methods: {
				greet: function(time) {
					return 'good '+ time +' '+ this.name;
				},
				plus: function() {
					this.age++;
				},
				minus: function() {
					this.age--;
				},
				plus_dbl: function(inc) {
					this.year+=inc;
				},
				minus_dbl: function(dec) {
					this.year-=dec;
				},
				updatexy: function(event) {
					this.x = event.offsetX;
					this.y = event.offsetY;
				},
				linkclick: function() {
					alert('clicked');
					
				}
			},
			computed: {
				compClass: function() {
					return {
					available: this.available,
					nearby: this.nearby
					}
				}
			}
		});
