function Universal()
{
Zeit()
Moon()
MoonDat()
}

milenium=new Array(0.0, 13.9, 27.7, 12.1, 25.9, 10.3, 24.2)
century=new Array(0.0, 4.3, 8.7, 13.0, 17.4, 21.7, 26.0, 0.8, 5.2, 9.5)
ten=new Array(0.0, 9.3, 18.6, 27.9, 7.6, 16.9, 26.2, 6.0, 15.3, 24.6)
year=new Array(0.0, 18.6, 7.8, 26.4, 15.5, 4.6, 23.3, 12.4, 1.5, 20.2)
month_new=new Array(13.4, 11.9, 24.2, 22.6, 22.0, 20.6, 20.0, 18.4, 17.0, 16.6, 15.1, 14.8)
month_full=new Array(28.2, 26.7, 9.5, 7.9, 7.3, 5.8, 5.3, 3.6, 2.2, 1.9, 0.3, 0.0)

function GetDate(m,c,t,y,mn,nw){
	result=0
	if ((mn==1)||(mn==2)){
		y-=1
		if (y<0){
			y=9
			t-=1
		}
		if (t<0){
			t=9
			c-=1
		}
		if (c<0){
			c=9
			m-=1
		}
	}
	if ((m>=0)&(m<=6)){
		result+=milenium[m]
	}
	if ((c>=0)&(c<=9)){
		result+=century[c]
	}
	if ((t>=0)&(t<=9)){
		result+=ten[t]
	}
	if ((y>=0)&(y<=9)){
		result+=year[y]
	}
	if (nw==1){
		result+=month_new[mn-1]
	}else{
		result+=month_full[mn-1]
	}
	x=t*10+y
	x=x%4
	if (x==1){
		result+=0.2
	}
	if (x==2){
		result+=0.5
	}
	if (x==3){
		result+=0.8
	}
	x=m*10+Math.floor(c)
	x=Math.round(0.75*x-1.625)
	result+=x
	if (result>119.1){
		result-=118.1
	}
	if (result>89.6){
		result-=88.6
	}
	if (result>60.1){
		result-=59.1
	}
	if (result>30.5){
		result-=29.5
	}
	result=Math.round(result*10)/10
	return result
}

function MoonDay(m,c,t,y,mn,d,cl){
	result=0
	nov=GetDate(m,c,t,y,mn,1)
	if (nov==0){
		return result
	}
	dr=Math.floor(d)+(Math.round(cl/24*10)/10)
	result=dr-nov
	if (result<0){
		result+=29.5
	}
//	echo (result);
	result=Math.floor(result)+1

	return result
}

var date_obj = new Date();
var m_d = 1*date_obj.getFullYear();

var m_date = MoonDay(
	1*m_d.toString().substr(0,1),
	1*m_d.toString().substr(1,1),
	1*m_d.toString().substr(2,1),
	1*m_d.toString().substr(3,1),
	1*date_obj.getMonth()+1,
	1*date_obj.getDate(),
	1*date_obj.getHours()
);

var dend = new Array('ый', 'ой', 'ий', 'ый', 'ый', 'ой', 'ой', 'ой', 'ый', 'ый', 'ый', 'ый', 'ый', 'ый', 'ый', 'ый', 'ый', 'ый', 'ый', 'ый', 'ый', 'ой', 'ий', 'ый', 'ый', 'ой', 'ой', 'ой', 'ый');
var monthru = new Array('января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря');

var title='Сегодня, ' + date_obj.getDate() + " " + monthru[date_obj.getMonth()] + " " + date_obj.getFullYear() + " года, " +
	m_date + "-" + dend[m_date-1] + " день лунного календаря."
// Луна
function Moon()
{
document.getElementById("im").innerHTML = ("<img src=' " + m_date + ".png' width='290' height='291' alt='" + m_date + "-" + dend[m_date-1] + " лунный день'/>");
}
// Текущий лунный день
function MoonDat()
{
document.getElementById("Dat").innerHTML = (m_date + "-" + dend[m_date-1] + " лунный день");
}
// **************************************************** Время ***********************************************************
var VarZeit;
function Zeit()
{
var date = new Date();
var seconds = date.getSeconds();
var minutes = date.getMinutes();
var hours = date.getHours();
var DayWeek = date.getDay();
var day = date.getDate();
var month=date.getMonth()+1;
var year=date.getFullYear();
var titl = (year)+":"+(month)+":"+(day)+":"+(DayWeek)+":"+(hours)+":"+(minutes)+":"+(seconds);

VarZeit = setTimeout("Zeit()", 1000);

document.title=(titl);
document.getElementById("TimeSeconds").innerHTML = (seconds);
document.getElementById("TimeMinutes").innerHTML = (minutes);
document.getElementById("TimeHours").innerHTML = (hours);
document.getElementById("TimeWeek").innerHTML = (DayWeek);
document.getElementById("TimeDay").innerHTML = (day);
document.getElementById("TimeMonth").innerHTML = (month);
document.getElementById("TimeYear").innerHTML = (year);
// ************************************************************
// Yyear
if (year>=2000 && year<3000)
{
document.getElementById("Yyr").innerHTML = ("Zweitausend");
}
if (year>=2019 && year<2020)
{
document.getElementById("Yyear").innerHTML = ("neunzehnten");
}
// *********************** Saison *************************************
if (month>=1 && month<3)
{
document.getElementById("Saison").innerHTML = ("Winter");
}
if (month>=3 && month<6)
{
document.getElementById("Saison").innerHTML = ("Frühling");
}
if (month>=6 && month<9)
{
document.getElementById("Saison").innerHTML = ("Sommer");
}
if (month>=9 && month<12)
{
document.getElementById("Saison").innerHTML = ("Herbst");
}
if (month>=12 && month<13)
{
document.getElementById("Saison").innerHTML = ("Winter");
}
// ************************************************************
// day
if (day>=1 && day<2)
{
document.getElementById("Tag").innerHTML = ("Eins");
}
if (day>=2 && day<3)
{
document.getElementById("Tag").innerHTML = ("Zwei");
}
if (day>=3 && day<4)
{
document.getElementById("Tag").innerHTML = ("Drei");
}
if (day>=4 && day<5)
{
document.getElementById("Tag").innerHTML = ("Vier");
}
if (day>=5 && day<6)
{
document.getElementById("Tag").innerHTML = ("Fünf");
}
if (day>=6 && day<7)
{
document.getElementById("Tag").innerHTML = ("Sechs");
}
if (day>=7 && day<8)
{
document.getElementById("Tag").innerHTML = ("Sieben");
}
if (day>=8 && day<9)
{
document.getElementById("Tag").innerHTML = ("Acht");
}
if (day>=9 && day<10)
{
document.getElementById("Tag").innerHTML = ("Neun");
}
if (day>=10 && day<11)
{
document.getElementById("Tag").innerHTML = ("Zehn");
}
if (day>=11 && day<12)
{
document.getElementById("Tag").innerHTML = ("Elf");
}
if (day>=12 && day<13)
{
document.getElementById("Tag").innerHTML = ("Zwölf");
}
if (day>=13 && day<14)
{
document.getElementById("Tag").innerHTML = ("Drei");
}
if (day>=14 && day<15)
{
document.getElementById("Tag").innerHTML = ("Vier");
}
if (day>=15 && day<16)
{
document.getElementById("Tag").innerHTML = ("Fünf");
}
if (day>=16 && day<17)
{
document.getElementById("Tag").innerHTML = ("Sech");
}
if (day>=17 && day<18)
{
document.getElementById("Tag").innerHTML = ("Sieb");
}
if (day>=18 && day<19)
{
document.getElementById("Tag").innerHTML = ("Acht");
}
if (day>=19 && day<20)
{
document.getElementById("Tag").innerHTML = ("Neun");
}
if (day>=20 && day<30)
{
document.getElementById("Tag").innerHTML = ("Zwan");
}
if (day>=30 && day<32)
{
document.getElementById("Tag").innerHTML = ("Drei");
}
// TaZehn
if (day>=0 && day<13)
{
document.getElementById("TaZehn").innerHTML = (" ");
}
// zehn
if (day>=13 && day<20)
{
document.getElementById("TaZehn").innerHTML = ("zehn");
}
// zig
if (day>=20 && day<30)
{
document.getElementById("TaZehn").innerHTML = ("zig");
}
// ßig
if (day>=30 && day<32)
{
document.getElementById("TaZehn").innerHTML = ("ßig");
}
// und
if (day>=0 && day<21)
{
document.getElementById("TZund").innerHTML = (" ");
}
if (day>=21 && day<30)
{
document.getElementById("TZund").innerHTML = ("und");
}
if (day>=30 && day<31)
{
document.getElementById("TZund").innerHTML = (" ");
}
if (day>=31 && day<32)
{
document.getElementById("TZund").innerHTML = ("und");
}
// TZnd
if (day>=0 && day<21)
{
document.getElementById("TZnd").innerHTML = (" ");
}
if (day>=21 && day<22)
{
document.getElementById("TZnd").innerHTML = ("Eins");
}
if (day>=22 && day<23)
{
document.getElementById("TZnd").innerHTML = ("Zwei");
}
if (day>=23 && day<24)
{
document.getElementById("TZnd").innerHTML = ("Drei");
}
if (day>=24 && day<25)
{
document.getElementById("TZnd").innerHTML = ("Vier");
}
if (day>=25 && day<26)
{
document.getElementById("TZnd").innerHTML = ("Fünf");
}
if (day>=26 && day<27)
{
document.getElementById("TZnd").innerHTML = ("Sechs");
}
if (day>=27 && day<28)
{
document.getElementById("TZnd").innerHTML = ("Sieben");
}
if (day>=28 && day<29)
{
document.getElementById("TZnd").innerHTML = ("Acht");
}
if (day>=29 && day<30)
{
document.getElementById("TZnd").innerHTML = ("Neun");
}
if (day>=30 && day<31)
{
document.getElementById("TZnd").innerHTML = (" ");
}
if (day>=31 && day<32)
{
document.getElementById("TZnd").innerHTML = ("Eins");
}
// ************************************************************
// DayWeek
if (DayWeek>=0 && DayWeek<1)
{
document.getElementById("TmWk").innerHTML = ("Sonntag");
}
if (DayWeek>=1 && DayWeek<2)
{
document.getElementById("TmWk").innerHTML = ("Montag");
}
if (DayWeek>=2 && DayWeek<3)
{
document.getElementById("TmWk").innerHTML = ("Dienstag");
}
if (DayWeek>=3 && DayWeek<4)
{
document.getElementById("TmWk").innerHTML = ("Mittwoch");
}
if (DayWeek>=4 && DayWeek<5)
{
document.getElementById("TmWk").innerHTML = ("Donnerstag");
}
if (DayWeek>=5 && DayWeek<6)
{
document.getElementById("TmWk").innerHTML = ("Freitag");
}
if (DayWeek>=6 && DayWeek<7)
{
document.getElementById("TmWk").innerHTML = ("Samstag");
}
// ************************************************************
// hours
if (hours>=0 && hours<1)
{
document.getElementById("UN").innerHTML = ("Null");
}
if (hours>=1 && hours<2)
{
document.getElementById("UN").innerHTML = ("Eine");
}
if (hours>=2 && hours<3)
{
document.getElementById("UN").innerHTML = ("Zwei");
}
if (hours>=3 && hours<4)
{
document.getElementById("UN").innerHTML = ("Drei");
}
if (hours>=4 && hours<5)
{
document.getElementById("UN").innerHTML = ("Vier");
}
if (hours>=5 && hours<6)
{
document.getElementById("UN").innerHTML = ("Fünf");
}
if (hours>=6 && hours<7)
{
document.getElementById("UN").innerHTML = ("Sechs");
}
if (hours>=7 && hours<8)
{
document.getElementById("UN").innerHTML = ("Sieben");
}
if (hours>=8 && hours<9)
{
document.getElementById("UN").innerHTML = ("Acht");
}
if (hours>=9 && hours<10)
{
document.getElementById("UN").innerHTML = ("Neun");
}
if (hours>=10 && hours<11)
{
document.getElementById("UN").innerHTML = ("Zehn");
}
if (hours>=11 && hours<12)
{
document.getElementById("UN").innerHTML = ("Elf");
}
if (hours>=12 && hours<13)
{
document.getElementById("UN").innerHTML = ("Zwölf");
}
if (hours>=13 && hours<14)
{
document.getElementById("UN").innerHTML = ("Drei");
}
if (hours>=14 && hours<15)
{
document.getElementById("UN").innerHTML = ("Vier");
}
if (hours>=15 && hours<16)
{
document.getElementById("UN").innerHTML = ("Fünf");
}
if (hours>=16 && hours<17)
{
document.getElementById("UN").innerHTML = ("Sech");
}
if (hours>=17 && hours<18)
{
document.getElementById("UN").innerHTML = ("Sieb");
}
if (hours>=18 && hours<19)
{
document.getElementById("UN").innerHTML = ("Acht");
}
if (hours>=19 && hours<20)
{
document.getElementById("UN").innerHTML = ("Neun");
}
if (hours>=20 && hours<21)
{
document.getElementById("UN").innerHTML = (" ");
}
if (hours>=21 && hours<22)
{
document.getElementById("UN").innerHTML = ("Eine");
}
if (hours>=22 && hours<23)
{
document.getElementById("UN").innerHTML = ("Zwei");
}
if (hours>=23 && hours<24)
{
document.getElementById("UN").innerHTML = ("Drei");
}
// 
if (hours>=0 && hours<13)
{
document.getElementById("UuN").innerHTML = (" ");
}
if (hours>=13 && hours<20)
{
document.getElementById("UuN").innerHTML = ("zehn");
}
//
if (hours>=21 && hours<24)
{
document.getElementById("UuN").innerHTML = ("und");
}
//
if (hours>=0 && hours<20)
{
document.getElementById("UuNu").innerHTML = (" ");
}
if (hours>=20 && hours<24)
{
document.getElementById("UuNu").innerHTML = ("Zwan"+"<Br>"+"zig");
}
// ***************************** minutes *******************************
if (minutes>=0 && minutes<1)
{
document.getElementById("MN").innerHTML = ("Null");
}
if (minutes>=1 && minutes<2)
{
document.getElementById("MN").innerHTML = ("Eine");
}
if (minutes>=2 && minutes<3)
{
document.getElementById("MN").innerHTML = ("Zwei");
}
if (minutes>=3 && minutes<4)
{
document.getElementById("MN").innerHTML = ("Drei");
}
if (minutes>=4 && minutes<5)
{
document.getElementById("MN").innerHTML = ("Vier");
}
if (minutes>=5 && minutes<6)
{
document.getElementById("MN").innerHTML = ("Fünf");
}
if (minutes>=6 && minutes<7)
{
document.getElementById("MN").innerHTML = ("Sechs");
}
if (minutes>=7 && minutes<8)
{
document.getElementById("MN").innerHTML = ("Sieben");
}
if (minutes>=8 && minutes<9)
{
document.getElementById("MN").innerHTML = ("Acht");
}
if (minutes>=9 && minutes<10)
{
document.getElementById("MN").innerHTML = ("Neun");
}
if (minutes>=10 && minutes<11)
{
document.getElementById("MN").innerHTML = ("Zehn");
}
if (minutes>=11 && minutes<12)
{
document.getElementById("MN").innerHTML = ("Elf");
}
if (minutes>=12 && minutes<13)
{
document.getElementById("MN").innerHTML = ("Zwölf");
}
if (minutes>=13 && minutes<14)
{
document.getElementById("MN").innerHTML = ("Drei");
}
if (minutes>=14 && minutes<15)
{
document.getElementById("MN").innerHTML = ("Vier");
}
if (minutes>=15 && minutes<16)
{
document.getElementById("MN").innerHTML = ("Fünf");
}
if (minutes>=16 && minutes<17)
{
document.getElementById("MN").innerHTML = ("Sech");
}
if (minutes>=17 && minutes<18)
{
document.getElementById("MN").innerHTML = ("Sieb");
}
if (minutes>=18 && minutes<19)
{
document.getElementById("MN").innerHTML = ("Acht");
}
if (minutes>=19 && minutes<20)
{
document.getElementById("MN").innerHTML = ("Neun");
}
if (minutes>=20 && minutes<21)
{
document.getElementById("MN").innerHTML = (" ");
}
if (minutes>=21 && minutes<22)
{
document.getElementById("MN").innerHTML = ("Ein");
}
if (minutes>=22 && minutes<23)
{
document.getElementById("MN").innerHTML = ("Zwei");
}
if (minutes>=23 && minutes<24)
{
document.getElementById("MN").innerHTML = ("Drei");
}
if (minutes>=24 && minutes<25)
{
document.getElementById("MN").innerHTML = ("Vier");
}
if (minutes>=25 && minutes<26)
{
document.getElementById("MN").innerHTML = ("Fünf");
}
if (minutes>=26 && minutes<27)
{
document.getElementById("MN").innerHTML = ("Sechs");
}
if (minutes>=27 && minutes<28)
{
document.getElementById("MN").innerHTML = ("Sieben");
}
if (minutes>=28 && minutes<29)
{
document.getElementById("MN").innerHTML = ("Acht");
}
if (minutes>=29 && minutes<30)
{
document.getElementById("MN").innerHTML = ("Neun");
}
if (minutes>=30 && minutes<31)
{
document.getElementById("MN").innerHTML = (" ");
}
if (minutes>=31 && minutes<32)
{
document.getElementById("MN").innerHTML = ("Ein");
}
if (minutes>=32 && minutes<33)
{
document.getElementById("MN").innerHTML = ("Zwei");
}
if (minutes>=33 && minutes<34)
{
document.getElementById("MN").innerHTML = ("Drei");
}
if (minutes>=34 && minutes<35)
{
document.getElementById("MN").innerHTML = ("Vier");
}
if (minutes>=35 && minutes<36)
{
document.getElementById("MN").innerHTML = ("Fünf");
}
if (minutes>=36 && minutes<37)
{
document.getElementById("MN").innerHTML = ("Sechs");
}
if (minutes>=37 && minutes<38)
{
document.getElementById("MN").innerHTML = ("Sieben");
}
if (minutes>=38 && minutes<39)
{
document.getElementById("MN").innerHTML = ("Acht");
}
if (minutes>=39 && minutes<40)
{
document.getElementById("MN").innerHTML = ("Neun");
}
if (minutes>=40 && minutes<41)
{
document.getElementById("MN").innerHTML = (" ");
}
if (minutes>=41 && minutes<42)
{
document.getElementById("MN").innerHTML = ("Ein");
}
if (minutes>=42 && minutes<43)
{
document.getElementById("MN").innerHTML = ("Zwei");
}
if (minutes>=43 && minutes<44)
{
document.getElementById("MN").innerHTML = ("Drei");
}
if (minutes>=44 && minutes<45)
{
document.getElementById("MN").innerHTML = ("Vier");
}
if (minutes>=45 && minutes<46)
{
document.getElementById("MN").innerHTML = ("Fünf");
}
if (minutes>=46 && minutes<47)
{
document.getElementById("MN").innerHTML = ("Sechs");
}
if (minutes>=47 && minutes<48)
{
document.getElementById("MN").innerHTML = ("Sieben");
}
if (minutes>=48 && minutes<49)
{
document.getElementById("MN").innerHTML = ("Acht");
}
if (minutes>=49 && minutes<50)
{
document.getElementById("MN").innerHTML = ("Neun");
}
if (minutes>=50 && minutes<51)
{
document.getElementById("MN").innerHTML = (" ");
}
if (minutes>=51 && minutes<52)
{
document.getElementById("MN").innerHTML = ("Ein");
}
if (minutes>=52 && minutes<53)
{
document.getElementById("MN").innerHTML = ("Zwei");
}
if (minutes>=53 && minutes<54)
{
document.getElementById("MN").innerHTML = ("Drei");
}
if (minutes>=54 && minutes<55)
{
document.getElementById("MN").innerHTML = ("Vier");
}
if (minutes>=55 && minutes<56)
{
document.getElementById("MN").innerHTML = ("Fünf");
}
if (minutes>=56 && minutes<57)
{
document.getElementById("MN").innerHTML = ("Sechs");
}
if (minutes>=57 && minutes<58)
{
document.getElementById("MN").innerHTML = ("Sieben");
}
if (minutes>=58 && minutes<59)
{
document.getElementById("MN").innerHTML = ("Acht");
}
if (minutes>=59 && minutes<60)
{
document.getElementById("MN").innerHTML = ("Neun");
}
// und
if (minutes>=0 && minutes<21)
{
document.getElementById("Mund").innerHTML = (" ");
}
if (minutes>=21 && minutes<30)
{
document.getElementById("Mund").innerHTML = ("und");
}
if (minutes>=30 && minutes<31)
{
document.getElementById("Mund").innerHTML = (" ");
}
if (minutes>=31 && minutes<40)
{
document.getElementById("Mund").innerHTML = ("und");
}
if (minutes>=40 && minutes<41)
{
document.getElementById("Mund").innerHTML = (" ");
}
if (minutes>=41 && minutes<50)
{
document.getElementById("Mund").innerHTML = ("und");
}
if (minutes>=50 && minutes<51)
{
document.getElementById("Mund").innerHTML = (" ");
}
if (minutes>=51 && minutes<60)
{
document.getElementById("Mund").innerHTML = ("und");
}
// Десятки
if (minutes>=0 && minutes<20)
{
document.getElementById("MA").innerHTML = (" ");
}
if (minutes>=20 && minutes<30)
{
document.getElementById("MA").innerHTML = ("zwan");
}
if (minutes>=30 && minutes<40)
{
document.getElementById("MA").innerHTML = ("drei");
}
if (minutes>=40 && minutes<50)
{
document.getElementById("MA").innerHTML = ("vier");
}
if (minutes>=50 && minutes<60)
{
document.getElementById("MA").innerHTML = ("fünf");
}
// Оконьчания
if (minutes>=0 && minutes<13)
{
document.getElementById("MT").innerHTML = (" ");
}
if (minutes>=13 && minutes<20)
{
document.getElementById("Mund").innerHTML = ("zehn");
}
if (minutes>=20 && minutes<30)
{
document.getElementById("MT").innerHTML = ("zig");
}
if (minutes>=30 && minutes<40)
{
document.getElementById("MT").innerHTML = ("ßig");
}
if (minutes>=40 && minutes<60)
{
document.getElementById("MT").innerHTML = ("zig");
}
// ****************************************************************
// seconds
if (seconds>=0 && seconds<1)
{
document.getElementById("N").innerHTML = ("Null");
}
if (seconds>=1 && seconds<2)
{
document.getElementById("N").innerHTML = ("Eine");
}
if (seconds>=2 && seconds<3)
{
document.getElementById("N").innerHTML = ("Zwei");
}
if (seconds>=3 && seconds<4)
{
document.getElementById("N").innerHTML = ("Drei");
}
if (seconds>=4 && seconds<5)
{
document.getElementById("N").innerHTML = ("Vier");
}
if (seconds>=5 && seconds<6)
{
document.getElementById("N").innerHTML = ("Fünf");
}
if (seconds>=6 && seconds<7)
{
document.getElementById("N").innerHTML = ("Sechs");
}
if (seconds>=7 && seconds<8)
{
document.getElementById("N").innerHTML = ("Sieben");
}
if (seconds>=8 && seconds<9)
{
document.getElementById("N").innerHTML = ("Acht");
}
if (seconds>=9 && seconds<10)
{
document.getElementById("N").innerHTML = ("Neun");
}
if (seconds>=10 && seconds<11)
{
document.getElementById("N").innerHTML = ("Zehn");
}
if (seconds>=11 && seconds<12)
{
document.getElementById("N").innerHTML = ("Elf");
}
if (seconds>=12 && seconds<13)
{
document.getElementById("N").innerHTML = ("Zwölf");
}
if (seconds>=13 && seconds<14)
{
document.getElementById("N").innerHTML = ("Drei");
}
if (seconds>=14 && seconds<15)
{
document.getElementById("N").innerHTML = ("Vier");
}
if (seconds>=15 && seconds<16)
{
document.getElementById("N").innerHTML = ("Fünf");
}
if (seconds>=16 && seconds<17)
{
document.getElementById("N").innerHTML = ("Sech");
}
if (seconds>=17 && seconds<18)
{
document.getElementById("N").innerHTML = ("Sieb");
}
if (seconds>=18 && seconds<19)
{
document.getElementById("N").innerHTML = ("Acht");
}
if (seconds>=19 && seconds<20)
{
document.getElementById("N").innerHTML = ("Neun");
}
if (seconds>=20 && seconds<21)
{
document.getElementById("N").innerHTML = (" ");
}
if (seconds>=21 && seconds<22)
{
document.getElementById("N").innerHTML = ("Ein");
}
if (seconds>=22 && seconds<23)
{
document.getElementById("N").innerHTML = ("Zwei");
}
if (seconds>=23 && seconds<24)
{
document.getElementById("N").innerHTML = ("Drei");
}
if (seconds>=24 && seconds<25)
{
document.getElementById("N").innerHTML = ("Vier");
}
if (seconds>=25 && seconds<26)
{
document.getElementById("N").innerHTML = ("Fünf");
}
if (seconds>=26 && seconds<27)
{
document.getElementById("N").innerHTML = ("Sechs");
}
if (seconds>=27 && seconds<28)
{
document.getElementById("N").innerHTML = ("Sieben");
}
if (seconds>=28 && seconds<29)
{
document.getElementById("N").innerHTML = ("Acht");
}
if (seconds>=29 && seconds<30)
{
document.getElementById("N").innerHTML = ("Neun");
}
if (seconds>=30 && seconds<31)
{
document.getElementById("N").innerHTML = (" ");
}
if (seconds>=31 && seconds<32)
{
document.getElementById("N").innerHTML = ("Ein");
}
if (seconds>=32 && seconds<33)
{
document.getElementById("N").innerHTML = ("Zwei");
}
if (seconds>=33 && seconds<34)
{
document.getElementById("N").innerHTML = ("Drei");
}
if (seconds>=34 && seconds<35)
{
document.getElementById("N").innerHTML = ("Vier");
}
if (seconds>=35 && seconds<36)
{
document.getElementById("N").innerHTML = ("Fünf");
}
if (seconds>=36 && seconds<37)
{
document.getElementById("N").innerHTML = ("Sechs");
}
if (seconds>=37 && seconds<38)
{
document.getElementById("N").innerHTML = ("Sieben");
}
if (seconds>=38 && seconds<39)
{
document.getElementById("N").innerHTML = ("Acht");
}
if (seconds>=39 && seconds<40)
{
document.getElementById("N").innerHTML = ("Neun");
}
if (seconds>=40 && seconds<41)
{
document.getElementById("N").innerHTML = (" ");
}
if (seconds>=41 && seconds<42)
{
document.getElementById("N").innerHTML = ("Ein");
}
if (seconds>=42 && seconds<43)
{
document.getElementById("N").innerHTML = ("Zwei");
}
if (seconds>=43 && seconds<44)
{
document.getElementById("N").innerHTML = ("Drei");
}
if (seconds>=44 && seconds<45)
{
document.getElementById("N").innerHTML = ("Vier");
}
if (seconds>=45 && seconds<46)
{
document.getElementById("N").innerHTML = ("Fünf");
}
if (seconds>=46 && seconds<47)
{
document.getElementById("N").innerHTML = ("Sechs");
}
if (seconds>=47 && seconds<48)
{
document.getElementById("N").innerHTML = ("Sieben");
}
if (seconds>=48 && seconds<49)
{
document.getElementById("N").innerHTML = ("Acht");
}
if (seconds>=49 && seconds<50)
{
document.getElementById("N").innerHTML = ("Neun");
}
if (seconds>=50 && seconds<51)
{
document.getElementById("N").innerHTML = (" ");
}
if (seconds>=51 && seconds<52)
{
document.getElementById("N").innerHTML = ("Ein");
}
if (seconds>=52 && seconds<53)
{
document.getElementById("N").innerHTML = ("Zwei");
}
if (seconds>=53 && seconds<54)
{
document.getElementById("N").innerHTML = ("Drei");
}
if (seconds>=54 && seconds<55)
{
document.getElementById("N").innerHTML = ("Vier");
}
if (seconds>=55 && seconds<56)
{
document.getElementById("N").innerHTML = ("Fünf");
}
if (seconds>=56 && seconds<57)
{
document.getElementById("N").innerHTML = ("Sechs");
}
if (seconds>=57 && seconds<58)
{
document.getElementById("N").innerHTML = ("Sieben");
}
if (seconds>=58 && seconds<59)
{
document.getElementById("N").innerHTML = ("Acht");
}
if (seconds>=59 && seconds<60)
{
document.getElementById("N").innerHTML = ("Neun");
}
// und
if (seconds>=0 && seconds<21)
{
document.getElementById("und").innerHTML = (" ");
}
if (seconds>=21 && seconds<30)
{
document.getElementById("und").innerHTML = ("und");
}
if (seconds>=30 && seconds<31)
{
document.getElementById("und").innerHTML = (" ");
}
if (seconds>=31 && seconds<40)
{
document.getElementById("und").innerHTML = ("und");
}
if (seconds>=40 && seconds<41)
{
document.getElementById("und").innerHTML = (" ");
}
if (seconds>=41 && seconds<50)
{
document.getElementById("und").innerHTML = ("und");
}
if (seconds>=50 && seconds<51)
{
document.getElementById("und").innerHTML = (" ");
}
if (seconds>=51 && seconds<60)
{
document.getElementById("und").innerHTML = ("und");
}
// Десятки
if (seconds>=0 && seconds<20)
{
document.getElementById("A").innerHTML = (" ");
}
if (seconds>=20 && seconds<30)
{
document.getElementById("A").innerHTML = ("zwan");
}
if (seconds>=30 && seconds<40)
{
document.getElementById("A").innerHTML = ("drei");
}
if (seconds>=40 && seconds<50)
{
document.getElementById("A").innerHTML = ("vier");
}
if (seconds>=50 && seconds<60)
{
document.getElementById("A").innerHTML = ("fünf");
}
// Оконьчания
if (seconds>=0 && seconds<13)
{
document.getElementById("TimeDecSeconds").innerHTML = (" ");
}
if (seconds>=13 && seconds<20)
{
document.getElementById("und").innerHTML = ("zehn");
}
if (seconds>=20 && seconds<30)
{
document.getElementById("TimeDecSeconds").innerHTML = ("zig");
}
if (seconds>=30 && seconds<40)
{
document.getElementById("TimeDecSeconds").innerHTML = ("ßig");
}
if (seconds>=40 && seconds<60)
{
document.getElementById("TimeDecSeconds").innerHTML = ("zig");
}
}
// 
function StopZeit()
{
clearTimeout(VarZeit);
}
// ********************************************** Фон времени суток *************************************************
theTime = new Date();
theHour = theTime.getHours();
if(theHour>6&&theHour<18)
{document.write('<body background ="Tag.jpg">');}
else
{document.write('<body background ="night.gif">');}
// ********************************************** Часы в кнопке *************************************************
day = new Date();
miVisit = day.getTime();
function clock() {
dayTwo = new Date();
hrNow = dayTwo.getHours();
mnNow = dayTwo.getMinutes();	
scNow = dayTwo.getSeconds();
miNow = dayTwo.getTime();
if (hrNow == 0) {
hour = 12;
ap = " AM";
} else if(hrNow <= 11) {
ap = " AM";
hour = hrNow;
} else if(hrNow == 12) {
ap = " PM";
hour = 12;
} else if (hrNow >= 13) {
hour = (hrNow - 12);
ap = " PM";
}
if (hrNow >= 13) {
hour = hrNow - 12;
}
if (mnNow <= 9) {
min = "0" + mnNow;
}
else (min = mnNow)
if (scNow <= 9) {
secs = "0" + scNow;
} else {
secs = scNow;
}
time = hour + ":" + min + ":" + secs + ap;
document.form.button.value = time;
setTimeout('clock()', 1000);
}
function timeInfo() {
milliSince = miNow;
milliNow = miNow - miVisit;
secsVisit = Math.round(milliNow / 1000);
minsVisit = Math.round((milliNow / 1000) / 60);
alert("Прошло " + milliSince + " миллисекунд с полночи, 1 января, 1970 г.\n"
+ "Вы провели " + milliNow + " миллисекунд на этой странице...\n"
+ ".... А это " + minsVisit + " минут, и "
+ secsVisit + " секунд.");
}
document.write("<form name=\"form\">"
+ '<input type=button Id="btn" value="00:00:00 XX title="Жмите для получения информации!"'
+ " name=button onClick=\"timeInfo()\"></form>");
onError = null;
clock();
