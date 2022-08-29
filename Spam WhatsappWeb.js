/* ------------------------------------------------------ */
/*          SPAM MASIVO WHATSAPP WEB - BY BONILLA         */
/* ------------------------------------------------------ */
const input = document.querySelectorAll("[contenteditable='true']")[1];
let mensaje = prompt('Escriba su mensaje')
let cantidad = prompt('Escriba la cantidad')

function Send(input, mensaje) {
	var event = new InputEvent('input', {
		bubbles: true,
	});
	input.innerHTML = mensaje;
	input.dispatchEvent(event);
	document.querySelector('span[data-icon="send"]').click();
}
function spamBonilla(mensaje, cantidad) {
	for (let i = 0; i < cantidad; i++) {
		Send(input, mensaje);
	}
	alert('SCRIPT -  WHATSAPP SPAM - BY MAXCODING')
}
spamBonilla(mensaje, cantidad);