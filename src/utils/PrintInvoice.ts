export const printInvoice = (data: any) => {
	let myWindow = window.open("", "", "width=9999,height=9999");
	myWindow?.document.write(data);

	// myWindow?.document.close(); //missing code
	myWindow?.focus();
	// myWindow?.print();
};
