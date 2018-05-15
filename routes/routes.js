var chgpass = require('config/chgpass');
var register = require('config/register');
var login = require('config/login');
var liste = require('config/liste');
var recherche = require('config/recherche');
var ajout = require('config/ajout');
var bodyParser = require('body-parser')

module.exports = function(app) {
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
var jsonParser = bodyParser.json({ type: 'application/*+json' } );

app.get('/', function(req, res) {
		res.end(""); 
	});


//	app.get('/login/:email/:password',function(req,res){
	app.post('/login',function(req,res){
		var email = req.body.email;
        var password = req.body.password;
		login.login(email,password,function (found) {
			console.log(found);
			res.send(found);
		});
	});

app.get('/recherchevoitureparcode/:code', function(req, res) {
       recherche.recherchevoitureparcode(req.params.code,function (found) {
			res.send(found);
		});
	});

	app.post('/register',jsonParser,function(req,res){
			var email = req.body.email;
        	var password = req.body.password;
				register.sinscrire(email,password,function (found) {
			res.send(found);
		});
	});
	app.post('/modifieruser',function(req,res){
			var email = req.body.email;
        	var password = req.body.password;
	});
	

	app.post('/api/chgpass', function(req, res) {
		var id = req.body.id;
                var opass = req.body.oldpass;
		var npass = req.body.newpass;

		chgpass.cpass(id,opass,npass,function(found){
			console.log(found);
			res.send(found);
	});	
	});
	

	app.post('/api/resetpass', function(req, res) {
	
		var email = req.body.email;
		
		chgpass.respass_init(email,function(found){
			console.log(found);
			res.send(found);
	});		
	});
	

	app.post('/api/resetpass/chg', function(req, res) {
	
		var email = req.body.email;
		var code = req.body.code;
		var npass = req.body.newpass;
		
		chgpass.respass_chg(email,code,npass,function(found){			
			console.log(found);
			res.send(found);
		});		
	});

	app.get('/voitures', function(req, res) {
			liste.listevoitures(function (found) {
				res.send(found);
			});
		});

	app.get('/voituresdisponibles', function(req, res) {
		liste.listevoituresdisponibles(function (found) {
			res.send(found);
		});
	});

	app.get('/voituresenmission', function(req, res) {
		liste.listevoituresenmission(function (found) {
			res.send(found);
		});
	});
	app.get('/voituresdeservices', function(req, res) {
		liste.listevoituresdeservices(function (found) {
			res.send(found);
		});
	});
	app.get('/voituresdemissions', function(req, res) {
		liste.listevoituresdemissions(function (found) {
			res.send(found);
		});
	});
	app.get('/voituresdefonctions', function(req, res) {
		liste.listevoituresdefonctions(function (found) {
			res.send(found);
		});
	});

	app.get('/employes', function(req, res) {
		liste.listeemployes(function (found) {
			res.send(found);
		});
	});

	app.get('/chauffeurs', function(req, res) {
		liste.listechauffeurs(function (found) {
			res.send(found);
		});
	});
	app.get('/departements', function(req, res) {
		liste.listedepartements(function (found) {
			res.send(found);
		});
	});
	app.get('/typeutilisateurs', function(req, res) {
		liste.listetypeutilisateurs(function (found) {
			res.send(found);
		});
	});
	app.get('/typeentretiens', function(req, res) {
		liste.listetypeentretiens(function (found) {
			res.send(found);
		});
	});
	app.get('/typevoitures', function(req, res) {
		liste.listetypevoitures(function (found) {
			res.send(found);
		});
	});
	app.get('/parametre', function(req, res) {
		liste.parametre(function (found) {
			res.send(found);
		});
	});
	app.get('/lieu', function(req, res) {
		liste.lieu(function (found) {
			res.send(found);
		});
	});
	app.get('/listedemandesnonrepondus', function(req, res) {
		liste.listedemandesnonrepondus(function (found) {
			res.send(found);
		});
	});
	app.get('/listenotifications', function(req, res) {
		liste.listenotifications(function (found) {
			res.send(found);
		});
	});
	app.get('/listemissions', function(req, res) {
		liste.listemissions(function (found) {
			res.send(found);
		});
	});
	app.get('/listemissionsaujourdhui', function(req, res) {
		liste.listemissionsaujourdhui(function (found) {
			res.send(found);
		});
	});

	app.get('/recherchehistoriqueparvoitures/:id', function(req, res) {
		recherche.recherchehistoriqueparvoitures(req.params.id,function (found) {
			res.send(found);
		});
	});


	app.get('/recherchevoiture', function(req, res) {
		recherche.recherchehistoriqueparvoitures(function (found) {
			res.send(found);
		});
	});
	
	app.get('/recherchehistoriquepardate', function(req, res) {
		recherche.recherchehistoriquepardate(function (found) {
			res.send(found);
		});		
	});

	app.get('/rechercheemp/:nom', function(req, res) {
		console.log(req.params);
		recherche.rechercheemployes(req.params.nom,function (found) {
			res.send(found);
		});
	});
	app.get('/recherchetypeentretienbyid/:id', function(req, res) {
		console.log(req.params);
		recherche.recherchetypeentretienbyid(req.params.id,function (found) {
			res.send(found);
		});
	});
	app.get('/rechercheempparid/:id', function(req, res) {
		console.log(req.params);
		recherche.rechercheemployesparid(req.params.id,function (found) {
			res.send(found);
		});
	});
	app.get('/recherchechauffeursdisponible', function(req, res) {
		recherche.recherchechauffeursdisponible(function (found) {
			res.send(found);
		});
	});
	app.get('/validerdemande/:id', function(req, res) {
		ajout.validerdemande(req.params.id,function (found) {
			res.send(found);
		});
	});

	app.post('/ajoutentretien', function(req, res) {
		ajout.ajoutentretien(req.body.idVoiture,req.body.idEmploye,req.body.idTypeentretien,req.body.description,req.body.dateEntretien,
			function (found) {
			res.send(found);
			}
		);
	});
	app.post('/ajoutmission',jsonParser , function(req, res) {
		ajout.ajoutmission(req.body.dateDebut,req.body.dateFin,req.body.idEmploye,req.body.idVoiture,req.body.villeDepart,req.body.villeArrivee,req.body.coordonneesdepart,req.body.coordonneesarrivee,
 			function (found) {
			res.send(found);
			}
		);
	});
	app.post('/ajoutdemande',jsonParser , function(req, res) {
		ajout.ajoutdemande(req.body.datedemande,req.body.objet,req.body.description,req.body.statut,req.body.dateDebut,req.body.dateFin,req.body.idemploye,req.body.villedepart,req.body.idtypevoiture,req.body.poidslourd,req.body.villearrivee,req.body.coordonneesdepart,req.body.coordonneesarrivee,
 			function (found) {
			res.send(found);
			}
		);
	});
	app.get('/tbdepenses', function(req, res) {
		liste.tbdepenses(function (found) {
			res.send(found);
		});
	});
	app.get('/tbconsommation/:id', function(req, res) {
		var uid = req.params.id;
		liste.tbconsommation(uid,function (found) {
			res.send(found);
		});
	});
	app.get('/tbdepensesdetails/:id', function(req, res) {
		var uid = req.params.id;
		liste.tbdepensesdetails(uid,function (found) {
			res.send(found);
		});
	});
	app.get('/tbconsommationdetails/:id/:idvoiture', function(req, res) {
		var uid = req.params.id;
		liste.tbconsommationdetails(uid,req.params.idvoiture,function (found) {
			res.send(found);
		});
	});
}