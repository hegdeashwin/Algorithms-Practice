(function() {

	var Model = {
		currentCat: null,
		cats: [{
			clickCount: 0,
			name: "Ashwin",
			imgSrc: "http://placehold.it/350x150"
		}, {
			clickCount: 0,
			name: "Saju",
			imgSrc: "http://placehold.it/350x150"
		}, {
			clickCount: 0,
			name: "Kumar",
			imgSrc: "http://placehold.it/350x150"
		}, {
			clickCount: 0,
			name: "Jerin",
			imgSrc: "http://placehold.it/350x150"
		}, {
			clickCount: 0,
			name: "Vinayak",
			imgSrc: "http://placehold.it/350x150"
		}, {
			clickCount: 0,
			name: "Pavan",
			imgSrc: "http://placehold.it/350x150"
		}, {
			clickCount: 0,
			name: "Ajay",
			imgSrc: "http://placehold.it/350x150"
		}]
	};

	var Controller = {

		init: function() {
			Model.currentCat = Model.cats[0];

			CatListView.init();
			CatView.init();
		},

		getCurrentCat: function() {
			return Model.currentCat;
		},

		getCats: function() {
			return Model.cats;
		},

		setCurrentCat: function(cat) {
			Model.currentCat = cat;
		},

		incrementCounter: function() {
			Model.currentCat.clickCount++;
			CatView.render();
		}
	};

	var CatView = {
		init: function() {
			this.catEl = document.getElementById('cat');
			this.catNameEl = document.getElementById('catName');
			this.catImgEl = document.getElementById('catImg');
			this.countEl = document.getElementById('catCount');

			this.catImgEl.addEventListener('click', function(e) {
				Controller.incrementCounter();
			});

			this.render();
		},

		render: function() {
			var currentCat = Controller.getCurrentCat();
			this.countEl.textContent = currentCat.clickCount;
			this.catNameEl.textContent = currentCat.name;
			this.catImgEl.src = currentCat.imgSrc;
		}
	};

	var CatListView = {

		init: function() {
			this.catListEl = document.getElementById('catList');
			this.render();
		},

		render: function() {
			var cats = Controller.getCats();

			this.catListEl.innerHTML = '';

			for (var i = 0; i < cats.length; i++) {
				var cat = cats[i];

				var el = document.createElement('li');
				el.textContent = cat.name;

				el.addEventListener('click', (function(cat) {
					return function() {
						Controller.setCurrentCat(cat);
						CatView.render();
					};
				})(cat));

				this.catListEl.appendChild(el);
			};
		}
	};

	Controller.init();

})();