export function showText(setHandle,str='',closeHandle,speed=100){
	let strArr = str.trim().split("");
	let newStr = '';
	let len = strArr.length;
	let number = 0;
	let timer = setInterval(() => {
		if (number > len-1) {
			clearInterval(timer);
			setTimeout(closeHandle((pre)=>pre+1),2000);
			return;
		}
	
		newStr += strArr[number];
		setHandle(newStr);
		number++;
	}, speed);
}

