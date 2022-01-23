
function do_stuff() {
    console.log("before");
    
    $.ajax({ type: "GET",
    	     url: "http://www.example.com/example",
    	     success: function(a) {
		 alert("success");
	     },
    	     error: function(a) {
		 alert("failure");
		 console.log(a);
	     },
    	   });
    console.log("after");
}

setTimeout(do_stuff, 1000);
