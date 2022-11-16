export function showText(setHandle,str='',closeHandle,speed=150){
	let strArr = str.trim().split("");
	let newStr = '';
	let len = strArr.length;
	let number = 0;
	let timer = setInterval(() => {
		if (number > len+20) {
			clearInterval(timer);
			if (closeHandle) {
				closeHandle((pre)=>pre+1);
			}
			return;
		}
		if (number <= len-1) {
			newStr += strArr[number];
			setHandle(newStr);
		}
		
		number++;
	}, speed);
}

