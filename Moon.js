function Universal()
{
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
document.getElementById("im").innerHTML = ("<img src='images/" + m_date + ".png' width='290' height='291' alt='" + m_date + "-" + dend[m_date-1] + " лунный день'/>");
}
// Текущий лунный день
function MoonDat()
{
document.getElementById("Dat").innerHTML = (m_date + "-" + dend[m_date-1] + " лунный день");
}