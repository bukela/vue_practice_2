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
				y: 0
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
			}
		});
