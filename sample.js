
console.log(1);
function do_stuff() {
    console.log("before");
    
    $.ajax({ type: "GET",
	     url: "http://localhost:8001/bpb",
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

function do_fetch() {
    fetch("http://localhost:8001").then(function(res) {
    	// res instanceof Response == true.
    	if (res.ok) {
    	    console.log(res);
    	} else {
    	    console.log("Looks like the response wasn't perfect, got status", res.status);
    	}
    }, function(e) {
    	console.log("Fetch failed!", e);
    });
    
}

console.log(2);
setTimeout(do_stuff, 1000);
console.log(3);

setTimeout(do_fetch, 7000;)

	   
