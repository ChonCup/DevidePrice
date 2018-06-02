
		var guessSubmit = document.querySelector('.guessSubmit');
		var PriceField = document.querySelector('.PriceField');
		var VatField = document.querySelector('.VatField');
		var SCField = document.querySelector('.SCField');
		var NetPrice = document.querySelector('.NetPrice');
		
		VatField.value = "7";
			
		function CalPrice()
		{	
			var Price = Number(PriceField.value);
			var Vat = Number(VatField.value);
			var SC = Number(SCField.value);
			
			var Net = Price * (1 + Vat*0.01) * (1 + SC*0.01);
			
			NetPrice.textContent="Net Price is : " + Net;
			NetPrice.style.backgroundColor = 'red';
		}
		
		guessSubmit.addEventListener('click', CalPrice);
		
