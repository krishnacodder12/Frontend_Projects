function myfucn() {
    d = document.getElementById("date");
    m = document.getElementById("month");
    y = document.getElementById("year");
    dd = parseInt(d.value);
    mm = parseInt(m.value);
    yy = parseInt(y.value);


    //april 13 2001 => 13 4 2001 => 22
    const now = new Date();


    curr_year = now.getFullYear(); //2023
    curr_month = now.getMonth(); //8
    curr_date = now.getDate();
    if (curr_month>mm) {
        year_diff = curr_year-yy;
    }
    else{
        year_diff = curr_year-yy-1;
    }

    document.getElementById("result").innerHTML = year_diff;
}

