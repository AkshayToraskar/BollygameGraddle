var id="", path="", year="", answer="", dbans="", question="",dialog="";
var d={	page:"index"};
var s={sound:"ON"};

function load()
{	dbload();
}

function valAssign(no,img_path,yr,ans,que,dia)
{	id=no;
	path=img_path;
	year=yr;
	dbans=ans;
	question=que;
	dialog=dia;
	
	showContent();
}

function valCorrect(no,img_path,yr,ans,que,dia)
{	id=no;
	path=img_path;
	year=yr;
	dbans=ans;
	question=que;
	dialog=dia;
	
	nextContent();
}

function showContent()
{	document.getElementById("year").innerHTML=year;
	document.getElementById("image").innerHTML='<img class="main_disp" src="'+path+'" width=185px height=185px />';
	document.getElementById("score").innerHTML="Score: "+sc.score;
	disp(question,answer);
}

function nextContent()
{	document.getElementById("year").innerHTML=year;
	document.getElementById("image").innerHTML='<img class="main_disp" src="'+path+'" width=185px height=185px />';
	document.getElementById("dialog").innerHTML=dialog;
	document.getElementById("score").innerHTML="Score: "+sc.score;
	
}

function valScore()
{	document.getElementById("Sscore").innerHTML="Score: "+sc.score;
}

function disp(que,ans)
{	
	var strque=que.split("");
	var strans=ans.split("");
	
	var emptile=dbans.length-strans.length;
	
	var q="", a="";

	for(var i=0; i<strque.length; i++)
	{	q = q +'<button type="button" id="tile" onClick="operation(\''+ 'd' +i +'\');">'+strque[i]+'</button>&nbsp';
	}

	for(var i=0; i<strans.length; i++)
	{	a = a +'<button type="button" id="tile" onClick="operation(\''+ 'u' +i +'\');">'+strans[i]+'</button>&nbsp';
	}
	for(var i=0; i<emptile; i++)
	{	a = a +'<button type="button" id="tile_empty">&nbsp</button>&nbsp';
	}
	
	document.getElementById("aup").innerHTML=a;
	document.getElementById("adown").innerHTML=q;
	check();
	
	up=" ";
	down=" ";
}

function check()
{	if(dbans.length==answer.length)
	{	if(dbans==answer)
		{	playStream("correct");
			window.location="correct.html";
		}
		else
		{	playStream("wrong");
			alert("wrong Answer..!");
		}
	}
}

function operation(op)
{	var emptytile=dbans.length;
	var pos=op.split("");
	var ele=pos[1];
	
	var qq="";
	var aa="";
	
	if(pos[0]=="d")
	{	if(answer.length<emptytile)
		{
			for(var i=0; i<question.length; i++)
			{ 	if(i==ele)
				{	aa=aa+question[i];	
				}
				else
				{	qq=qq+question[i];
				}
			}

			question=qq;
			answer=answer+aa;
		}
	}
	else if(pos[0]=="u")
	{	for(var i=0; i<answer.length; i++)
		{	if(i==ele)
			{	qq=qq+answer[i];
			}
			else
			{	aa=aa+answer[i];
			}
		}
		question=question+qq;
		answer=aa;
	}

	playStream("tile_tap");
	disp(question,answer);
}

function playStream(snd)
{  	try 
	{  	if(s.sound=="ON")
		{	load = new Media('/android_asset/www/audio/ThemeMusic.mp3');
			var button = new Media('/android_asset/www/audio/button.mp3');
			var tile_tap = new Media('/android_asset/www/audio/tile_tap.mp3');
			var correct = new Media('/android_asset/www/audio/correct.mp3');
			var wrong = new Media('/android_asset/www/audio/toing.mp3');
			
			if(snd=="load")
			{	load.id = 'playerMyAudioload';
				load.play();		
			}
			else if(snd=="btn")
			{	button.id = 'button';
				button.play();
			}
			else if(snd=="tile_tap")
			{	tile_tap.id = 'playerMyAudiotile';
				tile_tap.play();
			}
			else if(snd=="correct")
			{	correct.id = 'playerMyAudiocorrect';
				correct.play();
			}
			else if(snd=="wrong")
			{	wrong.id = 'playerMyAudiowrong';
				wrong.play();
			}
			
		}
		else{}
	}

	catch (e) 
	{	alert('no audio support!');
	} 
}

function stopMedia()
{	load.stop();
	playStream("tile_tap");
}

function SoundBtn()
{	if(s.sound=="ON")
	{	document.getElementById("SndBtn").innerHTML='Sound: <button type="button" onClick="SoundBtn();">ON</button>';
		s.sound="OFF";
	}
	else if (s.sound=="OFF")
	{	document.getElementById("SndBtn").innerHTML='Sound: <button type="button" onClick="SoundBtn();">OFF</button>';
		s.sound="ON";
	}
}
