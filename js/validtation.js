  jQuery(function(){
				document.getElementById("register").submit();
				jQuery("#fname").validate({
                    expression: "if (VAL) return true; else return false;",
                    message: "Enter Your First Name"
                });
				jQuery("#lname").validate({
                    expression: "if (VAL) return true; else return false;",
                    message: "Enter Your Last Name"
                });
			    jQuery("#phone").validate({
				    expression: "if (!isNaN(VAL) && VAL) return true; else return false;",
					message: "Enter Phone Number"
				});
				jQuery("#cell").validate({
				    expression: "if (!isNaN(VAL) && VAL) return true; else return false;",
					message: "Enter Cell Number"
				});
				jQuery("#email").validate({
				    expression: "if (VAL.match(/^[^\\W][a-zA-Z0-9\\_\\-\\.]+([a-zA-Z0-9\\_\\-\\.]+)*\\@[a-zA-Z0-9_]+(\\.[a-zA-Z0-9_]+)*\\.[a-zA-Z]{2,4}$/)) return true; else return false;",
                    message: "Enter valid Email ID"
                });
				 jQuery("#mensagem").validate({
				    expression: "if (!isNaN(VAL) && VAL) return true; else return false;",
					message: "Enter Mensagem"
				});
				
				
			});	