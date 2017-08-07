/*function borderStyle(x)
{
    x.style.borderBottomColor = "steelblue";
    x.style.transition = "all 1s";
    x.style.transitionTimingFunction = "ease-out";
}*/

function borderStyle(x,y)
{
    document.getElementById(y).placeholder = "";

    x = document.getElementById(x);

    x.style.borderBottomColor = "steelblue";
    x.style.transition = "all 1s";
    x.style.transitionTimingFunction = "ease-out";
}

function hideBorderStyle(x)
{
    x.style.borderBottomColor = "darkgrey";
}

var userName;
var userKey;
var userNameSignIn;
var userKeySignIn;

function save()
{
    userName = document.getElementById('userName').value;
    userKey = document.getElementById('key').value;

    if(userName == "" || userKey == "")
    {
        alert("User Name or Key is missing...!");
    }
    else
    {
        localStorage.setItem(userKey,userName);
        alert("Congrats! You are successfully Registered");
    }
}

function check()
{
    userNameSignIn = document.getElementById('userNameS').value;
    userKeySignIn = document.getElementById('keyS').value;

    if(userNameSignIn == "" || userKeySignIn == "")
    {
        alert("User Name or Key is missing...!");
    }
    else
    {
        userSignIn();
    }
}

function userSignIn()
{
    userNameSignIn = document.getElementById('userNameS').value;
    userKeySignIn = document.getElementById('keyS').value;

    if(localStorage.length == 0)
    {
        alert("Nothing in record. Please Register First");
    }
    else
    {
        for (var i = 0; i < localStorage.length; i++)
        {
            var key   = localStorage.key(i);
            var value = localStorage.getItem(key);

            if(userNameSignIn === value && userKeySignIn === key)
            {
                alert("Welcome! You are successfully Signed In");
            }
            else
            {
                alert("User Name or Key is Incorrect! \nOR You are not registered \n\nNote: To register click I want to register" );
            }
        }
    }
}