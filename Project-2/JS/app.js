
arr_header = document.getElementById('header1');

console.log(arr_header);

function scrollPage() 
{
    if(document.documentElement.scrollTop > 150)
    {
        // arr_header.style.height = '70px';
        arr_header.style.opacity = '1';
    }
    else
    {   
        // arr_header.style.height = '50px';
        arr_header.style.opacity = '0';

        

    }
}
