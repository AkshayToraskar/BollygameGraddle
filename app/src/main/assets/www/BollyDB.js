db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
var dbid="", dbpath="", dbyear="", dbanswer="", dbquestion="", dbdialog="";
var level;
var sc={score:0};

function dbload()
{	
	if (localStorage.getItem("firstRun") == null)
	{	db.transaction(createDB, error);
    	localStorage.setItem("firstRun", false);
	}
	document.addEventListener("backbutton", onBackKeyDown, false);
	playStream("load");
}
function onBackKeyDown() 
{	navigator.app.exitApp();
}

function play()
{	db.transaction(query, error);
}


function createDB(tx)
{	tx.executeSql('DROP TABLE IF EXISTS BollyDB');
	tx.executeSql('CREATE TABLE IF NOT EXISTS BollyDB (id unique, path, year, answer, question, dialog)');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (0, "img/bolly/p-deewaar.jpg","1975","DEEWAAR","EARAWEDEB","Hey Saala")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (1, "img/bolly/p-sivaji.jpg","2007","SIVAJI","WAVIJISV","aaj se mera rasta sher ka rasta")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (2, "img/bolly/p-sarkar.jpg","2005","SARKAR","DRARKASE","MUZE JO SAHI LAGTA HAI WO ME KARTA HU WO CHAHE BHAGWAN KE BHI KHILAF HO")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (3, "img/bolly/p-talaash.jpg","2012","TALAASH","BLATASAHAE","dukan khuli nahi to saala curfuw lag gaya")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (4, "img/bolly/p-tezaab.jpg","1988","TEZAAB","SZABEATW","uska aur merha khoon ka rishta hai khoon uska aur chaku mera")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (5, "img/bolly/p-tiranga.jpg","1992","TIRANGAA","AGRANATARI","na talwar ki dhar se, no goliyon ki bochar se banda darta hai to sirf parvardigarse")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (6, "img/bolly/p-vaastav.jpg","1999","VAASTAV","AETAVSTVABV","asli hai asli pachas tolla !")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (7, "img/bolly/p-wanted.jpg","","WANTED","ATDWNEAW","ek baar jo maine commitment kardi to uske baad to me khud ki bhi nahi sunta")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (8, "img/bolly/p-yaarana.jpg","1981","YAARANA","QAYANARAB","kachha papad pakka papad")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (9, "img/bolly/p-welcome.jpg","2007","WELCOME","EMCLOEWSA","yeh sharif log bohot badmash hote hai sharafat ki jubaan nahi samajhate")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (10,"img/bolly/c-3idiots.jpg","2009","3IDIOTS","SAODII3TSA","Life is a race ... if you dont run fast ... you will be like a broken undaa")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (11,"img/bolly/c-agnipath.jpg","2012","AGNIPATH","EANGIPAHT","Tum kya leke aaye the ... aur kya leke jaoge")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (12,"img/bolly/c-ajooba.jpg","1991","AJOOBA","MAJBOABO","Muddai lakh bura chahe to kya hota hai,wahi hota hai jo manzoor-e-khuda hota hai...")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (13,"img/bolly/c-coolie.jpg","2004","COOLIE","LEICOWEO","Tere haath mein maut ka samaan hai toh ... mere seene pe khuda ka naam hai")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (14,"img/bolly/c-dabangg.jpg","2010","DABANGG","GBADNAGA","Hum yahan ke Robinhood hai ... Robinhood Pandey")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (15,"img/bolly/c-delhi6.jpg","2009","DELHI6","Y6LHEDI","Burgerchaap kahike!")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (16,"img/bolly/c-dhoom3.jpg","2013","DHOOM3","O3MOHDM","Joh duniya ko namumkin lage ... wahi mauka hota hai ... kartab dikhane ka")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (17,"img/bolly/c-don.jpg","1978","DON","ENMDCO","Don ka intezaar toh gyarah mulkon ki police kar rahi hai")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (18,"img/bolly/c-fanaa.jpg","2006","FANAA","AEAMNCFA","Tere dil mein meri saanson ko panaah mil jaye ... tere ishq mein meri jaan fanaa ho jaye")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (19,"img/bolly/c-ghajini.jpg","2008","GHAJINI","HAGSIJNI","Vishvas aur ghamund mein bahut kum farak hai ... main kar sakta hoon, yeh mera vishvas hai ... sirf main hi kar sakta hoon, yeh mera ghamund")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (20,"img/bolly/c-ghayal.jpg","1990","GHAYAL","AGHIYASL","Joh zindagi mujhse takrati hai ... woh sisak-sisakar dum todhti hai")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (21,"img/bolly/c-herapheri.jpg","2000","HERAPHERI","ARHEHEPARI","Arre kaun Deviprasad..")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (22,"img/bolly/c-khalnayak.jpg","1993","KHALNAYAK","KAHLAAYAKN","Har khalnayak mein ek nayak chupa hua hota hai")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (23,"img/bolly/c-koyla.jpg","1997","KOYLA","SYOALKA","Bloody Fool..")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (24,"img/bolly/c-paa.jpg","2009","PAA","EAMCPA","Mein Rashtrapati bhavan jaa raha hu.")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (25,"img/bolly/c-rajababu.jpg","1994","RAJABABU","JABABRAU","Main hoon Nandu sabka bandhu")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (26,"img/bolly/c-robot.jpg","2010","ROBOT","ABTOAOR","Speed one terahertz, memory one zettabyte")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (27,"img/bolly/c-rocketsingh.jpg","2009","ROCKETSINGH","ETKCROINSGH","Business number nahi, business log hai ... sirf log")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (28,"img/bolly/c-shahenshah.jpg","1988","SHAHENSHAH","AHSNHEAHSH","Rishtey mein to hum tumhare baap hote hai ... naam hai Shahenshah")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (29,"img/bolly/c-sholayg.jpg","1975","SHOLAY","ALOASHAY","Basanti in kutto ke samne mat nachna")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (30,"img/bolly/c-singham.jpg","2011","SINGHAM","INHMSIGA","Jisme hai dum ... to fakht Bajirao Singham")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (31,"img/bolly/c-vaastav.jpg","2007","VAASTAV","AVSAVTAV","Mumbai pe raaj karta hoon ... Raaj")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (32,"img/bolly/c-sholayt.jpg","1975","SHOLAY","LASOHAOY","Joh dar gaya ... samjho mar gaya")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (33,"img/bolly/f-dabangg2.jpg","2010","DABANGG","ABGNGAAD","Thappad se darr nahi lagta sahab ... pyar se lagta hai")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (34,"img/bolly/f-dhoom24.jpg","2006","DHOOM2","SO2DOHMA","Sikka tumhara par baazi meri")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (35,"img/bolly/f-robot3.jpg","2010","ROBOT","ATOSRBOS","Main dikhta ek insaan hoon par hoon ek machine")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (36,"img/bolly/f-rockstar4.jpg","2011","ROCKSTAR","OCKRAASTR","Tu na badi cool lagti hai mujhe ... aur hot bhi kitni hai tu")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (37,"img/bolly/f-sholay11.jpg","1975","SHOLAY","OLAYSHA","Kitney aadmi the?")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (38,"img/bolly/f-singham2.jpg","2011","SINGHAM","GHMANIAS","Aali re aali ... aata tujhi baari aali")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (39,"img/bolly/f-robot3.jpg","2010","ROBOT","ABOAROT","Speed one terahertz, memory one zettabyte")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (40,"img/bolly/p-agneepath.jpg","2012","AGNEEPATH","PTAHENEGA","Vijay Dinanath Chauhan ... poora naam")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (41,"img/bolly/p-awednesday.jpg","2008","AWEDNESDAY","ADESWNEADY","Im just a stupid comman man")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (42,"img/bolly/p-blackfriday.jpg","2004","BLACKFRIDAY","RIFAYDCKABL","Halwa he kya?")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (43,"img/bolly/p-buntyaurbabli.jpg","2005","BUNTYAURBABLI","BNUTYUATRBBLAI","You can kiraaye pe lease it")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (44,"img/bolly/p-coolie.jpg","2004","COOLIE","ALICOEOA","Mazdoor ka paseena sookhne se pehle, uski mazdoori mil jani chahiye janaab")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (45,"img/bolly/p-jabwemet.jpg","2007","JABWEMET","EWABJEMTA","Main apni favorite hoon")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (46,"img/bolly/p-jodhaakbar.jpg","2008","JODHAAKBAR","AKARBHDJOA","Hukm ki tameel ho!")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (47,"img/bolly/p-karanarjun.jpg","1995","KARANARJUN","AJRNURAKAN","Mere bete aayenge, mere Karan Arjun aayenge ..")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (48,"img/bolly/p-mangalpandey.jpg","2005","MANGALPANDEY","AEDPNYALGNMA","Yeh azaadi ki ladai hai ... ghuzre hue kal se azaadi ... aane waale kal ke liye")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (49,"img/bolly/p-mohabbatein.jpg","2000","MOHABBATEIN","BAINBETAHMO","Maine aaj tak sirf ek hi ladki se mohabbat ki hai ... aur zindagi bhar sirf us hi se karta rahoonga")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (50,"img/bolly/p-mrindia.jpg","1987","MRINDIA","MDINASAIR","Calendar khana lao! ... Calendar khana lao!")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (51,"img/bolly/p-rajababu.jpg","1994","RAJABABU","ARJASABBUARU","Samajhta nahi hai yaar")');
	tx.executeSql('INSERT INTO BollyDB (id, path, year, answer, question, dialog) VALUES (52,"img/bolly/p-vickydonor.jpg","2012","VICKYDONOR","VDONCIKCYOR","Sperm se thoda upar aakar dekho ... heart naam ki cheez hoti hai")');
		
	tx.executeSql('DROP TABLE IF EXISTS level');
	tx.executeSql('CREATE TABLE IF NOT EXISTS level (id unique,lvl int,score int)');
	tx.executeSql('INSERT INTO level (id, lvl, score) VALUES (1,0,0)');
}


function query(tx)
{	tx.executeSql('select * from level',[],getlevel,error);
	tx.executeSql('select * from BollyDB',[],getdata,error);
}

function getdata(tx,results)
{	val=results.rows.item(level);
	
	dbid=val['id'];
	dbpath=val['path'];
	dbyear=val['year'];
	dbanswer=val['answer'];
	dbquestion=val['question'];
	dbdialog=val['dialog'];
	
	if(d.page=="index")
	{}
	else if(d.page=="play")
	{	valAssign(dbid,dbpath,dbyear,dbanswer,dbquestion,dbdialog);
	}
	else if(d.page=="correct")
	{	valCorrect(dbid,dbpath,dbyear,dbanswer,dbquestion,dbdialog);
	}
	else if(d.page=="setting")
	{	valScore();
		SoundBtn();
	}
}

function getlevel(tx,results)
{	var lv=results.rows.item(0);

	level=lv['lvl'];
	score=lv['score'];
	sc.score=score;
	if(d.page=="correct")
	{	if(level<52)
		{	tx.executeSql('update level set lvl='+(level+1));
		}
		else
		{	tx.executeSql('update level set lvl=0');
		}
		tx.executeSql('update level set score='+(score+5));
	}
	
	//getscore(score);
}


function error(err)
{	alert("Error processing SQL: "+err.code);
}