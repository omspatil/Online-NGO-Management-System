//EDITED BY DEVENDRA......
var a=navigator.onLine;
if(!a){

    //window.location.assign("ErrorPage.html");
    
}
function chktelephone(str2)
{
	if (str2.charAt(0) != '+')
	{
		alert ("First character must be '+', Number should be of the format (CountryCode '.' Phone/Fax with Area Code) like +91.1124242424");
		return false;
	}
	
	if (str2.indexOf(".") <= 1)
	{
		alert ("Country Code and Number must be seperated by '.', Number should be of the format (Country Code '.' Phone/Fax with Area Code) like +91.1124242424");
		return false;
	}
	
	if (isNaN(str2.substring(1, str2.indexOf("."))) || str2.substring(1, str2.indexOf(".")).length > 3)
	{
		alert ("Counrty Code can have only Numeric Values and maximum 3 characters, Number should be of the format (Country Code '.' Phone/Fax with Area Code) like +91.1124242424");
		return false;
	}
	
	if (isNaN(str2.substring((str2.indexOf(".") + 1), (str2.length))) || str2.substring((str2.indexOf(".") + 1), (str2.length - 1)).length > 14 || str2.substring((str2.indexOf(".") + 1), (str2.length - 1)).length < 1)
	{
		alert ("Phone/Fax with Area Code can have only Numeric Values and maximum 14 characters, Number should be of the format (Country Code '.' Phone/Fax with Area Code) like +91.1124242424");
		return false;
	}
	return true;
}


function chkint(str) 
{
	alphabets="0123456789";

	for(i=0;i<str.length;i++)
	{
		if(alphabets.indexOf(str.charAt(i)) == -1)
		{
			alert ("Value entered is not numeric, Please Re-Enter");
			return false;
		}
	}	 
	
	return true;
}

function chkbadchar(str)
{
	//badch = new Array("select","drop","--","insert","delete","<",">","#","'","/*");
  	badch = new Array("javascript","img src","alert","script","prompt","select","drop","--","insert","delete","<",">","#","'","/*");
	
	for (var k=0;k<10;k++)
	{
		if (str.toLowerCase().indexOf(badch[k]) != -1)
		{
			alert ("Invalid characters found,Correct the information provided in the text box/area where the cursor blink");
			return false;
		}
	}
	return true;	
}


/*function chkbadchar_new(str)
{
  	badch = new Array("select","drop","--","insert","delete","<",">","#","'","/*");
	
	for (var k=0;k<100;k++)
	{
		if (str.indexOf(badch[k]) != -1)
		{
			alert ("Invalid characters found, Please Re-Enter");
			return false;
		}
	}
	return true;	
}*/


function chksplcharald(str)
{
	alphabets="abcdefghijklmnopqrstuvwxyz0123456789-+_.?@$%/\&*,;:'(){}[]`~!^| \t\r\n";
	
	for(i=0;i<str.length;i++)
	{
		if(alphabets.indexOf(str.toLowerCase().charAt(i)) == -1)
		{
			alert ("Invalid characters found,Correct the information provided in the text box/area where the cursor blink");
			return false;
		}
	}
	return true;
}

function chkchar(str)
{
	alphabets="abcdefghijklmnopqrstuvwxyz  ";
	
	for(i=0;i<str.length;i++)
	{
		if(alphabets.indexOf(str.toLowerCase().charAt(i)) == -1)
		{
			alert ("Invalid characters found,Correct the information provided in the text box/area where the cursor blink");
			return false;
		}
	}
	return true;
}

function chkcharpincode(str)
{
	alphabets="0123456789";
	
	for(i=0;i<str.length;i++)
	{
		if(alphabets.indexOf(str.toLowerCase().charAt(i)) == -1)
		{
			alert ("Invalid characters found, Please Enter Numbers only");
			return false;
		}
	}
	return true;
}
function chkalphanum(str)
{
	alphabets="abcdefghijklmnopqrstuvwxyz0123456789. ";
	
	for(i=0;i<str.length;i++)
	{
		if(alphabets.indexOf(str.toLowerCase().charAt(i)) == -1)
		{
			alert ("Invalid characters found,Correct the information provided in the text box/area where the cursor blink");
			return false;
		}
	}
	return true;
}

function chkalphanum_amount(str)
{
	alphabets="0123456789.";
	
	for(i=0;i<str.length;i++)
	{
		if(alphabets.indexOf(str.toLowerCase().charAt(i)) == -1)
		{
			alert ("Invalid characters found,Correct the information provided in the text box/area where the cursor blink");
			return false;
		}
	}
	return true;
}


function chkalphanum2(str)
{
	alphabets="abcdefghijklmnopqrstuvwxyz0123456789";
	
	for(i=0;i<str.length;i++)
	{
		if(alphabets.indexOf(str.toLowerCase().charAt(i)) == -1)
		{
			alert ("Invalid characters found,Correct the information provided in the text box/area where the cursor blink");
			return false;
		}
	}
	return true;
}


function trim(str) 
{
 	res="";

 	for(var i=0; i< str.length; i++) 
	{
   		if (str.charAt(i) != " ") 
		{
     		res +=str.charAt(i);
  		}
 	}
   
 	return res;
}

function chkmail2(str) 
{

	var em1=";";
	var em2=",";

	if (str.indexOf(em1)!=-1 || str.indexOf(em2)!=-1)
	{
	   alert("Invalid E-mail ID");
	   return false;
	}
	return true;
 }
 
function chkmail(str) 
{
	var at="@";
	var dot=".";
	var lat=str.indexOf(at);
	var lstr=str.length;
	var ldot=str.indexOf(dot);
	
	if (str.indexOf(at)==-1)
	{
	   alert("Invalid E-mail ID");
	   return false;
	}

	if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr)
	{
	   alert("Invalid E-mail ID");
	   return false;
	}

	if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr)
	{
		alert("Invalid E-mail ID");
		return false;
	}

	 if (str.indexOf(at,(lat+1))!=-1)
	 {
		alert("Invalid E-mail ID");
		return false;
	 }

	 if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot)
	 {
		alert("Invalid E-mail ID");
		return false;
	 }

	 if (str.indexOf(dot,(lat+2))==-1){
		alert("Invalid E-mail ID")
		return false
	 }
	
	 if (str.indexOf(" ") != -1)
	 {
		alert("Invalid E-mail ID");
		return false;
	 }

	 return true;					
}

function valid_date(x)
{
	dateStr=x;
	
	var slash1 = dateStr.indexOf("/");
	if (slash1 == -1) 
	{ 
		slash1 = dateStr.indexOf("-"); 
	}
	
	// if no slashes or dashes, invalid date
	if (slash1 == -1) 
	{ 
		alert ("Enter a valid date in DD-MM-YYYY format"); 
		return false; 
	}
	
	var dateDay = dateStr.substring(0, slash1)
	var dateMonthAndYear = dateStr.substring(slash1+1, dateStr.length);
	
	var slash2 = dateMonthAndYear.indexOf("/");
	if (slash2 == -1) 
	{ 
		slash2 = dateMonthAndYear.indexOf("-"); 
	}
	
	// if not a second slash or dash, invalid date
	if (slash2 == -1) 
	{  
		alert ("Enter a valid date in DD-MM-YYYY format"); 
		return false; 
	}
	
	var dateMonth = dateMonthAndYear.substring(0, slash2);
	var dateYear = dateMonthAndYear.substring(slash2+1, dateMonthAndYear.length);
	
	if ( (dateMonth == "") || (dateDay == "") || (dateYear == "") ) 
	{ 
		alert ("Enter a valid date in DD-MM-YYYY format"); 
		return false; 
	}
	
	// if any non-digits in the month, invalid date
	for (var x=0; x < dateMonth.length; x++) 
	{
		var digit = dateMonth.substring(x, x+1);
		if ((digit < "0") || (digit > "9")) 
		{ 
			alert ("Enter a valid date in DD-MM-YYYY format, Invalid Month"); 
			return false; 
		}
	}
	
	// convert the text month to a number
	var numMonth = 0;
	for (var x=0; x < dateMonth.length; x++) 
	{
		digit = dateMonth.substring(x, x+1);
		numMonth *= 10;
		numMonth += parseInt(digit);
	}
	
	if ((numMonth <= 0) || (numMonth > 12)) 
	{ 
		alert ("Enter a valid date in DD-MM-YYYY format, Invalid Month "+numMonth); 
		return false; 
	}
	
	// if any non-digits in the day, invalid date
	for (var x=0; x < dateDay.length; x++) 
	{
		digit = dateDay.substring(x, x+1);
		if ((digit < "0") || (digit > "9")) 
		{ 
			alert ("Enter a valid date in DD-MM-YYYY format"); 
			return false; 
		}
	}

	// convert the text day to a number
	var numDay = 0;
	for (var x=0; x < dateDay.length; x++) 
	{
		digit = dateDay.substring(x, x+1);
		numDay *= 10;
		numDay += parseInt(digit);
	}
	
	if ((numDay <= 0) || (numDay > 31)) 
	{ 
		alert ("Enter a valid date in DD-MM-YYYY format, Invalid Day"); 
		return false; 
	}
	
	// February can't be greater than 29 (leap year calculation comes later)
	if ((numMonth == 2) && (numDay > 29)) 
	{ 
		alert ("Enter a valid date in DD-MM-YYYY format, Invalid Day"); 
		return false; 
	}
	
	// check for months with only 30 days
	if ((numMonth == 4) || (numMonth == 6) || (numMonth == 9) || (numMonth == 11)) 
	{ 
		if (numDay > 30) 
		{ 
			alert ("Enter a valid date in DD-MM-YYYY format, Invalid Day"); 
			return false; 
		} 
	}
	
	// if any non-digits in the year, invalid date
	for (var x=0; x < dateYear.length; x++) 
	{
		digit = dateYear.substring(x, x+1);
		if ((digit < "0") || (digit > "9")) 
		{
			alert ("Enter a valid date in DD-MM-YYYY format, Invalid Year"); 
			return false; 
		}
	}
	
	// convert the text year to a number
	var numYear = 0;
	for (var x=0; x < dateYear.length; x++) 
	{
		digit = dateYear.substring(x, x+1);
		numYear *= 10;
		numYear += parseInt(digit);
	}
	
	// Year must be a 2-digit year or a 4-digit year
	if ((dateYear.length != 2) && (dateYear.length != 4)) 
	{
		alert ("Enter a valid date in DD-MM-YYYY format, Invalid Year"); 
		return false; 
	}
	
	// if 2-digit year, use 50 as a pivot date
	if ((numYear < 50) && (dateYear.length == 2)) 
	{ 
		numYear += 2000; 
	}
	
	if ((numYear < 100) && (dateYear.length == 2)) 
	{ 
		numYear += 1900; 
	}
	
	if ((numYear <= 0) || (numYear > 9999)) 
	{
		alert ("Enter a valid date in DD-MM-YYYY format, Invalid Year"); 
		return false; 
	}
	
	// check for leap year if the month and day is Feb 29
	if ((numMonth == 2) && (numDay == 29)) 
	{
		var div4 = numYear % 4;
		var div100 = numYear % 100;
		var div400 = numYear % 400;
		
		// if not divisible by 4, then not a leap year so Feb 29 is invalid
		if (div4 != 0) 
		{
			alert ("Enter a valid date in DD-MM-YYYY format, Invalid Date"); 
			return false; 
		}
		
		// at this point, year is divisible by 4. So if year is divisible by
		// 100 and not 400, then it's not a leap year so Feb 29 is invalid
		if ((div100 == 0) && (div400 != 0)) 
		{
			alert ("Enter a valid date in DD-MM-YYYY format, Invalid Date"); 
			return false; 
		}
	}
	// date is valid
	return true;
}

function y2k(number) 
{ 
	return (number < 1000) ? number + 1900 : number; 
}

function timeTillDate(startDay,startMonth,startYear,whenDay,whenMonth,whenYear)
{    
   var now = new Date(y2k(startYear),startMonth-1,startDay);
   var then = new Date(y2k(whenYear),whenMonth-1,whenDay);
   var difference = Date.UTC(y2k(then.getYear()),then.getMonth(),then.getDate(),0,0,0) - Date.UTC(y2k(now.getYear()),now.getMonth(),now.getDate(),0,0,0);   
   return difference;
}


function chkstdcode(str) 
{
alphabets="0123456789";

if(str.length < 3 || str.length > 5) { alert ("Not a Valid STD code, Please Re-Enter"); return false; }

	for(i=0;i<str.length;i++)
	{
		if(alphabets.indexOf(str.charAt(i)) == -1)
		{
			alert ("Not a Valid STD code, Please Re-Enter");
			return false;
		}
	}	 
	
	return true;
}


function chkphoneNumber(str) 
{
alphabets="0123456789";

if(str.length < 5 || str.length > 8) { alert ("Not a Valid Phone Number, Please Re-Enter"); return false; }

	for(i=0;i<str.length;i++)
	{
		if(alphabets.indexOf(str.charAt(i)) == -1)
		{
			alert ("Not a Valid Phone Number, Please Re-Enter");
			return false;
		}
	}	 
	
	return true;
}


function chkpFax(str) 
{
alphabets="0123456789";

if(str.length < 5 || str.length > 8) { alert ("Not a Valid Phone Number, Please Re-Enter"); return false; }

	for(i=0;i<str.length;i++)
	{
		if(alphabets.indexOf(str.charAt(i)) == -1)
		{
			alert ("Not a Valid Fax Number, Please Re-Enter");
			return false;
		}
	}	 
	
	return true;
}

function chkmobilephoneNumber(str) 
{
alphabets="0123456789";

if(str.length < 10 || str.length > 11) { alert ("Not a Valid Mobile Phone Number, Please Re-Enter"); return false; }

	for(i=0;i<str.length;i++)
	{
		if(alphabets.indexOf(str.charAt(i)) == -1)
		{
			alert ("Not a Valid Mobile Phone Number, Please Re-Enter");
			return false;
		}
	}	 
	
	return true;
}

function chkuserid(str)
{
alphabets="abcdefghijklmnopqrstuvwxyz0123456789@_.-";
	
if(str.length < 6 || str.length > 20) { alert ("Not a Valid User ID. UserID must contain 6 to 20 characters. Please Re-Enter"); return false; }

	for(i=0;i<str.length;i++)
	{
		if(alphabets.indexOf(str.toLowerCase().charAt(i)) == -1)
		{
			alert ("Invalid characters found,Correct the information provided in the text box/area where the cursor blink");
			return false;
		}
	}
	return true;
}


function chkpasswd(str)
{
alphabets="abcdefghijklmnopqrstuvwxyz0123456789-+_.?@$%/\&*,;:'(){}[]`~!^| ";
	
if(str.length < 6 || str.length > 10) { alert ("Not a Valid Password. Password must contain 6 to 10 characters. Please Re-Enter"); return false; }

	for(i=0;i<str.length;i++)
	{
		if(alphabets.indexOf(str.toLowerCase().charAt(i)) == -1)
		{
			alert ("Invalid characters found,Correct the information provided in the text box/area where the cursor blink");
			return false;
		}
	}
	return true;
}


function chkverifycode(str)
{
alphabets="abcdefghijklmnopqrstuvwxyz0123456789";
	
if(str.length != 6) { alert ("Not a Valid Verification Code. Please enter the code shown in the image"); return false; }

	for(i=0;i<str.length;i++)
	{
		if(alphabets.indexOf(str.toLowerCase().charAt(i)) == -1)
		{
			alert ("Invalid characters found,Correct the information provided in the text box/area where the cursor blink");
			return false;
		}
	}
	return true;
}


function checkUrl(str) 
{
var regexp = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
if(regexp.test(str)) return true;
else { alert("Not a Valid URL, Please Re-Enter"); return false; }
}

function checkdate(input)
{
			var validformat=/^\d{2}\/\d{2}\/\d{4}$/ //Basic check for format validity
			if (!validformat.test(input.value))
			{
				alert("Invalid Date Format. Please correct and submit again.");
				return false;
			}
			else
			{ 
				var dayfield=input.value.split("-")[0]
				var monthfield=input.value.split("-")[1]
				var yearfield=input.value.split("-")[2]
				var dayobj = new Date(yearfield, monthfield-1, dayfield)
				if ((dayobj.getMonth()+1!=monthfield)||(dayobj.getDate()!=dayfield)||(dayobj.getFullYear()!=yearfield))
				{
				   alert("Invalid Date. Please Re-Enter"); 
				   input.select();
				   return false;
				}
			    else			
					return true;
			}
}

//registration number
function chkregnnum(str)
{
	alphabets="abcdefghijklmnopqrstuvwxyz0123456789-+_.@$%/\&*,;:'() ";
    for(i=0;i<str.length;i++)
    {
           if(alphabets.indexOf(str.toLowerCase().charAt(i)) == -1)
           {
                  alert ("Not a Valid Registration Number. Invalid characters found, Please Re-Enter");
                  return false;
            }
    }
    return true;
}


function isValidURL(url){
    var RegExp = /^(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,4}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?$/;
    if(RegExp.test(url)){
        return true;
    }else{
        return false;
    }
}
function openDet(val)
{
if(document.getElementById(val+'_Pan').style.display=='none')
{
document.getElementById(val+'_Pan').style.display='';	
document.getElementById(val+'_Pancopy').style.display='';
document.getElementById(val+'_Aadhar').style.display='';
document.getElementById(val+'_Aadharcopy').style.display='';
document.getElementById(val+'_Mobile').style.display='';
}
else
{
document.getElementById(val+'_Pan').style.display='none';	
document.getElementById(val+'_Pancopy').style.display='none';
document.getElementById(val+'_Aadhar').style.display='none';
document.getElementById(val+'_Aadharcopy').style.display='none';
document.getElementById(val+'_Mobile').style.display='none';
}
}