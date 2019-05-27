module.exports = (app) => {
  	app.get('/', (req, res, next) => {
		res.render('home', {
			titel: "Forside"
		});
		
 	});

   	app.get('/product', (req, res, next) => {
		res.render('product', {
			titel: "Produkt"
		});
 	});

 	app.get('/contact', (req, res, next) => {
		res.render('contact', {
			titel: "Kontakt",
			footer: "FOOTER"
		});
	});
};