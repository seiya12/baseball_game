// 成績の記録（とりあえずはSessionStorage)
function record(num){
	// 現在のsession読み取り
	var np = sessionStorage.getItem('vsnp');
	var h  = sessionStorage.getItem('vsh');
	var hr = sessionStorage.getItem('vshr');
	if (np == null || h == null || hr == null) {
		np = Number(np);
		h  = Number(h);
		hr = Number(hr);
	}
	// NP+1
	np ++;
	sessionStorage.setItem('vsnp', np);
	// 結果によってH,HRを追加
	if (num) {
		if(num == 1){
			// HRを追加
			hr ++;
			sessionStorage.setItem('vshr', hr);
		}
		// Hを追加
		h ++;
		sessionStorage.setItem('vsh', h);
	}
	// AVGの計算 H/NP
	var avg = (Math.round((h / np) * 1000) / 1000).toFixed(3);
	// recordbox書き出し
	document.getElementById('NP').innerHTML    = np;
	document.getElementById('AVG').innerHTML   = avg;
	document.getElementById('H').innerHTML     = h;
	document.getElementById('HR').innerHTML    = hr;
}

// 選択位置とボールの位置の判定
function judgment(id) {
	// 画像リセット
	var elements = document.getElementsByClassName('box');
	for (i = 0; i < elements.length; i++) {
		elements[i].style.backgroundColor = '#f0f8ff';
	}
	var elements = document.getElementsByClassName('image');
	for (i = 0; i < elements.length; i++) {
		elements[i].src = '';
	}
	// 判定処理
	if (sessionStorage.getItem('vsball')) {
		var id        = id.split(' ');
		var elements1 = document.getElementsByClassName(id[1]);
		var ball      = sessionStorage.getItem('vsball');
		sessionStorage.removeItem('vsball')
		var elements2 = document.getElementsByClassName(ball);
		var result    = document.getElementById('result');
		if (id[1].slice(3) % 3 != ball.slice(3) % 3) {
			elements1[1].src                   = 'images/k.png';
			elements2[1].src                   = 'images/ball.png';
			elements1[0].style.backgroundColor = '#e6e6fa';
			elements2[0].style.backgroundColor = '#e6e6fa';
			result.innerHTML                   = 'ストライク';
			result.style.color                 = '#191970';
			record(0);
		}
		else {
			if (id[1] == ball) {
				elements1[0].style.backgroundColor = 'red';
				elements1[1].src                   = 'images/critical.png';
				result.innerHTML                   = 'ホームラン！！';
				result.style.color                 = 'red';
				record(1);
			}
			else {
				elements1[0].style.backgroundColor = 'pink';
				elements2[0].style.backgroundColor = 'pink';
				elements1[1].src                   = 'images/hit.png';
				elements2[1].src                   = 'images/ball.png';
				result.innerHTML                   = 'ヒット！';
				result.style.color                 = '#ff1493';
				record(2);
			}
		}
	}
	else{
		var result    			= document.getElementById('result');
		result.innerHTML    = '打者：コースをクリック';
		result.style.color	= '#696969';
		var id        			= id.split(' ');
		var ball					  = id[1];
		sessionStorage.setItem('vsball', ball );
	}
}

function reset(){
	// 画像リセット
	var elements = document.getElementsByClassName('box');
	for (i = 0; i < elements.length; i++) {
		elements[i].style.backgroundColor = '#f0f8ff';
	}
	var elements = document.getElementsByClassName('image');
	for (i = 0; i < elements.length; i++) {
		elements[i].src = '';
	}
	sessionStorage.removeItem('vsball');
	result.innerHTML    = '投手：コースをクリック';
	result.style.color	= '#696969';
	// 成績リセット
	np = 0;
	h  = 0;
	hr = 0;
	var avg = (0).toFixed(3);
	sessionStorage.setItem('vsnp', np);
	sessionStorage.setItem('vsh', h);
	sessionStorage.setItem('vshr', hr);
	// recordbox書き出し
	document.getElementById('NP').innerHTML    = np;
	document.getElementById('AVG').innerHTML   = avg;
	document.getElementById('H').innerHTML     = h;
	document.getElementById('HR').innerHTML    = hr;
	document.getElementById('title').innerHTML = title;
}