function validar()
		{
			var usuario = document.getElementById("usuario").value;
			var Contraseña = document.getElementById("pass").value;	

			if(usuario == "geragt" && Contraseña == "2101")
			{
				alert("Usuario y Contraseña validos");
				window.open("pesogalactico.html");
			}
			else
			{
				alert("cheque sus datos pleace");
			}
		}