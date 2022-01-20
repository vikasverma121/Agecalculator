const months = [31,28,31,30,31,30,31,31,30,31,30,31];

function ageCalculate(){
    let today = new Date();
    let inputDate = new Date(document.querySelector('.dateb').value);
    let birthMonth,birthDate,birthYear;
    let birthDetails = {
        date:inputDate.getDate(),
        month:inputDate.getMonth()+1,
        year:inputDate.getFullYear()
    }
    let inputDate2=new Date(document.querySelector('.datec').value);
    let currentDetails={
     year:inputDate2.getFullYear(),
     month:inputDate2.getMonth()+1,
     date:inputDate2.getDate(),
    }

    leapChecker(currentDetails.year);

    if(
        birthDetails.year > currentDetails.year ||
        ( birthDetails.month > currentDetails.month && birthDetails.year == currentDetails.year) || 
        (birthDetails.date > currentDetails.date && birthDetails.month == currentDetails.month && birthDetails.year == currentDetails.year)
    ){
        alert("Not Born Yet");
        displayResult("-","-","-");
        return;
    }

    birthYear = currentDetails.year - birthDetails.year;

    if(currentDetails.month >= birthDetails.month){
        birthMonth = currentDetails.month - birthDetails.month;
    }
    else{
        birthYear--;
        birthMonth = 12 + currentDetails.month - birthDetails.month;
    }

    if(currentDetails.date >= birthDetails.date){
        birthDate = currentDetails.date - birthDetails.date;
    }
    else{
        birthMonth--;
        let days = months[currentDetails.month - 2];
        birthDate = days + currentDetails.date - birthDetails.date;
        if(birthMonth < 0){
            birthMonth = 11;
            birthYear--;
        }
    }
    displayResult(birthDate,birthMonth,birthYear);
}

function displayResult(bDate,bMonth,bYear){
    document.querySelector('.year').textContent = bYear;
    document.querySelector('.month').textContent = bMonth;
    document.querySelector('.day').textContent = bDate;
}

function leapChecker(year){
    if(year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)){
        months[1] = 29;
    }
    else{
        months[1] = 28;
    }
} 