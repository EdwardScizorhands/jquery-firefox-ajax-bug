
console.log(1);
function do_stuff(url) {
    console.log("before");
    
    $.ajax({ type: "GET",
	     url: url,
    	     success: function(a) {
		 alert("success");
	     },
    	     error: function(a,b,c) {
		 alert("failure");
		 console.log(a);
		 console.log(a.status);
		 console.log(a.statusText);
	     },
    	   });
    console.log("after");
}

function do_fetch(url) {

    fetch(url, { mode:'no-cors'} ).then( function(res) {
    	if (res.ok) {
    	    console.log(res);
    	} else {
    	    console.log("Looks like the response wasn't perfect, got status", res.status);
	    console.log("res is " + res);
	    console.log(res);
	    console.log(res.body);
	    console.log(res.headers);
    	}
	
    })
    /*

    }, function(e) {
    	console.log("Fetch failed!", e);
    })
    */
}

console.log(2);
//setTimeout(do_stuff, 1000);
console.log(3);

setTimeout(function() { do_stuff("http://www.example.com/index.html")} ,
	   2000);


setTimeout(function() { do_stuff("http://localhost:8001/index.html")} ,
	   4000);


	   
// The grab of example.com always worked

// localhost
   //: on chrome, fetch fails, but ajax works.
   // on firefox, both fail, but fetch does actually make the request.  fetch fails the same way as on chrome


// why does fetch fail??
